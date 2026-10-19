// Ascendra "Claude for Work" series, posted at 4pm UK on alternate days alongside LinkedIn from Zero.
// Rules: UK English, no em dashes in post text, every LinkedIn post starts with a short title line.
// Same shape as lessons.js so infographic.js / video.js can render it with SERIES=claude.
const TAGS = 'Claude AI, AI for beginners, AI at work, productivity, AI prompts, Anthropic Claude, Ascendra';

module.exports = [
{
  day: 1, offer: 0, titleA: 'Meet Claude', titleB: 'Your AI Work Assistant', subtitle: 'Lesson 1: get a useful answer on day one',
  why: [['clock', 'Save time', 'Drafts emails, notes and summaries in seconds'], ['lightbulb', 'Think it through', 'A sounding board for ideas and plans'], ['graduation-cap', 'Learn faster', 'Ask it to explain anything simply']],
  steps: [['globe', 'Open claude.ai', ['Free to sign up', 'Works on web and mobile']], ['user', 'Say who you are', ['Your role and your goal', 'Context gives better answers']], ['list-checks', 'Ask for one clear task', ['Draft a reply to this email', 'Say the length and tone']], ['repeat', 'Refine the answer', ['Shorter, more formal, add an example', 'Treat it like a conversation']], ['shield-check', 'Check before you use it', ['AI can make mistakes', 'Keep private data out']]],
  do: ['Give context and a goal', 'Ask follow-up questions', 'Check facts and figures'], avoid: ['One-word prompts', 'Sharing confidential data', 'Using answers without reading'],
  tip: 'Pro tip: start your prompt with "I am a ... and I need ..."',
  script: { hook: ['Most people try AI once, get a vague answer, and give up.', 'Here is how to get a useful answer from Claude on day one.'], stepsIntro: 'Five simple steps.', steps: ['Open claude dot A I. It is free to sign up.', 'Tell Claude who you are, and what you are trying to do.', 'Ask for one clear task, like drafting a reply to an email.', 'Then refine it. Ask for shorter, more formal, or an example.', 'And always check the answer before you use it.'], doAvoid: 'Give it context, and never paste passwords or private data.', cta: 'Follow Ascendra for the next Claude lesson.' },
  linkedin: `Get a useful answer from Claude on day one

New series: Claude for Work, lesson 1.

Most people try an AI assistant once, get a vague answer, and give up. The problem is usually the prompt, not the tool.

Try this:
1️⃣ Open claude.ai (free to sign up)
2️⃣ Say who you are and what you need
3️⃣ Ask for one clear task, like drafting a reply to an email
4️⃣ Refine it: shorter, more formal, add an example
5️⃣ Check the answer before you use it

And never paste passwords or confidential data.

What's one task you'd hand to an AI assistant this week? 👇

#AI #Claude #Productivity #FutureOfWork #Ascendra`,
  instagram: `Claude for Work, lesson 1: get a useful answer on day one 🤖

Say who you are, ask for one clear task, then refine it.

📌 Save this
➡️ Follow for the next Claude lesson

#AI #Claude #AITips #Productivity #Ascendra`,
  youtube: { title: 'How to Start Using Claude AI (Claude for Work 1) #shorts', description: 'Lesson 1 of Claude for Work by Ascendra: five simple steps to get a useful answer from Claude on day one. Follow Ascendra for more AI and LinkedIn lessons.\n#AI #Claude #Ascendra' },
  tags: TAGS,
},
{
  day: 2, offer: 0, titleA: 'Bad Answer?', titleB: 'Fix the Prompt', subtitle: 'Lesson 2: the five-part prompt',
  why: [['target', 'Get it right first time', 'Less back and forth'], ['user', 'Answers that fit you', 'Your role, your audience, your tone'], ['layout-list', 'The format you need', 'Bullets, a table or an email']],
  steps: [['user', 'Role', ['"Act as an IT service desk lead"', 'Tells Claude whose shoes to stand in']], ['target', 'Task', ['One clear job', '"Write a reply to this complaint"']], ['file-text', 'Context', ['Paste the details it needs', 'Who it is for and why']], ['layout-list', 'Format', ['Length, tone, structure', '"Under 120 words, friendly"']], ['sparkles', 'Example', ['Show one you like', 'Claude copies the style']]],
  do: ['Use all five parts', 'Paste real context', 'Ask for a second version'], avoid: ['"Write something about..."', 'Leaving out who it is for', 'Pasting private data'],
  tip: 'Pro tip: save your best prompts and reuse them',
  script: { hook: ['Everyone blames the AI for a bad answer.', 'Most of the time, the prompt is the problem.'], stepsIntro: 'Use these five parts.', steps: ['Role. Tell Claude who to be.', 'Task. Give it one clear job.', 'Context. Paste the details it needs.', 'Format. Say the length and the tone.', 'Example. Show it one you like.'], doAvoid: 'Give it real context, and keep private data out.', cta: 'Follow Ascendra for the next Claude lesson.' },
  linkedin: `Bad answer from AI? Fix the prompt

Claude for Work, lesson 2.

Everyone blames the AI for a vague answer. Most of the time, the prompt is the problem.

Use these five parts:
1️⃣ Role: "Act as an IT service desk lead"
2️⃣ Task: one clear job, like replying to a complaint
3️⃣ Context: paste the details it needs
4️⃣ Format: length and tone, "under 120 words, friendly"
5️⃣ Example: show one you like and it will match the style

Try it on one real task today and compare it with your usual prompt.

What's the first thing you'd use this prompt for? 👇

#AI #Claude #Productivity #AIPrompts #Ascendra`,
  instagram: `Claude for Work, lesson 2: bad answer? Fix the prompt 🛠️

Role, task, context, format, example.

📌 Save this for your next prompt
➡️ Follow for the next Claude lesson

#AI #Claude #AIPrompts #Productivity #Ascendra`,
  youtube: { title: 'The 5-Part Prompt That Fixes Bad AI Answers (Claude for Work 2) #shorts', description: 'Lesson 2 of Claude for Work by Ascendra: role, task, context, format and example. Five parts that turn vague AI answers into useful ones.\n#AI #Claude #AIPrompts #Ascendra' },
  tags: TAGS,
},
{
  day: 3, offer: 0, titleA: 'Messy Notes?', titleB: 'Clear Email in a Minute', subtitle: 'Lesson 3: notes to summary to email',
  why: [['clock', 'Save time after meetings', 'No more writing up from scratch'], ['list-checks', 'Never lose an action', 'Owners and dates pulled out'], ['mail', 'Send it straight away', 'A clean email, ready to check']],
  steps: [['clipboard-list', 'Paste your notes', ['Rough is fine', 'Remove names or private details first']], ['list-checks', 'Ask for a summary', ['"5 bullet points, plain English"', 'Decisions first']], ['user-check', 'Pull out the actions', ['Who does what, by when', 'Ask for a simple table']], ['mail', 'Turn it into an email', ['"Friendly, under 150 words"', 'Say who it is going to']], ['shield-check', 'Check and send', ['Fix anything it got wrong', 'You are still the author']]],
  do: ['Remove private details first', 'Ask for decisions and actions', 'Read it before you send'], avoid: ['Pasting confidential notes', 'Sending without checking', 'Asking for everything at once'],
  tip: 'Pro tip: ask "What did I miss?" at the end',
  script: { hook: ['You never need to write up meeting notes from scratch again.', 'Here is how to turn messy notes into a clear email.'], stepsIntro: 'Five quick steps.', steps: ['Paste your rough notes. Take out private details first.', 'Ask for a short summary in plain English.', 'Ask it to pull out who does what, and by when.', 'Then ask it to turn that into a friendly email.', 'Read it, fix anything, and send.'], doAvoid: 'Keep confidential notes out, and always check before you send.', cta: 'Follow Ascendra for the next Claude lesson.' },
  linkedin: `Messy meeting notes? Clear email in a minute

Claude for Work, lesson 3.

Writing up meeting notes is one of the most boring jobs at work. You don't need to start from a blank page anymore.

1️⃣ Paste your rough notes (take out private details first)
2️⃣ Ask for a summary: "5 bullets, plain English, decisions first"
3️⃣ Ask for the actions: who does what, by when
4️⃣ Ask for an email: "friendly, under 150 words"
5️⃣ Read it, fix anything wrong, then send

Bonus: finish with "What did I miss?"

What's the most boring task you'd hand to AI first? 👇

#AI #Claude #Productivity #FutureOfWork #Ascendra`,
  instagram: `Claude for Work, lesson 3: messy notes to a clear email 📝

Summary, actions, email. Then check and send.

📌 Save this for your next meeting
➡️ Follow for the next Claude lesson

#AI #Claude #Productivity #AITips #Ascendra`,
  youtube: { title: 'Turn Messy Meeting Notes Into an Email With AI (Claude for Work 3) #shorts', description: 'Lesson 3 of Claude for Work by Ascendra: paste your notes, get a summary, the action list and a ready-to-check email.\n#AI #Claude #Productivity #Ascendra' },
  tags: TAGS,
},
];
