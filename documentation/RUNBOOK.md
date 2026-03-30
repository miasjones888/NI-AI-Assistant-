# Runbook

This runbook defines how to build, review, update, and hand off changes for the NI AI Assistant project.

## 1) Build / Preparation Process
1. **Pull latest changes** from the working branch and verify a clean git state.
2. **Review scope** against requested outcomes (what files and behaviors should change).
3. **Apply updates** in small, atomic commits where possible.
4. **Run quality checks** appropriate to the change type:
   - Markdown/document linting where available.
   - Link/path checks for internal references.
   - Prompt consistency checks (if prompt files changed).
5. **Summarize impact** in plain language (what changed, why, and expected effects).

## 2) Review Process
1. **Self-review first**
   - Confirm all requested items were implemented.
   - Confirm no unrelated files were modified.
2. **Peer review second**
   - Validate technical correctness and maintainability.
   - Validate user-facing clarity and consistency.
3. **Owner review third**
   - Product/technical/prompt owners verify fit-for-purpose and risk profile.
4. **Record review outcomes**
   - Capture approvals, blockers, and required follow-ups in PR comments.

## 3) Update Process
1. Open a branch scoped to one objective.
2. Implement changes with clear commit messages.
3. Update related docs in the same change set when behavior or process changes.
4. Open PR with:
   - Change summary.
   - Risk assessment.
   - Validation steps and evidence.
   - Rollback notes (if applicable).
5. Merge only after required approvals and review-gate checks pass.

## 4) Change-Control Rules
- **No direct changes to main/release branches** without PR.
- **Traceability required:** each change must map to a request, ticket, or explicit objective.
- **Atomicity preferred:** avoid bundling unrelated updates.
- **Reversibility required:** changes should be easy to roll back.
- **Documentation parity required:** operational or prompt behavior changes must include documentation updates.
- **Approval before handoff:** no handoff to downstream teams/users until review gates are satisfied.

## 5) How to Update Prompts Safely (`03_AI_Brain_&_Prompts/`)
When modifying prompt assets in `03_AI_Brain_&_Prompts/`, use this safety checklist:

1. **Define intent before editing**
   - State the exact behavior to change.
   - State what must remain unchanged.
2. **Minimize blast radius**
   - Edit only the smallest relevant prompt file/section.
   - Avoid broad rewrites unless explicitly approved.
3. **Preserve constraints and guardrails**
   - Keep safety constraints, role boundaries, and escalation rules intact.
   - If constraints change, highlight this in PR risk notes.
4. **Regression-check behavior**
   - Test representative prompts (normal, edge-case, failure-mode scenarios).
   - Confirm old successful paths still behave correctly.
5. **Require prompt-owner signoff**
   - Prompt/AI owner must approve before merge/handoff.
6. **Document prompt deltas**
   - Summarize exactly what was changed and expected impact.
   - Include rollback guidance for prompt regressions.

## 6) Release Cadence
- **Default cadence:** Weekly release train for standard updates.
- **Patch cadence:** As-needed out-of-band patches for urgent fixes.
- **Major changes:** Planned windows with explicit stakeholder communication.

## 7) Review Gates & Sign-Off Before Handoff
All gates below must pass before handoff:

1. **Technical Gate (Technical Owner sign-off)**
   - Architecture consistency, quality checks, and file integrity verified.
2. **Product Gate (Product Owner sign-off)**
   - Scope acceptance and user-impact alignment verified.
3. **Prompt Safety Gate (Prompt/AI Owner sign-off, when applicable)**
   - Required for any change touching `03_AI_Brain_&_Prompts/`.
4. **Operations Gate (Operations Owner sign-off)**
   - Deployment/readiness, rollback path, and runbook compliance verified.

**Handoff is blocked** until all required owner approvals are present.
