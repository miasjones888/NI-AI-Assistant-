# NI-AI-Assistant-

## Project Purpose
This repository is the implementation package for the **NI AI Assistant**. It is organized to help teams design, configure, operate, and hand off an assistant experience with a strong focus on:
- Product clarity and user value.
- Safe and auditable technical architecture.
- Reusable prompt/system-behavior assets.
- Repeatable operations for day-to-day support.

### Target Outcome in Google AI Studio
The target outcome is a **working Google AI Studio app/prototype** where:
1. The master system behavior is loaded from this repository.
2. Prompt patterns and command behaviors are applied consistently.
3. Safety, permissions, and operations guidance are reflected in the runbook.
4. A new owner can import the artifacts and continue operations with minimal ambiguity.

---

## Repository Structure Summary

### `01_Product_Strategy/`
Product intent and user-facing requirements. Use this folder to understand:
- Problem framing and success criteria.
- Accessibility and design principles.
- Functional expectations before implementation.

### `02_Technical Architecture/`
System and security definition. Use this folder to understand:
- End-to-end architecture and data flow.
- Tool permission boundaries and security model.
- Integration assumptions and implementation constraints.

### `03_AI_Brain_&_Prompts/`
Assistant cognition assets. Use this folder to implement:
- Master system prompt.
- Slash command and behavior libraries.
- Prompt-level guardrails and response patterns.

### `04_User_Operations/`
Operational readiness materials. Use this folder for:
- SOPs and incident handling.
- Quick reference guidance for operators.
- Handoff and maintenance workflows.

---

## Exact Steps: Import and Use in Google AI Studio

> These steps assume you are using Google AI Studio’s prompt/app interface and want to instantiate this repository’s assistant behavior.

1. **Open Google AI Studio**
   - Go to <https://aistudio.google.com/> and sign in.
2. **Create a new prompt/app project**
   - Click **Create new** (or equivalent) and choose a Gemini model-compatible workspace.
3. **Set the system instructions**
   - Open `03_AI_Brain_&_Prompts/05_Master_System_Prompt.md.docx`.
   - Copy the full system prompt content.
   - Paste it into the project’s **System Instructions** field.
4. **Load command/prompt supplements**
   - Open `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md.docx`.
   - Add key command patterns into either:
     - Additional instruction blocks,
     - Tooling notes,
     - Or your internal operator playbook for consistent use.
5. **Apply architecture and safety constraints**
   - Review `02_Technical Architecture/03_System_Architecture_&_Data_Flow.md.docx` and `02_Technical Architecture/04_Tool_Permissions_&_Security.md.docx`.
   - Mirror these constraints in AI Studio settings (tool access, data handling, external calls).
6. **Validate against product requirements**
   - Use `01_Product_Strategy/01_Product_Requirements_Document_(PRD).md.docx` and related strategy docs as acceptance criteria.
7. **Create operator workflow references**
   - Attach or link `04_User_Operations/08_Standard_Operating_Procedure_(SOP).md.docx` and `04_User_Operations/09_Quick_Reference_Cheat_Sheet.md.docx` for run operations.
8. **Run smoke tests in AI Studio**
   - Test core user intents, failure handling, and safety edge cases.
9. **Save and share**
   - Save the AI Studio project and share with stakeholders/owners according to your team’s access model.

---

## Environment Variables, Model/Provider Assumptions, and Secrets Handling

## Required Environment Variables
If your deployment uses external tools/APIs, define these variables in your runtime environment (not in source files):

- `GOOGLE_API_KEY` (required): API key for Google model access (Gemini family).
- `GOOGLE_CLOUD_PROJECT` (required for managed GCP usage): target GCP project.
- `GOOGLE_CLOUD_LOCATION` (recommended): region for model/tool routing (for example, `us-central1`).
- `APP_ENV` (recommended): `dev`, `staging`, or `prod`.
- `LOG_LEVEL` (recommended): `info`, `warn`, or `error`.

If your team uses an alternate provider for fallback/routing, define provider-specific keys (for example, `OPENAI_API_KEY`, etc.) only when approved by architecture/security owners.

## Model/Provider Assumptions
- Primary model provider: **Google Gemini via Google AI Studio**.
- Prompt behavior is designed to be portable, but quality/safety can vary by model version.
- Tool access should default to **least privilege**.
- Production usage should pin a tested model version before broad rollout.

## Secrets Handling
- **Never commit secrets** to this repository.
- Use secret managers (for example: Google Secret Manager, CI/CD secrets, or vault tooling).
- Rotate keys on schedule and immediately after exposure.
- Scope keys per environment (dev/staging/prod separation).
- Restrict write/admin permissions to the minimum set of operators.

---

## Definition of Done Before Handoff
Use this checklist before transferring ownership:

- [ ] System prompt loaded in AI Studio from `05_Master_System_Prompt` and validated.
- [ ] Slash/command behavior references imported or documented for operators.
- [ ] Architecture, permissions, and security constraints reflected in configured settings.
- [ ] Critical user journeys pass smoke tests.
- [ ] Safety/guardrail tests documented (including failure-mode behavior).
- [ ] Required environment variables are set in target environment(s).
- [ ] No secrets stored in repo, docs, or screenshots.
- [ ] SOP and quick-reference docs linked for support team usage.
- [ ] Named owner confirms acceptance and operational readiness.

---

## Ownership and Contact
- **Primary Owner:** _TBD by delivery team_
- **Backup Owner:** _TBD by delivery team_
- **Team Contact Channel:** _TBD (e.g., Slack/Email/On-call group)_

**Last Updated:** 2026-03-30
=======
## Lightweight UI effects bundle

