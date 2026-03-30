# NI-AI-Assistant-

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
