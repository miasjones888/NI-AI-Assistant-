# Release Checklist (Pre-Launch)

## 1) Prompt + policy integrity
- [ ] `system_instruction.md` reflects final approved tone and boundaries.
- [ ] `tool_policy.md` consent language matches product/legal requirements.
- [ ] No conflicting instructions across system prompt and tool policy.

## 2) Model configuration lock
- [ ] Temperature/TopP/TopK/max output match approved baseline.
- [ ] Safety thresholds configured in AI Studio as documented.
- [ ] Config snapshot exported and version-tagged.

## 3) Evaluation quality gate
- [ ] Run full `starter_eval_set.md` at least twice.
- [ ] Record scores for instruction-following, accessibility, safety, actionability.
- [ ] Verify 100% pass on explicit-consent write prompts.
- [ ] Verify 0 fabricated tool-success claims.

## 4) Failure-mode validation
- [ ] Simulate timeout, rate limit, and 5xx errors.
- [ ] Confirm standard fallback message appears.
- [ ] Confirm retry + manual workaround are both offered.
- [ ] Confirm context is preserved after failure.

## 5) Observability + logging
- [ ] Latency, safety blocks, and fallback counters visible on dashboard.
- [ ] Write attempts include consent/audit fields.
- [ ] PII redaction reviewed and enabled.

## 6) Operational readiness
- [ ] On-call owner assigned for launch window.
- [ ] Rollback plan documented and tested.
- [ ] Incident runbook links verified.
- [ ] Stakeholder sign-off captured (Product, Safety, Engineering).

## 7) Final go/no-go
- [ ] All blockers resolved.
- [ ] Release notes prepared.
- [ ] Launch decision recorded with timestamp and approver.
