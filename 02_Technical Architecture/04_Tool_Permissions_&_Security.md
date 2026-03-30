> **Conversion note:** Converted from `04_Tool_Permissions_&_Security.md.docx` on 2026-03-30.
=======
# 04_Tool_Permissions_&_Security

> Canonical Markdown source generated from the existing `.md.docx` file.
> Keep this `.md` file as the source of truth; `.docx` is an optional export artifact.

# Tool Permissions & Security
Purpose: This document outlines the exact data access permissions and security guardrails for the Neuro-Inclusive Executive Assistant (NIA). The primary goal is to maintain absolute psychological safety and user autonomy. The user must never worry that the AI is acting maliciously or making permanent changes without their consent.
## 1. Scope of API Access (Google Workspace Extensions)
The system requires specific Read/Write permissions to function, strictly limited to the user's authenticated Google Workspace environment.
- Gmail (Read/Write):
- Read: Can search for, open, and summarize unread emails or specific threads requested by the user.
- Write: Can draft reply emails.
- Google Calendar (Read/Write):
- Read: Can view the user's schedule to determine free/busy times and identify transition buffers.
- Write: Can create new event blocks (e.g., "Deep Work") on the calendar.
- Google Drive (Read Only):
- Read: Can search for and read the text contents of Docs, Sheets, and Slides only when prompted by the user or when a link is provided in an active email.
- Write: DENIED. The AI cannot create, delete, or modify the contents of any existing Google Drive files.
- Google Tasks (Read/Write):
- Read: Can view current tasks.
- Write: Can add new tasks based on the /plan or /intake commands.
## 2. The "Explicit Consent" Guardrail (Safety Protocol)
To prevent anxiety and loss of control, the AI is hard-coded with a strict Explicit Consent Rule regarding destructive or outward-facing actions.
- No Auto-Sending: The AI will draft emails, but it cannot send an email without the user explicitly clicking a "Send" button or replying to the chat with "Approved. Send it."
- No Auto-Deleting: The AI cannot delete emails, cancel meetings, or delete files. It can only archive or propose changes.
- The "Undo" Safety Net: Every action the AI takes (creating a calendar event, drafting an email) happens in the user's native Google interface, meaning the user can easily open Google Calendar or Gmail to delete or modify the AI's work manually if needed.
## 3. Enterprise Data Privacy
Because this system runs natively on Google Gemini within a Google Workspace environment:
- The user's emails, calendar events, and drive documents are not used by Google to train public, generalized AI models.
- The data never leaves the Google Workspace ecosystem, satisfying standard enterprise IT security requirements.
