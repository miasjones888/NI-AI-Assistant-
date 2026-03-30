# Frontend Contribution Guide

This project uses a retro visual aesthetic. Accessibility requirements are **non-negotiable** and must be treated as release blockers.

## Accessibility baseline (required)

All frontend contributions must satisfy the following before merge:

1. **WCAG-compliant contrast** on all text/background pairs.
2. **Visible focus outlines** that match the retro palette.
3. **Keyboard navigation** support for all interactive elements.
4. **Reduced-motion support** for blink/scanline effects and any animation.
5. **Semantic headings and landmarks** despite decorative layout choices.

---

## 1) WCAG-compliant contrast

### Requirement
- Normal text must meet at least **WCAG AA contrast ratio (4.5:1)**.
- Large text (>= 18pt regular or >= 14pt bold) must meet at least **3:1**.
- UI component boundaries and meaningful icons must maintain perceivable contrast.
- Do not rely on color alone to communicate state.

### Implementation guidance
- Define design tokens for foreground/background pairs and only use approved pairs.
- Avoid placing text directly over noisy textures/scanlines unless an opaque or high-contrast backing layer is used.
- Verify all states: default, hover, active, disabled, visited, selected, and error.

### Verification checklist
- [ ] Contrast validated for every text/background pair in changed views.
- [ ] Contrast validated for status/error/success messaging and chart legends.
- [ ] Color is not the sole channel for meaning.

---

## 2) Visible focus outlines (retro palette)

### Requirement
- Every focusable element must expose a clearly visible `:focus-visible` style.
- Focus indicators must be robust on dark, light, and textured backgrounds.
- Focus indicators must not be removed globally.

### Implementation guidance
- Use a consistent retro focus token (for example, neon cyan or amber) with sufficient contrast.
- Use outline/box-shadow combinations that remain visible around complex shapes.
- Avoid relying on subtle color shifts alone.

### Verification checklist
- [ ] Tab through the UI and ensure focus is always visible.
- [ ] Focus outline color aligns with palette tokens.
- [ ] No component suppresses focus without replacement.

---

## 3) Keyboard navigation for all interactive elements

### Requirement
- All interactive controls must be reachable and operable via keyboard.
- Interactive order must follow visual/logical reading order.
- Custom widgets must implement expected keyboard patterns.

### Implementation guidance
- Use semantic controls (`<button>`, `<a>`, `<input>`, etc.) before custom roles.
- If a custom control is unavoidable, implement proper role/state and key handling.
- Ensure dialogs, menus, and popovers manage focus correctly.
- Provide skip links when pages include repeated navigation.

### Verification checklist
- [ ] Every control is reachable with Tab/Shift+Tab.
- [ ] Every control can be activated without a mouse.
- [ ] No keyboard traps.
- [ ] Escape/Arrow/Home/End behavior works where expected for composite widgets.

---

## 4) Reduced-motion support (blink/scanline effects)

### Requirement
- Respect user preference via `prefers-reduced-motion: reduce`.
- Blink, scanline, parallax, and looping animation must be disabled or significantly reduced.
- Motion must never be required to understand content or complete a task.

### Implementation guidance
- Gate all non-essential animation behind reduced-motion media queries.
- Provide static fallback states for animated decorative effects.
- Avoid high-frequency flashing/flickering.

### Verification checklist
- [ ] `prefers-reduced-motion: reduce` disables non-essential effects.
- [ ] Content remains readable and complete with motion reduced.
- [ ] No interaction depends on animation timing.

---

## 5) Semantic headings and landmarks

### Requirement
- Maintain a logical heading hierarchy (`h1` -> `h2` -> `h3` ...).
- Use semantic landmarks (`header`, `nav`, `main`, `aside`, `footer`, `form`, `section` with accessible names when needed).
- Decorative layout must not break document semantics.

### Implementation guidance
- Keep one primary `<h1>` per view/screen where practical.
- Use visually-hidden text when decorative labels need semantic equivalents.
- Ensure landmark regions are distinct and discoverable to assistive tech.

### Verification checklist
- [ ] Heading levels are sequential and meaningful.
- [ ] Landmark structure is present and non-redundant.
- [ ] Screen reader navigation by headings/landmarks is coherent.

---

## Pull request expectations

Frontend PRs should include:
- A short accessibility impact summary.
- Evidence of keyboard-only testing.
- Evidence that reduced-motion mode was checked.
- Any contrast checks performed (tool name + results).

If any requirement cannot be met immediately, add a follow-up issue and mark the PR as incomplete until resolved.
