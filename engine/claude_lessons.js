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
{
  day: 4, offer: 0, titleA: 'Long Report?', titleB: 'Read It in Minutes', subtitle: 'Lesson 4: summarise a document safely',
  why: [['clock', 'Get the gist fast', 'Know what matters before the meeting'], ['search', 'Find what you need', 'Ask questions about the document'], ['shield-check', 'Stay safe', 'Keep confidential data out']],
  steps: [['shield-alert', 'Check before you paste', ['Is it public or approved to share?', 'Remove names and private data']], ['file-up', 'Upload or paste it', ['Add the file or paste the text', 'Say what the document is']], ['target', 'Say why you are reading', ['"I need to brief my manager"', 'Claude picks what matters to you']], ['list-checks', 'Ask for a set format', ['"5 bullets, decisions and risks"', 'Then a one-line summary']], ['quote', 'Check it against the source', ['"Quote the part that says this"', 'Open the original and confirm']]],
  do: ['Say why you need it', 'Ask for quotes as proof', 'Read key parts yourself'], avoid: ['Uploading confidential files', 'Trusting numbers unchecked', 'Asking "summarise this" only'],
  tip: 'Pro tip: ask "What does this document not cover?"',
  script: { hook: ['The danger with AI summaries is not that they are wrong.', 'It is that they sound right. Here is how to summarise safely.'], stepsIntro: 'Five steps.', steps: ['First, check the document is safe to share. Remove private details.', 'Upload it, or paste the text, and say what it is.', 'Tell Claude why you are reading it.', 'Ask for a set format, like five bullets with decisions and risks.', 'Then ask it to quote the source, and check the original.'], doAvoid: 'Keep confidential files out, and always check the numbers.', cta: 'Follow Ascendra for the next Claude lesson.' },
  linkedin: `A long report, read in minutes (safely)

Claude for Work, lesson 4.

The risk with AI summaries isn't that they're obviously wrong. It's that they sound right. So don't just type "summarise this".

1️⃣ Check it's safe to share: public or approved, private details removed
2️⃣ Upload or paste it, and say what the document is
3️⃣ Say why you're reading it: "I need to brief my manager"
4️⃣ Ask for a set format: "5 bullets: decisions, risks, deadlines"
5️⃣ Ask it to quote the source for each point, then check the original

Bonus: ask "What does this document not cover?"

What's the longest document on your desk right now? 👇

#AI #Claude #Productivity #FutureOfWork #Ascendra`,
  instagram: `Claude for Work, lesson 4: read a long report in minutes, safely 📄

Say why you're reading it, ask for a set format, then check the quotes against the original.

📌 Save this for your next long report
➡️ Follow for the next Claude lesson

#AI #Claude #Productivity #AITips #Ascendra`,
  youtube: { title: 'Summarise a Long Report With AI, Safely (Claude for Work 4) #shorts', description: 'Lesson 4 of Claude for Work by Ascendra: five steps to summarise a long document with Claude without trusting it blindly.\n#AI #Claude #Productivity #Ascendra' },
  tags: TAGS,
},
{
  day: 5, offer: 0, titleA: 'Hard Email?', titleB: 'Get the Tone Right', subtitle: 'Lesson 5: say no, chase or apologise',
  why: [['clock', 'Stop staring at a blank email', 'A first draft in seconds'], ['heart-handshake', 'Keep the relationship', 'Firm without being rude'], ['repeat', 'Try different tones', 'Compare before you choose']],
  steps: [['target', 'Say the goal', ['Say no, chase, or apologise', 'One goal per email']], ['users', 'Describe the reader', ['Your manager, a client, a supplier', 'And how they might feel']], ['file-text', 'Give the facts', ['What happened and what you need', 'Leave out private details']], ['sliders-horizontal', 'Set the tone', ['"Polite but firm, under 120 words"', 'Ask for two versions']], ['pen-line', 'Make it yours', ['Edit it into your own words', 'Read it aloud before sending']]],
  do: ['One goal per email', 'Ask for two tones', 'Edit it into your voice'], avoid: ['Sending when angry', 'Over-apologising', 'Copying it word for word'],
  tip: 'Pro tip: ask "How might the reader feel reading this?"',
  script: { hook: ['The hardest emails are often the shortest ones.', 'Here is how to get the tone right with Claude.'], stepsIntro: 'Five steps.', steps: ['Say the goal. Saying no, chasing, or apologising.', 'Tell Claude who is reading it.', 'Give it the facts, without private details.', 'Set the tone. Polite but firm, and short.', 'Then edit it into your own words before you send.'], doAvoid: 'Never send when angry, and always make it sound like you.', cta: 'Follow Ascendra for the next Claude lesson.' },
  linkedin: `Hard email to write? Get the tone right

Claude for Work, lesson 5.

The hardest emails are often the shortest. Saying no, chasing a late reply, apologising for a mistake. The words are easy, the tone is not.

1️⃣ Say the goal: say no, chase, or apologise. One goal per email
2️⃣ Describe the reader: manager, client or supplier, and how they might feel
3️⃣ Give the facts: what happened and what you need (no private details)
4️⃣ Set the tone: "polite but firm, under 120 words, two versions"
5️⃣ Make it yours: edit it into your own words and read it aloud

Bonus: ask "How might the reader feel reading this?"

Which is hardest for you: saying no, chasing or apologising? 👇

#AI #Claude #Productivity #Communication #Ascendra`,
  instagram: `Claude for Work, lesson 5: hard email? Get the tone right ✉️

Goal, reader, facts, tone. Then make it sound like you.

📌 Save this for your next tricky email
➡️ Follow for the next Claude lesson

#AI #Claude #Productivity #AITips #Ascendra`,
  youtube: { title: 'Write a Hard Email With AI in the Right Tone (Claude for Work 5) #shorts', description: 'Lesson 5 of Claude for Work by Ascendra: five steps to draft an email that says no, chases or apologises, without sounding rude or robotic.\n#AI #Claude #Productivity #Ascendra' },
  tags: TAGS,
},
{
  day: 6, offer: 0, titleA: 'Messy To-Do List?', titleB: 'Plan Your Week', subtitle: 'Lesson 6: turn a long list into priorities',
  why: [['brain', 'Get it out of your head', 'One list, not ten'], ['list-ordered', 'See what matters first', 'Not just what is loudest'], ['calendar-days', 'A plan that fits', 'Built around your real time']],
  steps: [['list-todo', 'Dump everything', ['Every task, in any order', 'Leave out private details']], ['clock', 'Add the facts', ['Deadlines and who is waiting', 'Rough time for each task']], ['list-ordered', 'Ask it to sort', ['"Urgent and important first"', '"Group the small jobs"']], ['calendar-days', 'Fit it to your week', ['"I have about 3 free hours a day"', 'Ask for a day-by-day plan']], ['scissors', 'You decide', ['Move, cut or delegate', 'Check it again on Friday']]],
  do: ['Give real deadlines', 'Say how much time you have', 'Make the final call yourself'], avoid: ['Pasting confidential details', 'A plan with no breaks', 'Following it blindly'],
  tip: 'Pro tip: ask "What could I drop this week?"',
  script: { hook: ['A long to-do list is not a plan.', 'Here is how Claude turns it into one.'], stepsIntro: 'Five steps.', steps: ['Dump every task into one message, without private details.', 'Add deadlines, and who is waiting on what.', 'Ask Claude to put the urgent and important first.', 'Tell it how much time you really have each day.', 'Then you decide what to move, cut, or hand over.'], doAvoid: 'Give it real deadlines, and make the final call yourself.', cta: 'Follow Ascendra for the next Claude lesson.' },
  linkedin: `A long to-do list is not a plan

Claude for Work, lesson 6.

Most to-do lists treat every task the same. The email to a client sits next to "order printer paper", and the loudest job wins. Claude can help you sort it, as long as you give it the facts.

1️⃣ Dump everything: every task in one message, in any order (no private details)
2️⃣ Add the facts: deadlines, who's waiting, and a rough time for each
3️⃣ Ask it to sort: "urgent and important first, group the small jobs"
4️⃣ Fit it to your week: "I have about 3 free hours a day, give me a day-by-day plan"
5️⃣ You decide: move, cut or delegate, then check it again on Friday

Bonus: ask "What could I drop this week without much harm?"

What's sitting at the top of your to-do list right now? 👇

#AI #Claude #Productivity #TimeManagement #Ascendra`,
  instagram: `Claude for Work, lesson 6: a to-do list is not a plan 🗓️

Dump it, add deadlines, ask Claude to sort it, fit it to your real time. Then you make the call.

📌 Save this for Monday morning
➡️ Follow for the next Claude lesson

#AI #Claude #Productivity #AITips #Ascendra`,
  youtube: { title: 'Turn a Messy To-Do List Into a Weekly Plan With AI (Claude for Work 6) #shorts', description: 'Lesson 6 of Claude for Work by Ascendra: five steps to turn a long to-do list into clear priorities and a realistic plan for your week.\n#AI #Claude #Productivity #Ascendra' },
  tags: TAGS,
},
{
  day: 7, offer: 0, titleA: 'Before You Send', titleB: 'Ask for a Critique', subtitle: 'Lesson 7: use Claude to check your own work',
  why: [['eye', 'Fresh eyes on demand', 'Spot what you stopped seeing'], ['pen-line', 'Keep your own voice', 'Feedback, not a rewrite'], ['shield-check', 'Catch it early', 'Before your manager does']],
  steps: [['file-text', 'Paste your draft', ['Email, report or CV', 'Remove private details first']], ['users', 'Say who it is for', ['The reader and the goal', '"My manager needs to approve this"']], ['message-square-warning', 'Ask for problems only', ['"List the 3 biggest issues"', '"Don\'t rewrite it"']], ['spell-check', 'Ask specific checks', ['Unclear sentences, missing info', 'Tone and length']], ['pencil', 'Fix it yourself', ['Keep the points you agree with', 'Ignore the rest']]],
  do: ['Ask for honest feedback', 'Name the reader and goal', 'Make the edits yourself'], avoid: ['Asking "Is this good?"', 'Accepting every suggestion', 'Pasting confidential work'],
  tip: 'Pro tip: ask "What would a busy reader skip?"',
  script: { hook: ['Asking AI to rewrite your work is not the best use.', 'Ask it to critique your work instead.'], stepsIntro: 'Five steps.', steps: ['Paste your draft, without private details.', 'Say who it is for, and what it needs to do.', 'Ask for the three biggest problems. No rewrite.', 'Ask it to check clarity, missing points and tone.', 'Then fix it yourself, and keep your own voice.'], doAvoid: 'Ask for honest feedback, and do not accept every suggestion.', cta: 'Follow Ascendra for the next Claude lesson.' },
  linkedin: `Don't ask AI to rewrite it. Ask it to critique it

Claude for Work, lesson 7.

When you ask Claude to "improve this", you often get back something polished that no longer sounds like you. Asking for a critique keeps your voice and still catches the problems.

1️⃣ Paste your draft: an email, report or CV (remove private details first)
2️⃣ Say who it's for: the reader and the goal, "my manager needs to approve this"
3️⃣ Ask for problems only: "list the 3 biggest issues, don't rewrite it"
4️⃣ Ask specific checks: unclear sentences, missing information, tone and length
5️⃣ Fix it yourself: keep the points you agree with, ignore the rest

Bonus: ask "What would a busy reader skip?"

What would you ask Claude to check first: an email, a report or your CV? 👇

#AI #Claude #Productivity #Writing #Ascendra`,
  instagram: `Claude for Work, lesson 7: don't ask for a rewrite, ask for a critique 🔍

Paste your draft, name the reader, ask for the 3 biggest problems. Then fix it in your own words.

📌 Save this for your next important email
➡️ Follow for the next Claude lesson

#AI #Claude #Productivity #AITips #Ascendra`,
  youtube: { title: 'Use AI to Critique Your Work Before You Send It (Claude for Work 7) #shorts', description: 'Lesson 7 of Claude for Work by Ascendra: five steps to get honest feedback on a draft from Claude while keeping your own voice.\n#AI #Claude #Productivity #Ascendra' },
  tags: TAGS,
},
];
