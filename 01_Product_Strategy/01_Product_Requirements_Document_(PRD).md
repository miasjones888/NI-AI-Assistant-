# Product Requirements Document (PRD)

## Product
**Neuro-Inclusive Executive Assistant (NIA)**

## Brand Authority (Canonical Naming)
This PRD is the single source of truth for product naming and brand references.

### Canonical Name Set
- **Product Name (long):** Neuro-Inclusive Executive Assistant
- **Product Acronym:** NIA
- **Assistant Reference:** NIA Assistant

### Legacy / Duplicate Names to Avoid
The following labels should not be used in controlled docs because they create brand drift:
- NI-AI-Assistant
- Neuro Inclusive AI Assistant
- Executive AI Assistant

If a legacy term appears in historical context, normalize to **Neuro-Inclusive Executive Assistant (NIA)** on first mention.

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

## Cross-Document Linking Requirements
To prevent duplicate policies and broken handoffs, each domain doc must link back to its authority:
- **Technical Architecture** defers command behavior to `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md` and naming to this PRD.
- **AI Brain & Prompts** defers naming to this PRD and operational runbook behaviors to SOP.
- **User Operations** defers command semantics to slash command library and naming to this PRD.
