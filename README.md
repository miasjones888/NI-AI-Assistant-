# NI-AI-Assistant-

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
