// ---------------------------------------------------------------------------
// Central curriculum data file.
//
// Everything the app renders — phases, lessons, reference tables,
// checkpoints, welcome/completion copy, and the appendix — lives here.
// Components read from this file; they never hardcode lesson content.
//
// Lesson "type" values:
//   'lesson'     — a normal module: format badge, time, why-it-matters copy,
//                  a link to the source module, and a Mark Complete gate.
//   'reference'  — a read-only in-page table (no completion gate).
//   'checkpoint' — a reflection question with a saved free-text answer
//                  (Continue unlocks once something has been typed).
//
// Each phase's `lessons` array is already in the order learners move
// through them; the checkpoint is always the last item in the array.
// ---------------------------------------------------------------------------

export const welcomeContent = {
  title: 'Copilot for Non-Technical Users',
  subtitle: 'A Guided Curriculum for Deep, Practical Understanding',
  intro:
    "This course turns the Microsoft Copilot Agents Labs module library into a guided, sequenced learning path for people with no coding background. You'll move phase by phase — building a real mental model of what an agent is, what it can do, and which tool to reach for — before ever touching the more technical material.",
  cta: 'Start Course',
  about: {
    heading: 'Who This Is For & How to Use It',
    items: [
      {
        label: 'Audience',
        text: 'Business users, analysts, managers, and "citizen developers" with no software development background.',
      },
      {
        label: 'Goal',
        text: "Not just clicking through labs, but building an accurate mental model — what an agent is, what it can and can't do, and which tool to reach for.",
      },
      {
        label: 'Format',
        text: 'Seven phases, designed for roughly one phase per week at 1–2 hours/week, self-paced. Each phase lists the source module, its format, estimated time, and — in plain language — why it matters.',
      },
    ],
    checkpointPolicy:
      'Every phase ends with a short "Checkpoint" — questions to answer in your own words before moving on. If you can\'t answer them, re-watch the module before continuing.',
    appendixNote:
      'An appendix lists the remaining, more technical modules from the library for awareness only; they are IT/developer territory and are not required to use Copilot effectively.',
  },
}

export const completionContent = {
  headline: "You've completed the curriculum.",
  copy:
    'You can now independently build a knowledge-grounded agent, choose the right tool type for a given step, explain the licensing model to a budget owner, and read that agent’s analytics.',
  capstoneLabel: 'Capstone challenge',
  capstone:
    'Pick one real, recurring task on your own team and build it end to end. Present the finished agent and its first week of analytics to your group.',
  linkLabel: 'Browse the full module library →',
  linkUrl: 'https://microsoft.github.io/mcs-labs/modules/',
}

