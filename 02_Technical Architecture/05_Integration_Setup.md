# Integration Setup

## Purpose
This document defines how NIA integrates with Google Workspace services (Gmail, Calendar, Drive, and Tasks), including:
- required OAuth scopes,
- permission boundaries (read vs write),
- user consent flow,
- extension-first vs API-direct fallback behavior, and
- failure handling aligned to `03_AI_Brain_&_Prompts/07_Edge_Cases_&_Failure_Modes.md`.

---

## 1) Required OAuth Scopes by Service

> Principle: request least-privilege scopes first (read baseline), then escalate to write scopes only when the user explicitly approves an action that mutates data.

### Gmail

**Read baseline**
- `https://www.googleapis.com/auth/gmail.readonly`

**Write/escalated**
- `https://www.googleapis.com/auth/gmail.modify` (label/archive/read-state updates)
- `https://www.googleapis.com/auth/gmail.send` (send drafted or new messages)
- `https://www.googleapis.com/auth/gmail.compose` (create/update drafts before send)

### Calendar

**Read baseline**
- `https://www.googleapis.com/auth/calendar.readonly`

**Write/escalated**
- `https://www.googleapis.com/auth/calendar.events` (create/edit/delete events)

### Drive

**Read baseline**
- `https://www.googleapis.com/auth/drive.metadata.readonly` (file metadata/listing)
- `https://www.googleapis.com/auth/drive.readonly` (open/read file content)

**Write/escalated**
- `https://www.googleapis.com/auth/drive.file` (create/manage files created or opened via app)

### Tasks

**Read baseline**
- `https://www.googleapis.com/auth/tasks.readonly`

**Write/escalated**
- `https://www.googleapis.com/auth/tasks` (create/update/complete/reorder tasks)

---

## 2) Permission Boundaries (Read vs Write)

| Service | Read-only operations allowed by default | Write operations requiring explicit user approval |
|---|---|---|
| Gmail | Summarize inbox, fetch unread count, extract action items from selected threads | Send email, edit labels/status, archive/delete-like state changes |
| Calendar | Read availability, list existing events, detect free-time blocks | Create/update/delete events, move time blocks, invite attendees |
| Drive | Discover docs/files, read selected file content for synthesis | Create docs/files, update file contents, rename/move/share items |
| Tasks | List task lists/items, detect overdue items, calculate load | Create/edit/complete/reorder/delete tasks |

### Boundary Enforcement Rules
1. **Default mode is read-only** after first authentication.
2. **Write mode is command-bounded** (single action or batch) and must be confirmed by user-facing consent language.
3. **No silent escalation** from read scope to write scope.
4. **No background writes** for “helpful automation” without in-thread approval.
5. **Action receipt required** after writes (what changed, where, and what failed).

---

## 3) Consent Flow Steps

1. **Intent detection**
   - Detect whether user request is informational (read) or mutating (write).
2. **Scope minimization pass**
   - Select the smallest scope set needed for that exact action.
3. **Pre-consent explanation**
   - Plain-language prompt: what will be accessed/changed, and what will not be changed.
4. **OAuth consent screen**
   - User grants Google scopes.
5. **Post-consent verification**
   - Verify token + granted scopes; if partial consent, downgrade to supported operations.
6. **Execution preview (for write actions)**
   - Show concise plan (e.g., “Create 2 calendar blocks at 10:00 and 14:00”).
7. **Final execution confirmation**
   - Require explicit yes/confirm before mutating actions.
8. **Execution + receipt**
   - Perform action, then report outcome in plain language.
9. **Recovery fallback**
   - If execution fails, emit manual-copy checklist (see failure matrix).

---

## 4) Extension-Available vs API-Direct Fallback Paths

### Routing Policy
- **Primary path:** Google Workspace Extension tools (inside Gemini environment).
- **Secondary path:** direct Google API calls using OAuth tokens.
- **Tertiary path:** manual user execution checklist (copy/paste format).

### Decision Tree
1. If extension tool is available and healthy, use extension path.
2. If extension is unavailable but OAuth token + API endpoint are healthy, use API-direct path.
3. If both extension and API-direct are unavailable (or permission denied), switch to manual checklist mode immediately.
4. Never loop retries beyond bounded threshold (max 1 immediate retry per subsystem before fallback).

### Service-specific fallback notes
- **Gmail:** if send fails in extension, prepare plain-text draft body + recipient/subject template for manual send.
- **Calendar:** if event creation fails, output exact time blocks and titles for manual entry.
- **Drive:** if doc write fails, output full structured text so user can paste into target file.
- **Tasks:** if task creation fails, output checklist grouped by priority and due date.

---

## 5) Failure-Handling Matrix (Aligned to `07_Edge_Cases_&_Failure_Modes`)

> Alignment target: maintain low cognitive load, avoid shame/ambiguity, and always provide an executable manual next step.

| Failure mode | Trigger signal | AI behavior requirement | User-facing output contract | Fallback artifact |
|---|---|---|---|---|
| **System/API Connection Failure** (Edge Case #4) | Extension timeout, API 5xx/4xx auth failure, transport error | Do not dump raw stack traces; do not retry-loop indefinitely; switch to “manual execution path” quickly | Short direct notice + immediate checklist for manual continuation | Raw text execution list with times/actions |
| **Partial Scope Denial** | User declines write scope but grants read scope | Continue in read-only mode; do not reprompt aggressively | “I can continue in read-only mode and prepare actions for your approval later.” | Preview plan (no writes) |
| **Permission Boundary Violation Attempt** | Request implies disallowed write without consent | Block mutation; ask for explicit approval and scope escalation | “I can prepare this now; to execute it I need write approval.” | Drafted action plan |
| **Ambiguous/Unintelligible Input During Integration Step** (Edge Case #1) | Distressed or fragmented text during auth/action flow | Pause technical questioning; offer rescue language and /freeze-style option | Brief validation + binary next step choice | Minimal “pause + resume checklist” |
| **Over-ambitious Auto-Planning Request** (Edge Case #2) | Too many writes/tasks for available time | Refuse impossible execution; reduce to top-priority bounded set | “I selected top 2 executable actions; remainder deferred.” | Prioritized mini-plan + backlog |
| **Repeated Deferral in Task Sync** (Edge Case #3) | Same task repeatedly postponed | Flag loop and offer microscopic next step | “Delete or break into Step 1?” | Single-step task candidate |

---

## 6) Operational Guardrails

1. **Cognitive safety over technical completeness:** when in doubt, simplify output.
2. **Bounded retries only:** 1 immediate retry per failing subsystem, then fallback.
3. **Always leave the user with a next action:** API failure must still produce a usable manual plan.
4. **No shame language:** never frame failures as user error.
5. **Readable status reporting:** one-line status, then action list.

---

## 7) Implementation Checklist

- [ ] Implement read-scope-first OAuth request set.
- [ ] Add per-command write-scope escalation prompts.
- [ ] Add extension health check and API-direct fallback router.
- [ ] Add standardized manual-checklist generators per service.
- [ ] Add failure classifier mapping to matrix above.
- [ ] Add plain-language response templates for each failure class.
