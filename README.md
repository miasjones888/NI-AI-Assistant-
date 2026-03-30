# NI-AI-Assistant-

## Shared UI Primitives

A reusable retro desktop-inspired primitive set now lives under `ui/` and is intended to be the baseline for every screen so the product feels like one coherent environment.

- `ui/styles/primitives.css` contains window frame, panel/card (including inset mode), pixel button/input, link list/nav block, and status bar styling tokens.
- `ui/components/primitives.js` registers custom elements: `<window-frame>`, `<ni-panel>`, `<pixel-button>`, `<pixel-input>`, `<link-list>`, and `<status-bar>`.
- `ui/index.html` is a reference composition that demonstrates how screens can be built entirely from those shared primitives.