export const curriculum = [
  {
    id: 0,
    title: 'Orientation',
    week: 'Week 1, Day 1',
    objective: 'Build a shared vocabulary before anything else, so later modules make sense on first viewing.',
    lessons: [
      {
        num: 1,
        type: 'lesson',
        title: 'Orientation: What Is Copilot, Really?',
        format: 'Discussion + demo (facilitator-led)',
        time: '30 min',
        oneLiner:
          'Sets shared vocabulary — Copilot Chat vs. an agent vs. Copilot Studio — and where each fits inside Microsoft 365, so every later lesson makes sense on first viewing.',
        why:
          "Before you build anything, you need a clear map of the Copilot landscape. Microsoft 365 today includes several related-but-different things that all get called ‘Copilot’: the everyday chat assistant built into Word, Excel, and Teams; ready-made ‘agents’ that specialize in a task; and Copilot Studio, the tool used to build custom agents from scratch. This lesson walks through each of those pieces side by side, in plain language, so you can tell them apart and know which one a coworker is talking about. Getting this vocabulary straight now means every lesson that follows will click into place immediately, instead of leaving you guessing what term means what.",
        url: null,
      },
      {
        num: 2,
        type: 'checkpoint',
        title: 'Phase 0 Checkpoint',
        question:
          'In your own words: what is the difference between "Copilot Chat," an "agent," and "Copilot Studio"?',
      },
    ],
  },
  {
    id: 1,
    title: 'Building Your First Assistant',
    week: 'Week 1',
    objective: 'Get a working assistant built with zero setup, using the lowest-friction tools first.',
    lessons: [
      {
        num: 1,
        type: 'lesson',
        title: 'Copilot Studio Core Concepts Overview',
        format: 'Slides',
        time: '30 min',
        oneLiner:
          'A guided tour of agents, topics, knowledge, tools, variables, and channels — the vocabulary for everything else in this course.',
        why:
          "Every course needs a foundation, and this lesson is it. You'll get a guided tour of the six building blocks that make up any Copilot Studio agent: the agent itself, topics (conversation paths), knowledge (what it can read), tools (what it can do), variables (what it remembers), and channels (where people can reach it). Rather than memorizing definitions, you'll see how these pieces fit together to create a working assistant. Understanding this vocabulary now means you'll recognize these same six concepts resurfacing in every lab for the rest of the course.",
        url: 'https://microsoft.github.io/mcs-labs/modules/copilot-studio-core-concepts-overview/',
      },
      {
        num: 2,
        type: 'lesson',
        title: 'M365 Agent Builder',
        format: 'Slides + Lab',
        time: '30 min',
        oneLiner:
          'Introduces the simplest way to build an AI assistant, directly inside Microsoft 365 — no separate tool to learn.',
        why:
          "Agent Builder is the lowest-friction way to create your first AI assistant, because it lives right inside the Microsoft 365 apps you already use — no new login, no separate platform to learn. This lesson shows you how a business user, with zero coding background, can describe what they want an assistant to do and have it built in minutes. It's designed to prove a point early in the course: building a working agent is far more approachable than most people expect. Everything else in the curriculum builds on the confidence you'll gain here.",
        url: 'https://microsoft.github.io/mcs-labs/modules/agent-builder/',
      },
      {
        num: 3,
        type: 'lesson',
        title: 'Agent Builder (Web)',
        format: 'Lab',
        time: '15 min',
        oneLiner: 'Hands-on practice building a first, simple web-based assistant.',
        why:
          "This is your first hands-on build. You'll use the web version of Agent Builder to create a small, working assistant from start to finish, reinforcing what you just learned conceptually with real, on-screen practice. There's no better way to internalize what an ‘agent’ actually is than to build a simple one yourself. Treat this as a low-stakes sandbox: the goal is comfort with the process, not a polished result.",
        url: 'https://microsoft.github.io/mcs-labs/modules/agent-builder-web/',
      },
      {
        num: 4,
        type: 'lesson',
        title: 'Copilot Studio Lite',
        format: 'Lab',
        time: '15 min',
        oneLiner: 'The simplified, low-friction entry point into Copilot Studio itself.',
        why:
          "Copilot Studio Lite strips away the more advanced options and gives you a simplified on-ramp into the full Copilot Studio platform. This lesson uses that simplified view to bridge the gap between the very basic Agent Builder you just tried and the more capable tool you'll use for the rest of the course. It's a deliberately gentle introduction — you'll recognize the same building blocks from Lesson 1, just with a slightly bigger toolset. By the end, Copilot Studio will feel like a natural next step rather than an intimidating new platform.",
        url: 'https://microsoft.github.io/mcs-labs/modules/copilot-studio-lite/',
      },
      {
        num: 5,
        type: 'checkpoint',
        title: 'Phase 1 Checkpoint',
        question: 'Could you rebuild the same simple agent from memory, without the lab instructions open?',
      },
    ],
  },
  {
    id: 2,
    title: 'Grounding Agents in Real Work',
    week: 'Week 2',
    objective:
      "Move from a toy example to an agent that reads real documents and supports a real, recurring task.",
    lessons: [
      {
        num: 1,
        type: 'lesson',
        title: 'Copilot Studio Core Concepts - Part 1',
        format: 'Slides + Lab',
        time: '30 min',
        oneLiner:
          'How an agent decides what to do: topics (conversation paths), knowledge (what it can read), and tools (what it can do).',
        why:
          "This lesson goes deeper into the three concepts that determine how an agent behaves in a real conversation: topics, knowledge, and tools. You'll learn how an agent uses topics to recognize the kind of request someone is making, how it draws on knowledge sources to answer factual questions accurately, and how it reaches for a tool when it needs to actually do something rather than just answer. Understanding the decision-making logic behind these three pieces is the key to designing agents that behave predictably instead of unpredictably. Once this clicks, you'll be able to look at any agent and reason about why it responded the way it did.",
        url: 'https://microsoft.github.io/mcs-labs/modules/core-concepts-part1/',
      },
      {
        num: 2,
        type: 'lesson',
        title: 'Agent Builder (SharePoint)',
        format: 'Lab',
        time: '20 min',
        oneLiner: "Practice building an agent grounded in your team's own SharePoint documents.",
        why:
          "This lab takes the theory from the last lesson and applies it directly: you'll connect an agent to real documents your team already stores in SharePoint. Grounding an agent in your own content is what separates a generic chatbot from something genuinely useful — the agent's answers become specific to your team's policies, processes, and history instead of generic guesses. This is also your first taste of ‘knowledge’ as a working feature rather than a concept. By the end, you'll have built something you could realistically hand to a colleague and have them use.",
        url: 'https://microsoft.github.io/mcs-labs/modules/agent-builder-sharepoint/',
      },
      {
        num: 3,
        type: 'lesson',
        title: 'Monthly Business Review Agent',
        format: 'Lab',
        time: '20 min',
        oneLiner: 'Build an agent that preps a recurring business review from SharePoint data.',
        why:
          "Recurring reporting tasks are one of the best places to apply an agent, because the work repeats in a predictable pattern every month. In this lab, you'll build an agent that pulls from SharePoint data to help prep a Monthly Business Review — the kind of task that normally eats up hours of manual compiling. This shows how the same knowledge-grounding skill from the last lesson scales up to a real, recurring business process. Think of this as a template you can adapt for any repeating report your own team produces.",
        url: 'https://microsoft.github.io/mcs-labs/modules/mbr-prep-sharepoint-agent/',
      },
      {
        num: 4,
        type: 'lesson',
        title: 'Ask Me Anything Agent',
        format: 'Lab',
        time: '40 min',
        oneLiner: 'Build an employee-facing Q&A agent end to end.',
        why:
          "This lab pulls everything from Phase 2 together into one complete build: an employee-facing Q&A agent that people across your organization could actually use. You'll set up knowledge sources, shape how it responds, and think through the kinds of questions real employees would ask it. It's the longest lab so far because it's meant to be the capstone for this phase — proof that you can take an agent from a blank slate to something genuinely deployable. Pay attention to how much of this build reuses concepts from the three lessons before it.",
        url: 'https://microsoft.github.io/mcs-labs/modules/ask-me-anything/',
      },
      {
        num: 5,
        type: 'checkpoint',
        title: 'Phase 2 Checkpoint',
        question:
          'What is a "topic," what is "knowledge," and what is a "tool" — and which one would you reach for to answer an HR policy question vs. update a record?',
      },
    ],
  },
  {
    id: 3,
    title: "Understanding an Agent's Tools",
    week: 'Week 3',
    objective:
      'Remove the jargon around connectors, REST APIs, MCP, prompts, and agent flows before the corresponding lab.',
    lessons: [
      {
        num: 1,
        type: 'reference',
        title: 'Reference: Tool Types in Plain English',
        tableTitle: 'Tool Types in Plain English',
        columns: ['Tool Type', 'Plain-English Explanation'],
        rows: [
          [
            'Connector',
            'A ready-made plug for a common service (SharePoint, Outlook, Salesforce…). Pick it off a shelf of 1,400+ options — no building required.',
          ],
          [
            'REST API',
            'A direct line to any web service, even ones without a ready-made connector. Faster to set up for a one-off, but not reusable elsewhere.',
          ],
          [
            'MCP (Model Context Protocol)',
            'A "universal adapter" — build or connect it once, and every agent that speaks the same standard can use it, without re-describing it each time.',
          ],
          [
            'Prompt',
            'A small, reusable AI instruction — e.g., "summarize this document" — that an agent can call like a tool.',
          ],
          [
            'Agent Flow',
            'A fixed, step-by-step checklist that always runs the same way — good for anything that must be done consistently, like approvals.',
          ],
          [
            'Computer Use / CUA',
            'Lets an agent look at a screen and click/type like a person, for older systems with no API at all.',
          ],
          [
            'Orchestrator',
            "The agent's \"decision-maker\" — reads the request and the agent's instructions, then chooses which tool(s) to use.",
          ],
          [
            'Topic',
            'A pre-defined conversation path for a specific kind of request (e.g., "reset my password").',
          ],
          [
            'Knowledge',
            'The documents or data sources an agent is allowed to read from to answer questions.',
          ],
        ],
      },
      {
        num: 2,
        type: 'lesson',
        title: 'Copilot Studio Tools',
        format: 'Slides + Lab',
        time: '30 min',
        oneLiner:
          'Demystifies connectors, REST APIs, MCP, prompts, and agent flows — the reference table you just read is the cheat sheet for this lesson.',
        why:
          "The world of ‘tools’ an agent can use is full of jargon — connectors, REST APIs, MCP, prompts, agent flows — that can sound intimidating but boils down to a handful of practical categories. This lesson walks through each type with real examples, building directly on the plain-English reference table you just read. By the end, you'll be able to look at a business requirement and immediately recognize which category of tool it calls for. This is one of the most practical lessons in the course because tool selection is a decision you'll make in nearly every agent you build.",
        url: 'https://microsoft.github.io/mcs-labs/modules/tools-overview/',
      },
      {
        num: 3,
        type: 'lesson',
        title: 'Copilot Studio Core Concepts - Part 2',
        format: 'Slides + Lab',
        time: '30 min',
        oneLiner:
          'How agents remember things (variables) and how simple multi-agent setups/channels (Teams, web) work, at a conceptual level.',
        why:
          "Two more concepts round out your understanding of how an agent operates: variables, which let an agent remember details across a conversation (like a name or a case number), and channels, which are the different places people can reach an agent, such as Teams or a web page. This lesson also introduces, at a conceptual level, what happens when simple multi-agent setups work together. None of this requires technical depth — the goal is just enough conceptual grounding to understand what's happening under the hood when an agent ‘remembers’ something or shows up in a new place.",
        url: 'https://microsoft.github.io/mcs-labs/modules/core-concepts-part2/',
      },
      {
        num: 4,
        type: 'checkpoint',
        title: 'Phase 3 Checkpoint',
        question: 'Given a task (e.g., "log a ticket in ServiceNow"), which tool type would you pick, and why?',
      },
    ],
  },
  {
    id: 4,
    title: 'Automating Real Business Processes',
    week: 'Week 4',
    objective: 'Apply agents to recurring work, while keeping people in control of decisions that matter.',
    lessons: [
      {
        num: 1,
        type: 'lesson',
        title: 'Workflows',
        format: 'Lab',
        time: '30 min',
        oneLiner:
          'How agents can run on a schedule or be triggered by an event, instead of waiting for someone to type a question.',
        why:
          "So far, every agent you've built has waited for someone to type a question first. Workflows flip that model: an agent can run automatically on a schedule, like every Monday morning, or be triggered by an event, like a new form submission. This unlocks a much bigger category of automation, because most valuable business processes don't start with someone opening a chat window. This lesson shows you how to set up that kind of trigger-based automation without writing code.",
        url: 'https://microsoft.github.io/mcs-labs/modules/workflows/',
      },
      {
        num: 2,
        type: 'lesson',
        title: 'Human-in-the-Loop Approvals',
        format: 'Lab',
        time: '45 min',
        oneLiner:
          'How to keep a person in control of important decisions (e.g., expense approvals) even when an agent does the legwork.',
        why:
          "Automation shouldn't mean losing control over decisions that matter. This lesson teaches the ‘human-in-the-loop’ pattern, where an agent does all the tedious legwork — gathering information, checking policy, drafting a recommendation — but a real person still makes the final call, like approving an expense report. This is one of the most important governance skills in the entire course, because it's what lets a business responsibly hand real work to an agent without losing oversight. You'll build an approval flow yourself and see exactly where the human checkpoint sits.",
        url: 'https://microsoft.github.io/mcs-labs/modules/human-in-the-loop/',
      },
      {
        num: 3,
        type: 'lesson',
        title: 'Set Up for Success',
        format: 'Lab',
        time: '20 min',
        oneLiner:
          'Practical habits (naming, environments, basic housekeeping) that keep agents easy to maintain as they multiply.',
        why:
          "As agents multiply across a team, small habits make an enormous difference in whether they stay manageable or turn into a confusing mess. This lesson covers practical housekeeping: naming conventions, keeping test and live environments separate, and other basic hygiene that costs almost nothing now but saves real pain later. Think of it as the equivalent of organizing your files before you have a hundred of them instead of after. These habits apply no matter how many agents you eventually build.",
        url: 'https://microsoft.github.io/mcs-labs/modules/setup-for-success/',
      },
      {
        num: 4,
        type: 'checkpoint',
        title: 'Phase 4 Checkpoint',
        question:
          'Name one process on your own team where a human should still approve the final step, even with an agent involved.',
      },
    ],
  },
  {
    id: 5,
    title: 'Licensing & Governance, in Business Terms',
    week: 'Week 5',
    objective:
      "Understand what's already paid for, what costs extra, and who sets the guardrails — without needing IT jargon.",
    lessons: [
      {
        num: 1,
        type: 'reference',
        title: 'Reference: Licensing Tiers',
        tableTitle: 'Licensing Tiers',
        columns: ['Tier', 'What It Covers', 'Cost Model'],
        rows: [
          [
            'Copilot Chat (included)',
            'Everyday chat, and using instruction-based agents that others have already built for you.',
            'Included with most Microsoft 365 plans',
          ],
          [
            'Microsoft 365 Copilot',
            'Everything above, plus premium agents (Researcher, Analyst, Facilitator) and the ability to build your own custom agents.',
            'Per-user license; some agent usage draws on Copilot Credits',
          ],
          [
            'Copilot Studio (pay-as-you-go/at scale)',
            'Building autonomous agents, agent flows, and connecting external systems (Salesforce, SAP, ServiceNow, Workday).',
            'Consumption-based (Copilot Credits) — check current rates on Microsoft Learn',
          ],
          [
            'Enterprise Agent Platform',
            "Multi-agent orchestration and centralized governance/monitoring across an entire organization's agents.",
            'Enterprise licensing — IT/procurement conversation',
          ],
        ],
        note: 'Source: internal licensing reference; confirm current rates on Microsoft Learn before budgeting.',
      },
      {
        num: 2,
        type: 'lesson',
        title: 'Licensing',
        format: 'Slides',
        time: '30 min',
        oneLiner:
          "What's included vs. what draws on Copilot Credits — the table you just read is the cheat sheet.",
        why:
          "Licensing questions come up the moment anyone tries to scale an agent beyond a personal experiment, and the terminology can be confusing even for people who work with budgets every day. This lesson walks through what's already included in a typical Microsoft 365 subscription versus what draws on consumption-based Copilot Credits, using the table you just read as your cheat sheet. By the end, you'll be able to have an informed conversation with a budget owner about what a given agent idea will actually cost. This is business literacy, not technical detail — you won't need to touch a billing console to benefit from it.",
        url: 'https://microsoft.github.io/mcs-labs/modules/licensing/',
      },
      {
        num: 3,
        type: 'lesson',
        title: 'Governance',
        format: 'Slides + Lab',
        time: '30 min',
        oneLiner:
          'Who can publish agents, what data they can touch, and the guardrails (DLP, security zones) that keep that safe.',
        why:
          "Letting anyone build and publish an agent sounds empowering until you consider what happens if an agent is connected to the wrong data or shared too widely. Governance is the set of guardrails — like data loss prevention (DLP) policies and security zones — that keep agent-building safe as more people across an organization start doing it. This lesson covers who typically has permission to publish an agent, what data it's allowed to touch, and how these controls get enforced in practice. Understanding governance is what turns ‘anyone can build an agent’ from a risk into a genuine advantage.",
        url: 'https://microsoft.github.io/mcs-labs/modules/governance/',
      },
      {
        num: 4,
        type: 'checkpoint',
        title: 'Phase 5 Checkpoint',
        question:
          'If you build a custom agent that calls an external system daily, which cost model applies — included, or Copilot Credits?',
      },
    ],
  },
  {
    id: 6,
    title: "Proving It's Working",
    week: 'Week 6',
    objective:
      "Close the loop — learn to read an agent's analytics and decide whether to keep, tune, or retire it.",
    lessons: [
      {
        num: 1,
        type: 'lesson',
        title: 'Copilot Studio Core Concepts - Part 3',
        format: 'Slides + Lab',
        time: '30 min',
        oneLiner: "How to tell whether an agent is actually working well, using built-in analytics.",
        why:
          "Building an agent is only half the job — the other half is knowing whether it's actually working. This lesson introduces the built-in analytics every agent generates: how often it's used, how often it resolves a request without help, and where conversations tend to break down. You'll learn to read these numbers as a story about the agent's real-world performance, not just a dashboard of numbers. This sets up the deeper analytics work in the next lesson.",
        url: 'https://microsoft.github.io/mcs-labs/modules/core-concepts-part3/',
      },
      {
        num: 2,
        type: 'lesson',
        title: 'Measure Success & Analytics',
        format: 'Lab',
        time: '60 min',
        oneLiner: 'A deeper, hands-on pass at reading agent analytics and turning them into improvements.',
        why:
          "This lab takes the analytics concepts from the last lesson and puts them into practice: you'll dig into real usage data, spot patterns that indicate a problem, and translate those patterns into specific improvements. This is the skill that separates someone who built an agent from someone who runs one well — the willingness to keep tuning based on evidence rather than assuming it's done. It's also the longest lesson in the course because turning data into action takes real practice, not just a quick read of a chart. By the end, you'll have a repeatable process for deciding whether to keep, tune, or retire any agent you build.",
        url: 'https://microsoft.github.io/mcs-labs/modules/measure-success/',
      },
      {
        num: 3,
        type: 'checkpoint',
        title: 'Phase 6 Checkpoint',
        question:
          "What are two signals in an agent's analytics that would tell you it needs improvement, not just more promotion?",
      },
    ],
  },
]

