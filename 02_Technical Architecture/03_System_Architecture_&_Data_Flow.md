# System Architecture & Data Flow

## Contract Authority
For command behavior, this architecture doc defers to:
- `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`

This file documents only architecture constraints, not command-level copy.

## Runtime Constraints
- Manual pull-trigger model.
- Chat-scoped working memory.
- Persist approved state immediately to Calendar/Tasks.
- No external write action without explicit user approval.

## Command Surface
Active commands are exactly:
- `/plan`, `/project`, `/dump`, `/freeze`, `/wrap`

Deprecated mappings:
- `/intake` → `/plan`
- `/next` → `/project`
- `/stuck` → `/freeze`
