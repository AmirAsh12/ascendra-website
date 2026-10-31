// Ascendra "LinkedIn Level Up" series: posted Tue and Thu at 9am UK, after LinkedIn from Zero ended.
// Same shape as lessons.js / claude_lessons.js. Queue rows use day = 100 + lesson number.
// Rules: UK English, no em dashes, LinkedIn text starts with a short title line, curiosity hook,
// clear stance, 5 specific steps, ends with an easy question, no invented stats or fake stories,
// no pricing in Ascendra posts.
const TAGS = 'LinkedIn tips, LinkedIn profile, LinkedIn headline, career advice, job search, personal branding, Ascendra';

module.exports = [
{
  day: 1, offer: 0, titleA: 'Seen Before', titleB: 'They Ever Click', subtitle: 'Lesson 1: the 3 places recruiters see you first',
  why: [['search', 'Search results', 'Name, photo, headline'], ['message-circle', 'Comments', 'Your headline sits under your name'], ['user-plus', 'Connection requests', 'Photo, headline and your note']],
  steps: [['type', 'Headline with search words', ['The job title you want', 'Words recruiters type in']], ['camera', 'A clear, recent photo', ['Face visible, plain background', 'Recognisable even when tiny']], ['message-circle', 'Comment with value', ['Your headline travels with it', 'Add a tip, not "Great post"']], ['user-plus', 'Add a note to requests', ['One line on why you are connecting', 'Shows up with your headline']], ['eye', 'Check your preview', ['Search your own name', 'Would you click on you?']]],
  do: ['Lead your headline with keywords', 'Use the same photo everywhere', 'Comment in your field'], avoid: ['"Seeking opportunities" headlines', 'Blank or old photos', 'Requests with no note'],
  tip: 'Pro tip: read your headline at the size of a comment',
  script: { hook: ['Most recruiters judge your profile before they ever open it.', 'They see you in three places first.'], stepsIntro: 'Search, comments and requests. Five fixes.', steps: ['Put the job title you want, and search words, in your headline.', 'Use a clear, recent photo that works even when tiny.', 'Leave useful comments. Your headline travels with them.', 'Add a short note to every connection request.', 'Then search your own name. Would you click on you?'], doAvoid: 'Lead with keywords, and skip the "seeking opportunities" headline.', cta: 'Follow Ascendra for the next LinkedIn lesson.' },
  linkedin: `Recruiters judge you before they click

LinkedIn Level Up, lesson 1.

Most people polish their full profile. But recruiters often decide whether to open it from three tiny previews: search results, comments and connection requests. Each one shows only your photo, name and headline.

So that small preview has to do the heavy lifting.

1️⃣ Headline: the job title you want plus the words recruiters search for
2️⃣ Photo: clear, recent, face visible, recognisable even when tiny
3️⃣ Comments: add a real tip or question, your headline travels with it
4️⃣ Connection requests: add a one-line note on why you're connecting
5️⃣ Check it: search your own name and ask, "Would I click on me?"

Skip "Seeking new opportunities" as a headline. It tells a recruiter nothing.

What does your headline say right now? 👇

#LinkedInTips #PersonalBranding #JobSearch #CareerGrowth #Ascendra`,
  instagram: `LinkedIn Level Up, lesson 1: recruiters judge you before they click 👀

Search results, comments and connection requests show only your photo, name and headline. Make that preview count.

📌 Save this for your next profile update
➡️ Follow Ascendra for the next LinkedIn lesson

#LinkedInTips #PersonalBranding #JobSearchTips #CareerGrowth #Ascendra`,
  youtube: { title: 'Recruiters See You Here Before They Click (LinkedIn Level Up 1) #shorts', description: 'Lesson 1 of LinkedIn Level Up by Ascendra: the three places recruiters see your profile first, and five fixes for your headline, photo, comments and connection requests.\n#LinkedInTips #JobSearch #Ascendra' },
  tags: TAGS,
},
{
  day: 2, offer: 0, titleA: 'Easy Apply', titleB: 'Is Not Your Friend', subtitle: 'Lesson 2: when to apply directly instead',
  why: [['zap', 'Easy for everyone', 'So your CV joins a big pile'], ['file-text', 'One CV for every job', 'Generic beats nobody'], ['eye', 'No human contact', 'Nobody knows your name']],
  steps: [['search', 'Find the company site', ['Search the role on their careers page', 'Apply there if you can']], ['file-text', 'Tailor your CV', ['Use words from the advert', 'Top third matches the job']], ['user-search', 'Find a real person', ['Hiring manager or recruiter', 'Check the job post and company page']], ['send', 'Send a short note', ['Two lines: role and why you fit', 'No CV dump in the message']], ['calendar-check', 'Track and follow up', ['Note date, role and contact', 'Polite follow-up after a week']]],
  do: ['Apply direct for jobs you want most', 'Tailor every CV', 'Message one real person'], avoid: ['Fifty clicks a day, no tailoring', 'The same CV for every role', 'Applying and forgetting'],
  tip: 'Pro tip: save Easy Apply for roles you would only like',
  script: { hook: ['Easy Apply is easy for you, and for everyone else.', 'That is exactly the problem.'], stepsIntro: 'For the jobs you really want, do this.', steps: ['Find the role on the company careers page and apply there.', 'Tailor your CV with words from the advert.', 'Find the hiring manager or recruiter.', 'Send them a short, two line note.', 'Track it, and follow up after a week.'], doAvoid: 'Tailor every CV, and never apply and forget.', cta: 'Follow Ascendra for the next LinkedIn lesson.' },
  linkedin: `Easy Apply is not your friend

LinkedIn Level Up, lesson 2.

Easy Apply feels productive. Ten applications before lunch. But if it's easy for you, it's easy for everyone, so your CV lands in a big pile with nothing to make it stand out.

My view: for the jobs you really want, Easy Apply should be the backup, not the plan.

1️⃣ Find the company site: search the role on their careers page and apply there if you can
2️⃣ Tailor your CV: use the words from the advert in the top third
3️⃣ Find a real person: the hiring manager or recruiter named on the post or company page
4️⃣ Send a short note: two lines on the role and why you fit
5️⃣ Track and follow up: note the date and contact, then follow up politely after a week

Keep Easy Apply for roles you'd only "quite like".

Do you use Easy Apply, or apply direct? 👇

#LinkedInTips #JobSearch #JobSearchTips #CareerGrowth #Ascendra`,
  instagram: `LinkedIn Level Up, lesson 2: Easy Apply is not your friend 🚫

If it's easy for you, it's easy for everyone. For the jobs you really want, apply direct, tailor your CV and message a real person.

📌 Save this for your next application
➡️ Follow Ascendra for the next LinkedIn lesson

#LinkedInTips #JobSearchTips #CareerGrowth #CVTips #Ascendra`,
  youtube: { title: 'Why Easy Apply Is Not Your Friend (LinkedIn Level Up 2) #shorts', description: 'Lesson 2 of LinkedIn Level Up by Ascendra: when to skip Easy Apply and apply directly, plus five steps to make your application stand out.\n#LinkedInTips #JobSearch #Ascendra' },
  tags: TAGS,
},
{
  day: 3, offer: 0, titleA: 'Stop Saying', titleB: '"Passionate"', subtitle: 'Lesson 3: what to write in your About instead',
  why: [['users', 'Everyone says it', 'So it blends in'], ['badge-check', 'Proof beats adjectives', 'Show it, don\'t claim it'], ['search', 'Nobody searches for it', 'Recruiters type skills, not feelings']],
  steps: [['target', 'Open with what you do', ['Your role and who you help', 'In the first two lines']], ['trophy', 'Swap adjectives for proof', ['A project, a result, a fix', 'Something you can point to']], ['heart', 'Show the passion', ['What you learn in your own time', 'What you do beyond the brief']], ['search', 'Use job words', ['Skills from adverts you want', 'Said the way people search']], ['mail', 'End with a next step', ['What you are looking for', 'How to reach you']]],
  do: ['Lead with what you do', 'Back claims with examples', 'Write in the first person'], avoid: ['"Passionate", "driven", "hard-working"', 'A list of adjectives', 'Copying your CV word for word'],
  tip: 'Pro tip: for every adjective, ask "How would they know?"',
  script: { hook: ['Saying you are passionate makes you sound like everyone else.', 'Here is what to write instead.'], stepsIntro: 'Five swaps for your About section.', steps: ['Open with what you do and who you help.', 'Swap each adjective for a real example.', 'Show passion through what you learn and build.', 'Use the skill words from jobs you want.', 'End with what you are looking for, and how to reach you.'], doAvoid: 'Show it with proof. Do not just claim it.', cta: 'Follow Ascendra for the next LinkedIn lesson.' },
  linkedin: `Stop saying "passionate" in your About section

LinkedIn Level Up, lesson 3.

"Passionate", "driven", "hard-working". They feel like strong words. The problem is that almost everyone uses them, so they make you sound like everyone else.

Passion is something you show, not something you claim.

1️⃣ Open with what you do: your role and who you help, in the first two lines
2️⃣ Swap adjectives for proof: a project, a result or a problem you fixed
3️⃣ Show the passion: what you learn in your own time, what you do beyond the brief
4️⃣ Use job words: the skills from adverts you want, written the way people search
5️⃣ End with a next step: what you're looking for and how to reach you

Quick test: for every adjective, ask "How would a stranger know this is true?"

What's one word you'd cut from your About section? 👇

#LinkedInTips #LinkedInProfile #PersonalBranding #CareerAdvice #Ascendra`,
  instagram: `LinkedIn Level Up, lesson 3: stop saying "passionate" ✋

Everyone says it, so it blends in. Swap adjectives for proof and show what you actually do.

📌 Save this for your next About section rewrite
➡️ Follow Ascendra for the next LinkedIn lesson

#LinkedInTips #PersonalBranding #LinkedInProfile #CareerGrowth #Ascendra`,
  youtube: { title: 'Stop Saying Passionate on LinkedIn (LinkedIn Level Up 3) #shorts', description: 'Lesson 3 of LinkedIn Level Up by Ascendra: why buzzwords make your About section blend in, and five things to write instead.\n#LinkedInTips #PersonalBranding #Ascendra' },
  tags: TAGS,
},
];
