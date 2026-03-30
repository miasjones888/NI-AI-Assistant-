# Product Requirements Document (PRD)

## Product
**Neuro-Inclusive Executive Assistant (NIA)**

## Authoritative Command Contract
All command definitions (name, trigger, inputs, outputs, side effects) are defined **only** in:
- `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`

No other document should redefine command behavior.

## Final Supported Command Set
- `/plan`
- `/project`
- `/dump`
- `/freeze`
- `/wrap`

## Global Approval Rule
External write actions (Calendar/Tasks/Gmail/Drive changes) require explicit user approval first.

## Explicit Deprecations
- `/intake` → `/plan`
- `/next` → `/project`
- `/stuck` → `/freeze`
