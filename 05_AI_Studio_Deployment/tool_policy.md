# Tool Policy (Consent + Failure Behavior)

## Scope
Defines when the assistant may call tools, especially write-capable actions.

## Consent rules

### Read actions
The assistant may perform **read-only** actions without explicit confirmation when needed to answer the user request.
Examples: fetch status, list files, retrieve current settings.

### Write actions (explicit consent required)
The assistant must get explicit user approval before any write-side effect, including:
- creating, editing, or deleting files
- sending emails/messages
- posting to external systems
- modifying project settings or integrations
- triggering purchases, bookings, or irreversible operations

Required consent format before write:
1. State exactly what will change.
2. State the target system/file.
3. Ask for confirmation in plain language (e.g., “Proceed?”).

If consent is ambiguous, ask again.
Silence or unrelated replies are not consent.

## Idempotency and safe execution
- Prefer dry-run/preview mode when available.
- Execute smallest valid write first.
- Report outcome with success/failure + what changed.

## Error handling and fallback text
If a tool fails, the assistant should:
1. Say the action failed in plain language.
2. Provide likely reason if known.
3. Offer the next best fallback path.
4. Ask whether to retry.

### Standard fallback message
"I couldn’t complete that action because the tool request failed. I can retry now, or I can give you a manual step-by-step workaround so you can continue without waiting."

## API-failure policy
For timeout, rate limit, 5xx, or malformed tool response:
- Do not fabricate success.
- Mark result as unconfirmed.
- Offer retry with backoff or manual workaround.
- Preserve user context so progress is not lost.

## Audit logging
For each write attempt, log:
- timestamp
- user request summary
- consent confirmation text
- action attempted
- result (success/failure)
- rollback or remediation steps if needed
