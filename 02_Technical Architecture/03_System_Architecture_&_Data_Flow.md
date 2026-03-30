# System Architecture & Data Flow

## Document Role
This file defines architecture/runtime constraints only.

## Contract Authority
For command behavior, this architecture doc defers to:
- `03_AI_Brain_&_Prompts/06_Slash_Command_Library.md`

For canonical product naming, this architecture doc defers to:
- `01_Product_Strategy/01_Product_Requirements_Document_(PRD).md`

This file must not duplicate full command copy or redefine product names.

## Runtime Constraints
- Manual pull-trigger model.
- Chat-scoped working memory.
- Persist approved state immediately to Calendar/Tasks.
- No external write action without explicit user approval.

## Command Surface
Active commands are exactly:
- `/plan`, `/project`, `/dump`, `/freeze`, `/wrap`

Deprecated mappings:
- `/intake` → `/plan`
- `/next` → `/project`
- `/stuck` → `/freeze`

## Architecture-to-Operations Handoff
Operational execution and runbook sequencing live in:
- `04_User_Operations/08_Standard_Operating_Procedure_(SOP).md`

Quick command lookup lives in:
- `04_User_Operations/09_Quick_Reference_Cheat_Sheet.md`
=======
# 03_System_Architecture_&_Data_Flow

> Canonical Markdown source generated from the existing `.md.docx` file.
> Keep this `.md` file as the source of truth; `.docx` is an optional export artifact.

# System Architecture & Data Flow
Purpose: This document outlines the technical architecture of the Neuro-Inclusive Executive Assistant (NIA). Because the user's enterprise IT environment blocks custom background servers and CRON jobs, the system utilizes the native Google Gemini Custom Gem Architecture with Workspace Extensions.
## 1. High-Level Architecture
The system operates on a "Hub and Spoke" model, entirely contained within the user's authenticated Google Workspace session.
- The Hub (Compute Engine): A Custom Gemini Gem powered by the Gemini 1.5 Pro model. It stores the Master System Prompt (Document 05) and maintains conversation state.
- The Spokes (Data Sources/Sinks): Google Workspace APIs (Gmail, Drive, Calendar, Tasks). The Gem communicates with these APIs via native Google Workspace Extensions.
## 2. Trigger Mechanism & State Management
- Trigger: Manual "Pull" only. The user initiates a workflow session by typing a predefined Slash Command (e.g., /intake) into the Gem's chat interface.
- State: The Gem maintains state only within the active chat window. If the window is closed, the "working memory" resets. Persistent state (tasks, schedule) must be immediately written back to Google Calendar or Tasks to prevent data loss or reliance on the user's memory.
## 3. Core Data Flows
### A. The Inbox Sweep Data Flow (/intake)
This flow handles the gathering of new action items and context.
- User Input: User types /intake.
- API Read Request (Gmail): The Gem calls the Gmail Extension: search: "is:unread label:inbox".
- Data Ingestion: The Gem parses the returned email bodies.
- Context Fetching (Drive): If the Gem identifies Google Doc/Sheet URLs in the emails, it calls the Google Drive Extension to read the contents of those specific files.
- Synthesis (LLM): The Gem processes the combined email and document text against the Cognitive Accessibility Guidelines (Rule 1: Anti-List, Rule 2: Shitty First Draft).
- User Output: The Gem outputs a summarized view (max 3 items) and proposed draft replies to the chat window.
### B. The Planning & Scheduling Data Flow (/plan)
This flow handles the temporal anchoring of disembodied tasks to combat time blindness.
- User Input: User types /plan or agrees to complete a specific task proposed during /intake.
- API Read Request (Calendar): The Gem calls the Google Calendar Extension to fetch the user's events for the current day.
- Synthesis (LLM): The Gem compares the estimated duration of the current task against the available free time on the calendar, ensuring a 10-15 minute transition buffer is included (Rule 3).
- API Write Request (Calendar/Tasks): * Upon user approval, the Gem calls the Calendar Extension to create an event titled [Deep Work] Task Name at the proposed time.
- The Gem calls the Google Tasks Extension to log the item to the user's master list.
- User Output: The Gem confirms the schedule is locked in.
### C. The Rescue Protocol Data Flow (/freeze / /stuck)
This flow requires zero external API calls; it relies entirely on the LLM's behavioral conditioning.
- User Input: User types /freeze.
- Synthesis (LLM): The Gem immediately overrides any active planning or intake flows. It references Rule 5 (No Shame).
- User Output: The Gem outputs a validating statement and presents two low-friction options (e.g., Immediate Execution of 90% of the task, or an unstructured Brain Dump).
