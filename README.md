# NI-AI-Assistant-

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
