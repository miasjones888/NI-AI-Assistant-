# NI-AI-Assistant-

## Project Purpose
This repository packages the assets needed to design, configure, operate, and hand off the **NI AI Assistant**.

It is organized around four core concerns:
- Product clarity and user value.
- Safe, auditable technical architecture.
- Reusable system-prompt and behavior assets.
- Repeatable operations and handoff documentation.

---

## Repository Layout

### Core documentation (source of truth)
- `01_Product_Strategy/` — product requirements and design principles.
- `02_Technical Architecture/` — architecture, integrations, security, and permissions.
- `03_AI_Brain_&_Prompts/` — system prompt, slash commands, and guardrails.
- `04_User_Operations/` — SOP and operator quick-reference materials.
- `05_AI_Studio_Deployment/` — deployment-oriented AI Studio configuration artifacts.

### Supporting materials
- `docs/` — contributor-facing guides.
- `ui/` — shared UI primitives and reference composition.
- `frontend/` — frontend design tokens and component style primitives.
- `effects.css` / `effects.js` — lightweight optional visual effects bundle.

### Documentation policy
- Markdown (`.md`) files in the core folders are the only source of truth.
- Generated document exports are no longer stored in this repository to avoid duplicate content.

---

## Google AI Studio Import Workflow

1. Open <https://aistudio.google.com/> and create a new project.
2. Copy `03_AI_Brain_&_Prompts/05_Master_System_Prompt.md` into **System Instructions**.
3. Apply command behavior patterns from `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`.
4. Reflect architecture/safety constraints from:
   - `02_Technical Architecture/03_System_Architecture_&_Data_Flow.md`
   - `02_Technical Architecture/04_Tool_Permissions_&_Security.md`
5. Validate against product requirements in `01_Product_Strategy/`.
6. Share SOP and quick-reference docs from `04_User_Operations/`.

---

## Environment and Secrets

### Suggested environment variables
- `GOOGLE_API_KEY` (required)
- `GOOGLE_CLOUD_PROJECT` (required for managed GCP usage)
- `GOOGLE_CLOUD_LOCATION` (recommended)
- `APP_ENV` (`dev`, `staging`, `prod`)
- `LOG_LEVEL` (`info`, `warn`, `error`)

### Security expectations
- Never commit secrets.
- Use a secret manager and environment-scoped keys.
- Apply least-privilege access and rotate credentials regularly.

---

## UI Notes

### Lightweight effects bundle
- Link hover underline and subtle color shift.
- Optional prompt pulse and scanline overlay.
- `prefers-reduced-motion: reduce` disables animation timing.

Quick integration:

```html
<link rel="stylesheet" href="/effects.css" />
<script defer src="/effects.js"></script>
```

### Shared UI primitives
- `ui/styles/primitives.css` defines frame/panel/button/input/list/status primitives.
- `ui/components/primitives.js` registers reusable custom elements.
- `ui/index.html` demonstrates composition with shared primitives.

### Frontend style tokens
- `frontend/styles/tokens.css`
- `frontend/styles/components.css`

---

## Definition of Done Before Handoff

- [ ] System prompt loaded and validated in AI Studio.
- [ ] Slash-command behaviors imported/documented.
- [ ] Architecture and security constraints mirrored in runtime/tool settings.
- [ ] Critical user journeys pass smoke tests.
- [ ] Safety/failure-mode behavior tested and documented.
- [ ] Required environment variables configured.
- [ ] No secrets in repo, docs, or screenshots.
- [ ] SOP and quick-reference linked for support staff.

---

## Ownership
- **Primary Owner:** _TBD_
- **Backup Owner:** _TBD_
- **Team Contact:** _TBD_

**Last Updated:** 2026-03-30
