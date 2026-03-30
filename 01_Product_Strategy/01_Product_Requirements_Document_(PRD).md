# Product Requirements Document (PRD)

## Product
**Neuro-Inclusive Executive Assistant (NIA)**

## Command Contract Policy
NIA must maintain one authoritative command contract in:
- `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`

All product behavior, UX copy, and tool orchestration must conform to that contract.

## Final Command Set
Supported commands:
1. `/plan`
2. `/project`
3. `/dump`
4. `/freeze`
5. `/wrap`

## Command-Level Functional Objectives
- `/plan`: offload inbox + anchor work into 2–3 bounded calendar blocks.
- `/project`: break complex work into micro-steps and generate first draft artifacts.
- `/dump`: transform chaos into structured plan with explicit approval gates.
- `/freeze`: halt pressure and provide low-friction reset options.
- `/wrap`: close day with completed summary and defer/reschedule unfinished work.

## Approval & Automation Requirement
No external write action (email/calendar/tasks/document changes) occurs without explicit user approval.
After approval, execution should be immediate and tool-driven.

## Deprecations (Explicit)
- `/intake` is deprecated; replaced by `/plan`.
- `/next` is deprecated; replaced by `/project`.
- `/stuck` is deprecated alias; normalize to `/freeze`.
