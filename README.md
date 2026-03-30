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
