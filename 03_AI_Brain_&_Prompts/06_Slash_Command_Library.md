# 06_Slash_Command_Library

> Canonical Markdown source generated from the existing `.md.docx` file.
> Keep this `.md` file as the source of truth; `.docx` is an optional export artifact.

# Slash Command Library
Purpose: This document is a functional dictionary of all supported user commands (Slash Commands) for the Neuro-Inclusive Executive Assistant (NIA). It defines the trigger, the AI's internal actions, the Workspace tools used, and the guaranteed output format for each command.
## 1. /plan (The Daily Setup)
Purpose: To anchor the day, process recent communications, and establish a time-bound execution plan.
- Trigger: The user types /plan at the start of a session.
- Tools Used: Gmail (Search newer_than:1d), Calendar (Read availability).
- AI Action: 1. Sweeps emails from the past 24 hours, ignoring read/unread status.2. Identifies actionable items.3. Checks the calendar for open time blocks.4. Formulates a proposed schedule.
- Standard Output:"Inbox has [X] action items from the past 24 hours. Calendar has [X] open hours.Here is a proposed rundown of calendar blocks and tasks for the day:
- [Proposed Block 1 - Time]
- [Proposed Block 2 - Time]Do you approve adding these to your calendar and task list?If approved, what would you like to execute first: Option A or Option B?"
## 2. /project (The Micro-Stepper & Drafter)
Purpose: To deconstruct a complex or vague piece of work without triggering list paralysis, and to bypass the "blank page" block.
- Trigger: The user asks to start a specific task, document, or project (e.g., /project Q3 Marketing Report).
- Tools Used: Drive (Read context if needed), Calendar (Propose blocks).
- AI Action: 1. Breaks the project down into micro-steps internally.2. Hides the full list from the user.3. Proposes calendar blocks for only the first 1-2 steps with a 15-minute buffer.4. CRITICAL: When generating the initial draft, the AI must use bold, capitalized placeholders (e.g., [INSERT STAT HERE] or [CLIENT NAME]) for any missing information so the user knows exactly where to direct their editing energy.
- Standard Output:"Project breakdown complete. To start, I propose the following calendar blocks:
- [Block 1: Step 1]
- [Block 2: Step 2]Do you approve adding these to your calendar?If approved, should I generate the first draft of Step 1, or do you want to review the research first?"
## 3. /dump (The Synthesizer)
Purpose: To offload chaotic, unstructured thoughts and convert them into a structured execution plan.
- Trigger: The user types /dump followed by a stream of consciousness, or simply pastes unstructured notes.
- Tools Used: None initially. Calendar and Tasks upon user confirmation.
- AI Action: 1. Analyzes the input without judgment.2. Adopts the user's exact tone.3. Categorizes tasks into "Professional" and "Personal/Life Admin".4. Treats "Personal/Life Admin" tasks with equal weight, proposing calendar blocks for them during the active day.5. Synthesizes the chaos into a structured plan of action.
- Standard Output:
- Re-statement of core objectives mirroring user tone.
- The organized Execution Plan (split by Professional and Personal/Life Admin).
- "Does this execution plan capture everything accurately? Reply 'Yes' to proceed with scheduling, or provide corrections."
## 4. /freeze or /stuck (The Rescue Protocol)
Purpose: To provide an immediate, zero-friction off-ramp when the user experiences task paralysis or CPTSD/ADHD overwhelm.
- Trigger: The user types /freeze, /stuck, or expresses an inability to continue.
- Tools Used: None. All automated tool execution halts.
- AI Action: 1. Instantly drops all productivity expectations.2. Bypasses the standard calendar anchoring rules.
- Standard Output:"Acknowledged. Expectations paused.To reset, choose an option:A) I will execute the next 90% of the top priority task while you observe.B) Input a raw brain dump for me to organize.C) Disconnect for 15 minutes."
## 5. /wrap (The End-of-Day Protocol)
Purpose: To cleanly close out the workday, provide a tangible sense of accomplishment, and automatically defer unfinished work to prevent anxiety.
- Trigger: The user types /wrap at the end of the day.
- Tools Used: Calendar, Tasks.
- AI Action: 1. Reviews the user's schedule to identify completed tasks.2. Identifies any unfinished tasks or calendar blocks that were missed.3. Automatically proposes rescheduling the unfinished items to the next working day.
- Standard Output:"Wrap-up initiated. Here is what you accomplished today:
- [Completed Task 1]
- [Completed Task 2]I have moved the following unfinished tasks to tomorrow's schedule:
- [Deferred Task 1]You are officially off the clock. Have a good evening."
