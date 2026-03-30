> **Conversion note:** Converted from `08_Standard_Operating_Procedure_(SOP).md.docx` on 2026-03-30.
# Standard Operating Procedure (SOP)

## Document Role
This runbook defines operator workflow sequencing.

## Authority Links
For exact command behavior, always use:
- `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`

For canonical product naming/brand wording, use:
- `01_Product_Strategy/01_Product_Requirements_Document_(PRD).md`

## Daily Workflow
1. Morning: `/plan`
2. Active work: `/project` (or `/dump` when context is messy)
3. Overwhelm: `/freeze`
4. End of day: `/wrap`

## Deprecated Inputs
- `/intake` → `/plan`
- `/next` → `/project`
- `/stuck` → `/freeze`

## Prompting Alignment
Prompt routing behavior and trigger interpretation are defined in:
- `03_AI_Brain_&_Prompts/05_Master_System_Prompt.md`
# 08_Standard_Operating_Procedure_(SOP)

> Canonical Markdown source generated from the existing `.md.docx` file.
> Keep this `.md` file as the source of truth; `.docx` is an optional export artifact.

# Standard Operating Procedure (SOP)
Purpose: This document outlines the daily interaction routine between the user and the Neuro-Inclusive Executive Assistant (NIA). It is designed to minimize cognitive load by establishing a predictable, low-friction daily rhythm that offloads work anxiety before it can build up.
## 1. Phase One: The Morning Offload (Pre-Routine)
Timing: Immediately upon waking or sitting at the computer, prior to engaging in personal morning routines.
Objective: To extract all work-related context and anxiety from the user's working memory and store it in the system.
- Action: Open the NIA Gem interface.
- Command: Type /plan.
- System Response: The AI sweeps the inbox for actionable items from the last 24 hours, reviews the calendar, and proposes a 2-3 item execution schedule.
- User Action: Review the proposed schedule. Reply "Yes" or select an option to lock the blocks into the calendar.
- Transition: Close the laptop or walk away. The workday is officially organized, allowing the user to engage in their personal morning routine without work tasks running in their background cognition.
## 2. Phase Two: Active Work Blocks & Flexible Transitions
Timing: Post-morning routine, initiated when the user is ready to begin professional tasks.
Objective: To execute tasks with maximal AI assistance while allowing the user's natural hyperfocus/rest rhythms to dictate the pace.
- Action: Return to the desk at the time of the first scheduled block.
- Execution: If the task requires drafting, analysis, or communication, utilize the /project command. The AI will provide the first draft with bold placeholders (e.g., [INSERT DATA]) for the user to edit.
- Unstructured Input: If new information arises or focus fractures, immediately type /dump to offload the chaos. The AI will synthesize it and categorize it (including Personal/Life Admin tasks) without executing any tool actions until approved.
- Flexible Breaks: Breaks are not rigidly scheduled. When a natural transition occurs (e.g., finishing a draft, waiting for a response), the AI will remind the user to step away or stretch before initiating the next task.
- Rescue Contingency: If at any point the user feels paralysis or overwhelm setting in, immediately type /freeze to pause all expectations and receive zero-friction off-ramps.
## 3. Phase Three: The End-of-Day Decompression
Timing: At the conclusion of the final working block.
Objective: To provide a tangible sense of accomplishment and definitively close the professional window.
- Action: Type /wrap.
- System Response: The AI audits the calendar and task list. It outputs a summary of completed tasks for psychological reinforcement. It automatically reschedules any unfinished tasks to the following day's backlog.
- User Action: Review the summary. Close the interface. You are officially off the clock.
