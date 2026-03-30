# Slash Command Library (Authoritative Contract)

This is the **single source of truth** for NIA command behavior.
If any other document conflicts with this file, this file wins.

For canonical brand naming, defer to:
- `01_Product_Strategy/01_Product_Requirements_Document_(PRD).md`

## Contract Schema
Each command definition includes:
- **Name**
- **Trigger**
- **Inputs**
- **Outputs**
- **Side effects**

---

## 1) `/plan` — Daily Setup
- **Trigger:** User types `/plan`.
- **Inputs:**
  - Optional scope (e.g., "today only", "include personal tasks").
- **Outputs:**
  - Inbox/actionability summary (last 24h).
  - Calendar availability summary.
  - Proposed 2–3 time-block execution plan.
  - Explicit approval prompt.
- **Side effects:**
  - **Read:** Gmail (`newer_than:1d`), Calendar availability.
  - **Write (only after explicit approval):** Create Calendar events and Tasks entries.

## 2) `/project` — Micro-Stepper + First Draft
- **Trigger:** User types `/project` followed by a task/project context.
- **Inputs:**
  - Project/task description.
  - Optional constraints (deadline, stakeholders, output format).
- **Outputs:**
  - Internal micro-step decomposition surfaced as only the next 1–2 steps.
  - Proposed schedule blocks for those 1–2 steps.
  - First draft with clear placeholders for missing details.
- **Side effects:**
  - **Read:** Drive context if needed, Calendar availability.
  - **Write (only after explicit approval):** Create Calendar events and Tasks entries.

## 3) `/dump` — Unstructured-to-Structured Synthesis
- **Trigger:** User types `/dump` or pastes raw, unstructured notes.
- **Inputs:**
  - Brain-dump text (chaotic notes, mixed priorities, fragmented context).
- **Outputs:**
  - Structured execution plan.
  - Categorized task groups (Professional, Personal/Life Admin).
  - Confirmation prompt to approve scheduling/actions.
- **Side effects:**
  - **Read:** User-provided text only (unless user asks for tool lookups).
  - **Write (only after explicit approval):** Optional Calendar/Tasks updates.

## 4) `/freeze` — Rescue Protocol
- **Trigger:** User types `/freeze` or indicates overwhelm/paralysis.
- **Inputs:**
  - Optional short state signal (e.g., "stuck", "panic", "can't start").
- **Outputs:**
  - Immediate expectation reset message.
  - 2–3 bounded low-friction options.
- **Side effects:**
  - **Read/Write:** No automatic external tool calls while in rescue flow.

## 5) `/wrap` — End-of-Day Closeout
- **Trigger:** User types `/wrap`.
- **Inputs:**
  - Optional instruction (e.g., "defer everything", "only move unfinished deep work").
- **Outputs:**
  - Completed-work summary.
  - Unfinished-work defer/reschedule proposal.
  - Explicit day-close confirmation.
- **Side effects:**
  - **Read:** Calendar and Tasks state.
  - **Write (only after explicit approval):** Reschedule/defer unfinished items.

---

## Deprecated / Removed Commands
The following are **not part of the final contract**:
- `/intake` — **Deprecated**. Use `/plan`.
- `/next` — **Deprecated**. Use `/project` for micro-stepping.
- `/stuck` — **Deprecated alias**. Normalize to `/freeze`.

Implementation rule: if deprecated commands are received, the assistant must acknowledge deprecation and redirect to the mapped active command.
