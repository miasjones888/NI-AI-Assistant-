# System Architecture & Data Flow

## Document Role
This file defines architecture/runtime constraints only.

## Contract Authority
For command behavior, this architecture doc defers to:
- `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`

For canonical product naming, this architecture doc defers to:
- `01_Product_Strategy/01_Product_Requirements_Document_(PRD).md`

This file must not duplicate full command copy or redefine product names.

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

## Architecture-to-Operations Handoff
Operational execution and runbook sequencing live in:
- `04_User_Operations/08_Standard_Operating_Procedure_(SOP).md`

Quick command lookup lives in:
- `04_User_Operations/09_Quick_Reference_Cheat_Sheet.md`