This repository now includes a minimal retro-style effects bundle focused on readability-first defaults and low GPU cost:

- Link hover underline + subtle color shift.
- Single focal prompt/cursor pulse (step-based blink).
- Instant/step transitions (no broad smooth easing).
- Optional scanline overlay toggle.

### Files

- `effects.css` - effect styles and accessibility defaults.
- `effects.js` - tiny toggle controller with `localStorage` persistence.

### Default behavior

- Mode defaults to `standard`.
- Prompt pulse defaults to `on`.
- Scanline defaults to `off`.
- `prefers-reduced-motion: reduce` disables animation timing.

### Quick integration

```html
<link rel="stylesheet" href="/effects.css" />
<script defer src="/effects.js"></script>
```

Wrap your UI root and focal terminal area:

```html
<body class="fx-scanline-layer">
  <main>
    <a href="#">Example link</a>
    <div class="fx-prompt">$</div>
  </main>
</body>
```

### Runtime toggles

Use the global helper:

```js
window.UIEffects.setMode('minimal'); // minimal | standard | scanline
window.UIEffects.setPulse(false); // true | false
window.UIEffects.setScanline(true); // true | false
```
=======
## Frontend documentation

- [Frontend Contribution Guide](docs/frontend-contribution-guide.md)
=======
## ASCII Treatment Guidelines (High-Visibility, Low-Friction)

Use ASCII as lightweight visual scaffolding in places users already scan quickly, without blocking content flow.

---

### 1) App Masthead / Logo Zone

```text
+--------------------------------------------------+
|  _   _ ___      _   ___     _         _         |
| | \ | |_ _|    / \ |_ _|___(_)___ ___| |_       |
| |  \| || |    / _ \ | |/ __| / __/ __| __|      |
| | |\  || |   / ___ \| |\__ \ \__ \__ \ |_       |
| |_| \_|___| /_/   \_\___|___/_|___/___/\__|      |
|                                                  |
|  Conversational Guidance for Safer Decisions     |
+--------------------------------------------------+
```

**Placement:** top of app shell, left-aligned in desktop and centered on narrow screens.  
**Behavior:** static by default; no animation required.

---

### 2) Section Dividers

Use short, consistent dividers between major panels/sections.

```text
-----[ Context ]------------------------------------
-----[ Recommendations ]----------------------------
-----[ Next Actions ]-------------------------------
```

**Placement:** before section headings or grouped card blocks.  
**Behavior:** collapse to simple rule if width is constrained.

---

### 3) Empty States and Loading Placeholders

#### Empty state

```text
   .----------------------------.
   |   no items yet             |
   |   try a new query          |
   '----------------------------'
```

#### Loading placeholder

```text
[ .... ] preparing assistant context
[  ..  ] checking tools
[ .... ] building response
```

**Placement:** inline with result containers so users keep spatial context.  
**Behavior:** keep messages semantic and concise.

---

### 4) Footer Signature Block

```text
-----------------------------------------------
NI AI Assistant · human-centered by design
Accessibility-first · transparent-by-default
-----------------------------------------------
```

**Placement:** persistent footer or end of long responses/pages.

---

## Constraints for Readability and Accessibility

### Width and Responsiveness
- **Max render width:** `60ch` for ASCII blocks in content columns.
- **Preferred width range:** `36ch–56ch`.
- **Mobile fallback (< 360px viewport):** switch to compact version or plain text label.
- **No horizontal scrolling** for required content.

### Contrast and Typography
- Use a **monospace font** stack (for example: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`).
- Maintain **minimum 4.5:1 contrast** between ASCII text and background (WCAG AA for normal text).
- Avoid ultra-light weights; prefer regular or medium for glyph clarity.

### Accessibility Fallbacks (Assistive Technologies)
- Wrap decorative ASCII in a container marked **`aria-hidden="true"`**.
- Provide adjacent semantic text (heading/label) for screen readers.
- If ASCII communicates status (loading/empty/error), provide a parallel live text status with clear wording.
- Do not rely on ASCII alone to communicate critical state.
- Respect user font scaling; ASCII blocks should reflow or degrade gracefully to plain text.

### Usage Rules
- Keep ASCII **decorative or orienting**, not data-dense.
- Reuse a small pattern set (masthead, divider, empty/loading, footer) for consistency.
- Prefer fewer lines and higher legibility over intricate artwork.
=======
## Shared UI Primitives

A reusable retro desktop-inspired primitive set now lives under `ui/` and is intended to be the baseline for every screen so the product feels like one coherent environment.

- `ui/styles/primitives.css` contains window frame, panel/card (including inset mode), pixel button/input, link list/nav block, and status bar styling tokens.
- `ui/components/primitives.js` registers custom elements: `<window-frame>`, `<ni-panel>`, `<pixel-button>`, `<pixel-input>`, `<link-list>`, and `<status-bar>`.
- `ui/index.html` is a reference composition that demonstrates how screens can be built entirely from those shared primitives.
=======
## Frontend style tokens

Reusable frontend design tokens are defined in:

- `frontend/styles/tokens.css`
- `frontend/styles/components.css`

All new component styles in `components.css` consume tokenized CSS custom properties instead of hardcoded values.
=======
## Documentation source of truth

All project documentation is now **Markdown-first**.

- Files ending in `.md` are the canonical, editable source of truth.
- Files ending in `.md.docx` are optional generated/export artifacts for distribution.
- When documentation is updated, edit the `.md` file first, then (optionally) regenerate the corresponding `.md.docx` export.

This policy applies to documents under:

- `01_Product_Strategy/`
- `02_Technical Architecture/`
- `03_AI_Brain_&_Prompts/`
- `04_User_Operations/`
