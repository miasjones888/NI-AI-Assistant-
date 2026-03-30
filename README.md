# NI-AI-Assistant-

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
