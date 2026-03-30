# System Architecture & Data Flow

## Command Orchestration Authority
All command routing and behavior are controlled by:
- `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`

If architecture notes and command definitions conflict, the command library is authoritative.

## Supported Runtime Commands
- `/plan`, `/project`, `/dump`, `/freeze`, `/wrap`

## Data-Flow Contracts (by command)
- `/plan`
  - Reads: Gmail (`newer_than:1d`), Calendar availability.
  - Writes (post-approval): Calendar events + Tasks.
- `/project`
  - Reads: Drive context (optional), Calendar availability.
  - Writes (post-approval): Calendar events + Tasks.
- `/dump`
  - Reads: user-provided text.
  - Writes (post-approval): optional Calendar/Tasks.
- `/freeze`
  - Reads/Writes: no automatic external tool actions.
- `/wrap`
  - Reads: Calendar + Tasks.
  - Writes (post-approval): defer/reschedule unfinished work.

## State and Safety Rules
- Session memory is chat-scoped; persistent state must be written to Calendar/Tasks after approval.
- All write operations require explicit user consent.
- Outputs must never exceed 3 actionable items surfaced at once.

## Deprecations (Explicit)
- Remove `/intake`, `/next`, and `/stuck` from active routing.
- Map deprecated commands to supported replacements with user-facing deprecation notice.