export const appendixItems = [
  {
    title: 'Application Lifecycle Management (ALM)',
    tag: 'Advanced',
    description: 'Moving agents safely between test and production environments.',
  },
  {
    title: 'Component Collections',
    tag: 'Advanced',
    description: 'Packaging reusable agent building-blocks for reuse across a team.',
  },
  {
    title: 'Orchestration and Dynamic Chaining',
    tag: 'Advanced',
    description: "How an agent's \"brain\" decides which tool to call, in technical depth.",
  },
  {
    title: 'Multi-Agent Architectures',
    tag: 'Advanced',
    description: 'Designing several agents that collaborate on a complex task.',
  },
  {
    title: 'Standard Orchestrator',
    tag: 'Advanced',
    description: "The underlying engine that plans and sequences an agent's actions.",
  },
  {
    title: 'Azure Integration',
    tag: 'Developer/IT',
    description: 'Connecting agents to Azure AI Search and Speech-to-Text services.',
  },
  {
    title: 'Bring Your Own Model (BYOM)',
    tag: 'Developer/IT',
    description: 'Swapping in a custom or third-party AI model.',
  },
  {
    title: 'Autonomous Agents',
    tag: 'Advanced',
    description: 'Agents that start and finish tasks without being asked, once triggered.',
  },
  {
    title: 'Autonomous Computer Use Agent',
    tag: 'Developer/IT',
    description: 'Agents that operate legacy desktop screens the way a person would.',
  },
  {
    title: 'Autonomous Support Agent',
    tag: 'Advanced',
    description: 'Autonomous handling of routine support requests end-to-end.',
  },
  {
    title: 'Data Fabric Agent',
    tag: 'Developer/IT',
    description: 'Unified access across many enterprise data sources at once.',
  },
  {
    title: 'Contract Alerts with Azure AI',
    tag: 'Developer/IT',
    description: 'A worked example combining Azure AI Search, Speech-to-Text, and Teams alerts.',
  },
  {
    title: 'Pipelines & Source Control',
    tag: 'Developer/IT',
    description: 'Treating agents like code: version control and automated deployment.',
  },
  {
    title: 'Custom MCP Server',
    tag: 'Developer/IT',
    description: 'Building your own standardized "universal adapter" for internal systems.',
  },
  {
    title: 'Dataverse MCP Connector',
    tag: 'Developer/IT',
    description: 'Using a ready-made adapter for natural-language Dataverse queries.',
  },
  {
    title: 'MCP Qualify Lead',
    tag: 'Developer/IT',
    description: 'A worked MCP example for sales lead qualification.',
  },
  {
    title: 'Agent 365',
    tag: 'Advanced',
    description: 'The management platform for governing many agents at enterprise scale.',
  },
  {
    title: 'Copilot Studio Kit',
    tag: 'Advanced',
    description: 'Structured testing and evaluation tooling for agents before launch.',
  },
  {
    title: 'Copilot Studio Plugin for Developer Tools',
    tag: 'Developer/IT',
    description: 'Using Copilot Studio alongside GitHub Copilot CLI and Claude Code.',
  },
]

// ---------------------------------------------------------------------------
// Navigation helpers — flatten the curriculum into a single ordered list so
// Back/Continue and the progress bar can work off one linear sequence.
// ---------------------------------------------------------------------------

export function getFlatLessons() {
  const flat = []
  for (const phase of curriculum) {
    for (const lesson of phase.lessons) {
      flat.push({
        phaseId: phase.id,
        phaseTitle: phase.title,
        lessonCountInPhase: phase.lessons.length,
        path: `/phase-${phase.id}/lesson-${lesson.num}`,
        ...lesson,
      })
    }
  }
  return flat
}

export function getLessonKey(phaseId, num) {
  return `${phaseId}-${num}`
}

export function findLessonIndex(flat, phaseId, num) {
  return flat.findIndex((l) => l.phaseId === Number(phaseId) && l.num === Number(num))
}

export function getPhaseById(phaseId) {
  return curriculum.find((p) => p.id === Number(phaseId))
}

export function getTotalPhaseCount() {
  return curriculum.length
}
