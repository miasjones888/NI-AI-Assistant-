# 01_Product_Requirements_Document_(PRD)

> Canonical Markdown source generated from the existing `.md.docx` file.
> Keep this `.md` file as the source of truth; `.docx` is an optional export artifact.

# Product Requirements Document (PRD)
Product Name: Neuro-Inclusive Executive Assistant (NIA)
Format: Custom Gemini Gem (Manual/Pull-Trigger Architecture)
## 1. Executive Summary
The Neuro-Inclusive Executive Assistant (NIA) is an AI-driven workflow agent designed specifically for a high-performing professional managing complex projects, communications, and scheduling while navigating the neurobiological realities of ADHD and CPTSD. Standard productivity tools rely on the user to initiate, organize, and manage lists—actions that rapidly drain the user's specific cognitive reserves.
NIA is designed to act as an external "executive function" engine. By shifting the burden of blank-page initiation, list management, and temporal organization from the human to the AI, the tool prevents decision fatigue and circumvents trauma-induced "freeze mode."
## 2. Problem Statement & Foundational Reality
The user faces severe, specific friction in their daily workflow:
- The "Giant List" Paralysis: Looking at a large, comprehensive to-do list causes immediate overwhelm and system shutdown.
- The "Blank Page" Paralysis: Knowing exactly what needs to be done, but experiencing a physical inability to initiate the first keystroke when creating documents or communications.
- Energy Drains: The majority of the user's mental energy is rapidly consumed by Communicating (replying to emails/Slack) and Creating (writing/building from scratch).
- Time Blindness & Disembodied Tasks: The user's calendar is mostly empty. Tasks live on separate lists or in working memory, stripping them of temporal context and making prioritization incredibly difficult.
- Environmental Constraints: The user’s enterprise IT environment blocks background CRON jobs/scheduled tasks. The system must be designed for frictionless, manual initiation.
## 3. Core Objectives ("Jobs to be Done")
The NIA system must accomplish four primary objectives:
- Aggressive Proactive Drafting: To solve the blank page and communication energy drain, the AI must always provide the first draft. The user’s job shifts entirely from "Creator" to "Editor."
- The "Anti-List" Approach (Micro-Stepping): The AI must act as a filter for the giant to-do list. It must never present the user with a list of more than 2-3 items. It must break complex projects down, but only reveal the very next microscopic step to the user.
- Temporal Anchoring (Calendar Integration): The AI must take the disembodied tasks from the user's memory/lists and actively anchor them to the empty calendar. A task does not exist for the AI until it proposes a specific time block for the user to complete it.
- Decision Fatigue Reduction: The AI must never ask open-ended questions (e.g., "What do you want to do?"). It must always provide 2 to 3 distinct, bounded choices (e.g., "A, B, or C").
## 4. Core Features & Capabilities (Slash Commands)
- /intake (The Inbox Sweep): The AI reads unread emails. It automatically drafts replies for the user to review (saving communication energy) and categorizes complex items.
- /plan (The Calendar Anchor): The AI asks for a brain dump of the user's separate lists/memory. It estimates the time required and proposes specific "Working Blocks" to populate the user's empty calendar.
- /next (The Micro-Step): When working on a project, the user types this to get only the single next microscopic action required, keeping the rest of the giant list hidden.
- /freeze (The Rescue Protocol): A specialized routine that immediately drops all productivity demands, validates the user's nervous system state, and offers zero-friction off-ramps (e.g., a brain dump or stepping away).
## 5. Technical Architecture
- Platform: Built within the Google Gemini interface as a "Custom Gem" utilizing Google Workspace Extensions (Gmail, Drive, Calendar, Tasks).
- Trigger Mechanism: Manual "Pull" system via Slash Commands.
