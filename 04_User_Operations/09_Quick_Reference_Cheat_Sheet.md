> **Conversion note:** Converted from `09_Quick_Reference_Cheat_Sheet.md.docx` on 2026-03-30.
# Quick Reference Cheat Sheet

## Canonical Product Name
- Neuro-Inclusive Executive Assistant (NIA)

## Use These Commands
- `/plan`
- `/project`
- `/dump`
- `/freeze`
- `/wrap`

## Deprecated
- `/intake` → `/plan`
- `/next` → `/project`
- `/stuck` → `/freeze`

## Source of Truth
- Command contract: `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`
- Prompt routing policy: `03_AI_Brain_&_Prompts/05_Master_System_Prompt.md`
- Brand naming authority: `01_Product_Strategy/01_Product_Requirements_Document_(PRD).md`
# 09_Quick_Reference_Cheat_Sheet

> Canonical Markdown source generated from the existing `.md.docx` file.
> Keep this `.md` file as the source of truth; `.docx` is an optional export artifact.

# Quick Reference Cheat Sheet: Neuro-Inclusive Executive Assistant (NIA)
## Core Directives (The Guardrails)
- Zero Open-Ended Questions: The AI must provide bounded multiple-choice options (A, B, C) to prevent decision fatigue.
- The "Anti-List" Protocol: Maximum of 3 actionable tasks presented at any given time.
- Proactive Drafting: The AI writes the first draft. The user acts exclusively as the Editor.
- Temporal Anchoring: A task is not valid until it is anchored to a specific calendar block with a 10-15 minute transition buffer.
## Slash Commands (Action Triggers)
1. /plan (The Daily Setup)
- When to use: Start of the workday, prior to personal morning routines.
- What it does: Sweeps the past 24 hours of the inbox, reviews the calendar, and proposes a 2-3 item execution schedule.
- Objective: Offload working memory and anchor the day before work anxiety builds.
2. /project (The Drafter & Micro-Stepper)
- When to use: Initiating a complex task, document, or communication.
- What it does: Breaks the project into micro-steps internally, schedules blocks for the first 1-2 steps, and generates the first draft with bold placeholders (e.g., [INSERT DATA]) for missing context.
- Objective: Bypass blank-page paralysis and giant-list overwhelm.
3. /dump (The Synthesizer)
- When to use: Experiencing unstructured thoughts, mixed priorities, or fractured focus.
- What it does: Synthesizes raw text into an organized Execution Plan, categorizing both Professional and Personal/Life Admin tasks.
- Objective: Externalize chaos into a structured plan awaiting explicit user approval.
4. /freeze or /stuck (The Rescue Protocol)
- When to use: Experiencing executive dysfunction, panic states, or severe task paralysis.
- What it does: Drops all productivity expectations immediately. Offers zero-friction reset options (e.g., observing the AI execute 90% of a task, or disconnecting for 15 minutes).
- Objective: Mitigate shame spirals and provide a frictionless, low-pressure off-ramp.
5. /wrap (The Decompression)
- When to use: End of the active workday.
- What it does: Audits completed tasks for psychological reinforcement and automatically defers all unfinished tasks to the following day's schedule.
- Objective: Close the professional window definitively and prevent off-the-clock anxiety.
