# HANDOFF TO GOOGLE AI STUDIO

## 1) Purpose of Handoff and Intended Build Scope

This handoff provides Google AI Studio with the canonical project context needed to continue implementation of the **NI AI Assistant** without re-litigating product intent, safety posture, or operating workflows.

The intended build scope for the receiving team/model is to:

- Preserve the product vision and user outcomes defined in strategy docs.
- Implement and/or refine the AI behavior according to the master system prompt and command library.
- Respect technical architecture, permissions, and security constraints as first-class requirements.
- Support operator workflows documented in SOP and quick-reference materials.
- Validate edge-case handling and failure-mode mitigations before release.

Out of scope for this handoff:

- Rewriting foundational governance principles unless explicitly approved by project owners.
- Treating convenience notes or ad-hoc drafts as authoritative over canonical source docs.

## 2) Ordered Canonical Source Docs to Ingest First

Ingest in this order to avoid prompt/architecture drift:

1. `README.md`  
   Baseline orientation, repository structure, and onboarding anchor.
2. `01_Product_Strategy/01_Product_Requirements_Document_(PRD).md`  
   Primary source for product goals, constraints, and success criteria.
3. `01_Product_Strategy/02_Cognitive_Accessibility_Guidelines.md`  
   Accessibility requirements that must influence UX/content behavior.
4. `01_Product_Strategy/02b_Decolonial_and_Non_Hierarchical_Design_Principles.md`  
   Normative design principles and interaction posture.
5. `02_Technical Architecture/03_System_Architecture_&_Data_Flow.md`  
   Canonical architecture and data movement assumptions.
6. `02_Technical Architecture/04_Tool_Permissions_&_Security.md`  
   Security model, tool-use boundaries, and permission expectations.
7. `03_AI_Brain_&_Prompts/05_Master_System_Prompt.md`  
   Core behavioral/system-instruction source for assistant execution.
8. `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`  
   Command schema, invocation intent, and operational semantics.
9. `03_AI_Brain_&_Prompts/07_Edge_Cases_&_Failure_Modes.md`  
   Reliability and safety handling for non-happy-path scenarios.
10. `04_User_Operations/08_Standard_Operating_Procedure_(SOP).md`  
    Operator playbooks and production process guidance.
11. `04_User_Operations/09_Quick_Reference_Cheat_Sheet.md`  
    Fast operational checks; use for quick validation only.

## 3) Deprecated / Non-Authoritative Files to Ignore

At handoff time, this repository appears to include only the core source set above plus `README.md`. No explicit deprecated files are currently labeled.

Until maintainers mark deprecations, treat the following as **non-authoritative** relative to canonical docs:

- Any temporary exports, scratch notes, or one-off summaries created outside the listed canonical paths.
- Any generated assistant outputs that conflict with canonical documents.
- Any future duplicate copies of docs in alternate folders unless explicitly designated as the latest source of truth.

If conflicting variants appear later, prefer files that are:

1. In the canonical path list above.
2. Most recently approved by maintainers.
3. Explicitly identified as “current” in `README.md` or a maintainer change log.

## 4) Prompting / System-Instruction Precedence Rules

When generating behavior in Google AI Studio, enforce this precedence stack (highest to lowest):

1. Platform/runtime hard constraints (safety, policy, and security enforcement).
2. Session-level system instructions configured in AI Studio.
3. Project master prompt in `03_AI_Brain_&_Prompts/05_Master_System_Prompt.md`.
4. Applicable command-specific instructions in `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`.
5. Product and design constraints from strategy docs (PRD, accessibility, decolonial principles).
6. Technical and operational constraints from architecture/security/SOP docs.
7. User prompts and conversational context.

Tie-break rules:

- If two instructions conflict at different levels, obey the higher-precedence level.
- If two instructions conflict at the same level, choose the more specific instruction.
- If still ambiguous, do not guess; log ambiguity and escalate to maintainers.

## 5) Open Questions, Known Risks, and Assumptions

### Open Questions

- Are there any external stakeholders who still require off-repo `.docx` exports as part of handoff?
- Are generated `.md.docx` export files in `documentation/` still required for external distribution?
- Which owner is final approver for prompt changes vs. architecture/security changes?
- What evaluation suite (if any) is mandatory before deployment in AI Studio?
- What is the required cadence for syncing Google AI Studio prompts with repo updates?

### Known Risks

- **Format mismatch risk:** external teams may request `.docx` deliverables even though this repo is Markdown-only.
- **Format friction risk:** relying on generated `.md.docx` exports can reduce portability and increase ingestion inconsistencies.
- **Instruction drift risk:** AI Studio system settings can silently diverge from repository prompt definitions.
- **Conflict risk:** overlapping guidance across product, prompt, and operations docs may produce inconsistent behavior if precedence is not enforced.
- **Security regression risk:** tool-permission policies may be weakened if architecture/security docs are not treated as binding.

### Assumptions

- The listed canonical documents are the current source of truth.
- No hidden/private dependency documents are required for baseline transfer.
- Receiving team has authority to configure AI Studio system instructions and evaluation workflow.
- Maintainers will clarify unresolved conflicts quickly when escalated.

## 6) Acceptance Checklist for Successful Transfer

Use this checklist to confirm handoff completion:

- [ ] All canonical docs ingested in the required order.
- [ ] AI Studio system instructions explicitly aligned with precedence rules in this file.
- [ ] Master prompt and slash-command behavior mapped without omission.
- [ ] Accessibility and decolonial principles represented in behavioral guidance.
- [ ] Architecture, data-flow, and permission/security constraints integrated into implementation.
- [ ] Edge-case/failure-mode handling translated into concrete guardrails/tests.
- [ ] SOP and quick-reference workflows validated with at least one dry-run scenario.
- [ ] Conflicts/ambiguities logged with named owner and resolution path.
- [ ] A versioned “handoff accepted” note recorded by receiving team.
