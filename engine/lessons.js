// Ascendra "LinkedIn from Zero" — 14-day series content.
// Rules: UK English, no em dashes in post text, every LinkedIn post starts with a short title line.
// offer: 0 = none, 1 = soft DM line, 2 = full £20/hour offer.
const SOFT = 'Want a second pair of eyes on your profile? Send me a message.';
const FULL = '1-to-1 LinkedIn profile and CV help: £20 per hour. Message me or email hello@ascendra-academy.co.uk';
const TAGS = 'LinkedIn tips, LinkedIn for beginners, LinkedIn profile, career advice, job search, personal branding, Ascendra';

module.exports = [
{
  day: 1, offer: 0, titleA: 'Why LinkedIn', titleB: 'Is Your Shop Window', subtitle: 'Lesson 1: what LinkedIn is and why it matters for your career',
  why: [['briefcase', 'Recruiters search it', 'Many hiring teams look you up here first'], ['users', 'Your network', 'Former colleagues, clients and friends in one place'], ['eye', 'Always on', 'Your profile works for you while you sleep']],
  steps: [['globe', 'Understand it', ['A professional social network', 'Think online CV plus conversations']], ['search', 'See who is there', ['Recruiters, managers, founders', 'People in your target industry']], ['target', 'Set your goal', ['New job, clients or learning?', 'Your goal shapes your profile']], ['calendar', 'Give it 15 minutes a day', ['Small daily habits beat big bursts', 'Consistency builds visibility']], ['rocket', 'Follow this series', ['14 lessons, one step a day', 'From zero to a profile that works']]],
  do: ['Treat it like a living CV', 'Be yourself, but professional', 'Start before you need it'], avoid: ['Waiting until you are job hunting', 'Copying someone else\'s profile', 'Expecting results in one day'],
  tip: 'Pro tip: write down your one main LinkedIn goal before tomorrow\'s lesson.',
  script: { hook: ['Most people join LinkedIn, then forget about it.', 'Here is why it might be the most important page about you online.'], stepsIntro: 'Let us start from zero.', steps: ['LinkedIn is a professional network: an online CV plus real conversations.', 'Recruiters, hiring managers and future clients are already on it.', 'Decide your goal: a new job, new clients, or learning.', 'Give it fifteen minutes a day.', 'And follow this series, one step a day for fourteen days.'], doAvoid: 'Start before you need it, and do not expect results overnight.', cta: 'Follow Ascendra for lesson two tomorrow.' },
  linkedin: `Why LinkedIn is your shop window

Most people create a LinkedIn account, add a job title, and never come back.

But when a recruiter, hiring manager or new client hears your name, LinkedIn is often the first place they look.

Today I'm starting a 14-day series: LinkedIn from Zero. One simple step a day, from creating your account to getting noticed.

Lesson 1 is about mindset:
✅ Treat LinkedIn like a living CV
✅ Decide your goal: a new job, new clients, or learning
✅ Give it 15 minutes a day

What's your main reason for being on LinkedIn? Tell me in the comments 👇

#LinkedInTips #CareerGrowth #PersonalBranding #JobSearch #Ascendra`,
  instagram: `Lesson 1 of 14: why LinkedIn is your career shop window 🪟

Recruiters and clients look you up here first. This series takes you from zero to a profile that works, one step a day.

📌 Save this
➡️ Follow for lesson 2 tomorrow

#LinkedInTips #CareerAdvice #JobSearchTips #PersonalBranding #Ascendra`,
  youtube: { title: 'Why LinkedIn Matters (Lesson 1 of 14) #shorts', description: 'Lesson 1 of the LinkedIn from Zero series: what LinkedIn is, who uses it, and why it matters for your career. Follow Ascendra for a new lesson every day.\n#LinkedInTips #CareerAdvice #Ascendra' },
},
{
  day: 2, offer: 0, titleA: 'Set Up Your', titleB: 'Account the Right Way', subtitle: 'Lesson 2: the settings most people skip',
  why: [['shield-check', 'Look professional', 'A clean setup builds trust from day one'], ['link', 'Easy to share', 'A tidy profile link for your CV and email'], ['lock', 'Stay in control', 'Privacy settings decide who sees what']],
  steps: [['mail', 'Use a personal email', ['Not your work email', 'You keep access if you change jobs']], ['user', 'Use your real name', ['The name on your CV', 'No titles or emojis in the name field']], ['link', 'Claim your custom URL', ['linkedin.com/in/yourname', 'Edit it in Public profile settings']], ['map-pin', 'Set your location', ['Where you want to work', 'Recruiters filter by location']], ['lock', 'Check privacy settings', ['Turn on profile visibility', 'Choose who sees your connections']]],
  do: ['Add a backup email and phone', 'Turn on two-step verification', 'Put your URL on your CV'], avoid: ['Using your work email', 'Random numbers in your URL', 'Leaving the profile private'],
  tip: 'Pro tip: turn on two-step verification in Settings, Sign in and security.',
  script: { hook: ['Before you write a single word on LinkedIn,', 'get these five settings right.'], stepsIntro: 'Here is the setup.', steps: ['Sign up with your personal email, not your work one.', 'Use your real name, exactly as it is on your CV.', 'Claim a custom profile link with your name in it.', 'Set your location to where you want to work.', 'Then check your privacy settings, so people can actually find you.'], doAvoid: 'And turn on two-step verification to keep your account safe.', cta: 'Follow Ascendra for lesson three tomorrow.' },
  linkedin: `Set up your LinkedIn account the right way

Lesson 2 of LinkedIn from Zero.

Most people rush the setup. These five settings take ten minutes and save you problems later:

1️⃣ Sign up with your personal email, not your work email
2️⃣ Use your real name, the same as on your CV
3️⃣ Claim your custom URL: linkedin.com/in/yourname
4️⃣ Set your location to where you want to work
5️⃣ Check your privacy settings so people can find you

Bonus: switch on two-step verification.

Have you claimed your custom URL yet? 👇

#LinkedInTips #LinkedInForBeginners #CareerAdvice #JobSearch #Ascendra`,
  instagram: `Lesson 2 of 14: set up your LinkedIn account the right way ⚙️

5 settings most people skip, from your custom URL to privacy.

📌 Save this
➡️ Follow for lesson 3 tomorrow

#LinkedInTips #LinkedInForBeginners #CareerTips #Ascendra`,
  youtube: { title: 'Set Up LinkedIn the Right Way (Lesson 2) #shorts', description: 'Lesson 2 of LinkedIn from Zero: the five account settings to get right before anything else. Follow Ascendra for a new lesson every day.\n#LinkedInTips #Ascendra' },
},
{
  day: 3, offer: 0, titleA: 'Photo & Banner', titleB: 'That Build Trust', subtitle: 'Lesson 3: your first impression in two images',
  why: [['eye', 'Seen first', 'People notice your photo before anything else'], ['smile', 'Builds trust', 'A friendly face feels approachable'], ['image', 'Free advertising', 'Your banner can say what you do']],
  steps: [['camera', 'Use a recent photo', ['Looks like you today', 'Head and shoulders, face clearly visible']], ['sun', 'Good light, plain background', ['Face a window for soft light', 'No busy or dark backgrounds']], ['smile', 'Look approachable', ['A natural smile works well', 'Dress as you would for work']], ['layout-template', 'Design a simple banner', ['Free tools like Canva work well', 'Recommended size 1584 x 396 px']], ['megaphone', 'Put a message on it', ['What you do and who you help', 'Keep text short and readable']]],
  do: ['Use a high quality photo', 'Keep the banner simple', 'Check how it looks on mobile'], avoid: ['Group photos or sunglasses', 'Logos instead of your face', 'Leaving the default blue banner'],
  tip: 'Pro tip: ask a friend to take your photo near a window in daylight.',
  script: { hook: ['People decide in seconds whether to read your profile.', 'Your photo and banner make that decision.'], stepsIntro: 'Here is how to get them right.', steps: ['Use a recent head and shoulders photo.', 'Find soft light and a plain background.', 'Look approachable, and dress the way you would for work.', 'Then create a simple banner, using a free tool like Canva.', 'Add one short message: what you do, and who you help.'], doAvoid: 'Avoid group photos, sunglasses, and the default blue banner.', cta: 'Follow Ascendra for lesson four tomorrow.' },
  linkedin: `Your photo and banner, done properly

Lesson 3 of LinkedIn from Zero.

Before anyone reads a word, they see two images. Make them count.

📸 Photo
• Recent, head and shoulders, face clearly visible
• Soft daylight and a plain background
• A natural smile and work clothes

🖼️ Banner
• Make it in a free tool like Canva (1584 x 396 px)
• One short message: what you do and who you help

Skip the group photos, sunglasses and the default blue banner.

When did you last update your profile photo? 👇

#LinkedInTips #PersonalBranding #LinkedInProfile #CareerAdvice #Ascendra`,
  instagram: `Lesson 3 of 14: a LinkedIn photo and banner that build trust 📸

Simple rules for your first impression.

📌 Save this
➡️ Follow for lesson 4 tomorrow

#LinkedInTips #PersonalBranding #LinkedInProfile #Ascendra`,
  youtube: { title: 'LinkedIn Photo & Banner Tips (Lesson 3) #shorts', description: 'Lesson 3 of LinkedIn from Zero: how to choose a profile photo and design a banner that build trust. Follow Ascendra for a new lesson every day.\n#LinkedInTips #Ascendra' },
},
{
  day: 4, offer: 0, titleA: 'Write a Headline', titleB: 'That Gets Clicks', subtitle: 'Lesson 4: the 220 characters that follow you everywhere',
  why: [['search', 'Search results', 'Your headline shows next to your name in search'], ['message-circle', 'Every comment', 'It appears on every post and comment you make'], ['target', 'Instant clarity', 'People know what you do at a glance']],
  steps: [['user', 'Start with your role', ['The job title you want', 'Use words people search for']], ['users', 'Say who you help', ['Your audience or industry', 'For example: small businesses']], ['trophy', 'Add the result', ['What changes because of you', 'Keep it specific']], ['hash', 'Include 2 or 3 keywords', ['Skills recruiters search for', 'Separate with a | symbol']], ['pen-line', 'Read it out loud', ['Clear, human, no jargon', 'Up to 220 characters']]],
  do: ['Write for the reader', 'Use your target job title', 'Update it as you grow'], avoid: ['Just "Unemployed" or "Student"', 'Buzzwords like "guru" or "ninja"', 'Leaving the default job title'],
  tip: 'Formula: Role | who you help | the result you deliver',
  script: { hook: ['Your LinkedIn headline follows you everywhere.', 'Here is a simple formula that works.'], stepsIntro: 'Build it in five parts.', steps: ['Start with the role you want, in words people search for.', 'Say who you help.', 'Add the result you deliver.', 'Include two or three keywords recruiters look for.', 'Then read it out loud, so it sounds human.'], doAvoid: 'Avoid buzzwords, and never just write unemployed.', cta: 'Follow Ascendra for lesson five tomorrow.' },
  linkedin: `A LinkedIn headline that gets clicks

Lesson 4 of LinkedIn from Zero.

Your headline appears in search results, on every post and on every comment. It's the most viewed line on your profile.

Try this formula:
Role | who you help | the result you deliver

Example:
IT Support Lead | Helping small firms | Fewer outages, happier staff

Tips:
• Use the job title you want, in words people search for
• Add 2 or 3 keywords
• Skip buzzwords like "guru" or "ninja"

Share your headline below and I'll suggest one improvement 👇

#LinkedInTips #LinkedInHeadline #PersonalBranding #JobSearch #Ascendra`,
  instagram: `Lesson 4 of 14: a LinkedIn headline formula that works ✍️

Role | who you help | the result you deliver

📌 Save this
➡️ Follow for lesson 5 tomorrow

#LinkedInTips #LinkedInHeadline #PersonalBranding #Ascendra`,
  youtube: { title: 'LinkedIn Headline Formula (Lesson 4) #shorts', description: 'Lesson 4 of LinkedIn from Zero: a simple headline formula. Role, who you help, the result you deliver. Follow Ascendra for a new lesson every day.\n#LinkedInTips #Ascendra' },
},
{
  day: 5, offer: 0, titleA: 'Write an About', titleB: 'Section People Read', subtitle: 'Lesson 5: tell your story in a few short paragraphs',
  why: [['book-open', 'Your story', 'The only place you speak in your own voice'], ['heart-handshake', 'Builds connection', 'People hire people they understand'], ['search', 'More keywords', 'Helps you appear in more searches']],
  steps: [['zap', 'Hook in the first lines', ['Only the start shows before "see more"', 'Open with a bold, clear line']], ['user', 'Who you are', ['Your role and experience', 'In plain, friendly language']], ['trophy', 'Proof', ['2 or 3 results or achievements', 'Numbers help when you have them']], ['sparkles', 'Your key skills', ['A short list of strengths', 'Use words from job adverts']], ['send', 'Call to action', ['Tell people how to reach you', 'Email or "send me a message"']]],
  do: ['Write in the first person', 'Use short paragraphs', 'End with how to contact you'], avoid: ['Copying your CV word for word', 'One long block of text', 'Talking only about yourself'],
  tip: 'Pro tip: write it in a notes app first, then paste it in.',
  script: { hook: ['Your About section is the only place on LinkedIn', 'where you tell your story in your own words.'], stepsIntro: 'Use this structure.', steps: ['Open with a strong first line, because only the start shows.', 'Say who you are, in plain friendly language.', 'Add two or three results as proof.', 'List your key skills.', 'And finish by telling people how to contact you.'], doAvoid: 'Write in the first person, and keep paragraphs short.', cta: 'Follow Ascendra for lesson six tomorrow.' },
  linkedin: `An About section people actually read

Lesson 5 of LinkedIn from Zero.

Your About section is the one place where you speak in your own voice. Use this structure:

1️⃣ A strong opening line (only the first lines show before "see more")
2️⃣ Who you are, in plain language
3️⃣ 2 or 3 results as proof
4️⃣ Your key skills
5️⃣ How to contact you

Write in the first person and keep paragraphs short. Avoid pasting your CV word for word.

What's the first line of your About section? 👇

#LinkedInTips #LinkedInProfile #PersonalBranding #CareerAdvice #Ascendra`,
  instagram: `Lesson 5 of 14: write a LinkedIn About section people read 📖

Hook, who you are, proof, skills, call to action.

📌 Save this
➡️ Follow for lesson 6 tomorrow

#LinkedInTips #LinkedInProfile #CareerTips #Ascendra`,
  youtube: { title: 'LinkedIn About Section Structure (Lesson 5) #shorts', description: 'Lesson 5 of LinkedIn from Zero: a five-part structure for your About section. Follow Ascendra for a new lesson every day.\n#LinkedInTips #Ascendra' },
},
{
  day: 6, offer: 0, titleA: 'Experience That', titleB: 'Shows Results', subtitle: 'Lesson 6: turn job duties into achievements',
  why: [['trophy', 'Proves your value', 'Results show what you can do for the next employer'], ['search', 'Keyword rich', 'Job titles and skills help you get found'], ['file-check', 'Matches your CV', 'Consistency builds trust with recruiters']],
  steps: [['briefcase', 'Add every relevant role', ['Correct titles and dates', 'Link to the company page']], ['pen-line', 'One line summary', ['What the role was about', 'Who you supported']], ['chart-line', 'Results, not duties', ['"Reduced tickets by 20%"', 'Not "responsible for tickets"']], ['sparkles', 'Add skills to each role', ['Pick from LinkedIn\'s skill list', 'Links your skills to real work']], ['image', 'Add media', ['Projects, certificates, links', 'Show, do not just tell']]],
  do: ['Start bullets with action verbs', 'Use numbers where you can', 'Include volunteering and gaps honestly'], avoid: ['Copying job descriptions', 'Old roles with no detail', 'Different dates from your CV'],
  tip: 'Formula: action verb + what you did + the result',
  script: { hook: ['Recruiters do not want your job description.', 'They want to know what changed because of you.'], stepsIntro: 'Here is how to write your experience.', steps: ['Add every relevant role, with correct titles and dates.', 'Write a one line summary of each role.', 'Focus on results, not duties.', 'Add the skills you used to each role.', 'And add media, like projects or certificates.'], doAvoid: 'Use action verbs and numbers, and keep it consistent with your CV.', cta: 'Follow Ascendra for lesson seven tomorrow.' },
  linkedin: `Turn your experience into results

Lesson 6 of LinkedIn from Zero.

Most experience sections read like job descriptions. Recruiters want to see what changed because of you.

Use this formula for each bullet:
Action verb + what you did + the result

❌ Responsible for the service desk
✅ Led a team of 5 to cut ticket backlog by 30% in 3 months

Also:
• Add skills to each role
• Attach projects or certificates
• Keep dates the same as your CV

Pick one bullet on your profile and rewrite it today. Share it below 👇

#LinkedInTips #CareerAdvice #JobSearch #CVTips #Ascendra`,
  instagram: `Lesson 6 of 14: LinkedIn experience that shows results 📈

Action verb + what you did + the result.

📌 Save this
➡️ Follow for lesson 7 tomorrow

#LinkedInTips #CareerAdvice #CVTips #Ascendra`,
  youtube: { title: 'Write LinkedIn Experience That Shows Results (Lesson 6) #shorts', description: 'Lesson 6 of LinkedIn from Zero: turn job duties into achievements. Follow Ascendra for a new lesson every day.\n#LinkedInTips #Ascendra' },
},
{
  day: 7, offer: 0, titleA: 'Skills That Help', titleB: 'You Get Found', subtitle: 'Lesson 7: pick, order and prove your skills',
  why: [['search', 'Recruiter filters', 'Recruiters search and filter by skills'], ['target', 'Job matching', 'LinkedIn matches skills to job adverts'], ['award', 'Credibility', 'Endorsements and courses back you up']],
  steps: [['list-checks', 'List your real skills', ['Technical and people skills', 'Only ones you can prove']], ['file-text', 'Check job adverts', ['Copy the skill words they use', 'Match your target roles']], ['star', 'Order your top skills', ['Your most important first', 'Show them in your About section']], ['briefcase', 'Link skills to roles', ['Connect each skill to a job', 'Shows where you used it']], ['graduation-cap', 'Prove them', ['Courses and certificates', 'Ask colleagues to endorse you']]],
  do: ['Focus on skills for your target job', 'Keep the list up to date', 'Add licences and certifications'], avoid: ['Adding skills you do not have', 'Only listing soft skills', 'Ignoring skill words in job ads'],
  tip: 'Pro tip: compare 3 job adverts you like and add the skills that repeat.',
  script: { hook: ['Recruiters filter LinkedIn by skills.', 'If yours are missing, you are invisible.'], stepsIntro: 'Here is how to fix it.', steps: ['List the real skills you can prove.', 'Check job adverts, and use the same skill words.', 'Put your most important skills first.', 'Link each skill to the job where you used it.', 'And prove them with courses, certificates and endorsements.'], doAvoid: 'Never add skills you do not have.', cta: 'Follow Ascendra for lesson eight tomorrow.' },
  linkedin: `Skills that help you get found

Lesson 7 of LinkedIn from Zero.

Recruiters filter by skills, and LinkedIn uses them to match you to jobs. If the right skills are missing, you don't show up.

Quick method:
1️⃣ Open 3 job adverts you'd love to get
2️⃣ Note the skills that repeat
3️⃣ Add the ones you genuinely have
4️⃣ Link each skill to the role where you used it
5️⃣ Back them up with courses and endorsements

What's one skill you should add today? 👇

#LinkedInTips #LinkedInSkills #JobSearch #CareerGrowth #Ascendra`,
  instagram: `Lesson 7 of 14: LinkedIn skills that help you get found 🔍

Use the same skill words as the jobs you want.

📌 Save this
➡️ Follow for lesson 8 tomorrow

#LinkedInTips #JobSearchTips #CareerGrowth #Ascendra`,
  youtube: { title: 'LinkedIn Skills That Get You Found (Lesson 7) #shorts', description: 'Lesson 7 of LinkedIn from Zero: how to choose, order and prove your skills. Follow Ascendra for a new lesson every day.\n#LinkedInTips #Ascendra' },
},
{
  day: 8, offer: 1, titleA: 'Featured &', titleB: 'Recommendations', subtitle: 'Lesson 8: show proof and let others vouch for you',
  why: [['star', 'Show your best', 'Featured sits near the top of your profile'], ['quote', 'Social proof', 'Others praising you beats praising yourself'], ['shield-check', 'Builds trust', 'Recommendations are hard to fake']],
  steps: [['star', 'Open Featured', ['Add profile section, then Featured', 'Pin up to a few items']], ['file-text', 'Pin your best work', ['A post, project, PDF or link', 'Your CV or portfolio works too']], ['users', 'Choose who to ask', ['Managers, colleagues, clients', 'People who know your work well']], ['send', 'Ask personally', ['Send a short, friendly message', 'Suggest what they could mention']], ['heart-handshake', 'Give first', ['Write recommendations for others', 'Many will return the favour']]],
  do: ['Update Featured every few months', 'Thank people who recommend you', 'Ask soon after a project ends'], avoid: ['An empty Featured section', 'Generic recommendation requests', 'Only recommendations from friends'],
  tip: 'Pro tip: give two recommendations this week before you ask for any.',
  script: { hook: ['Telling people you are good is fine.', 'Showing it, and having others say it, is much better.'], stepsIntro: 'Here is how.', steps: ['Add the Featured section to your profile.', 'Pin your best work: a post, a project, or a link.', 'Choose people who know your work well.', 'Ask them personally, with a short friendly message.', 'And give recommendations first, many people return the favour.'], doAvoid: 'Want me to look at your profile? Send me a message.', cta: 'Follow Ascendra for lesson nine tomorrow.' },
  linkedin: `Featured and recommendations: your proof

Lesson 8 of LinkedIn from Zero.

Saying you're good is one thing. Showing it, and having others say it, is much stronger.

⭐ Featured
Pin your best work near the top of your profile: a post, a project, a PDF or your portfolio.

💬 Recommendations
• Ask managers, colleagues or clients who know your work
• Send a short, personal message
• Give recommendations first. Many people return the favour

Who's one person you could recommend this week? 👇

Want a second pair of eyes on your profile? Send me a message.

#LinkedInTips #LinkedInProfile #PersonalBranding #CareerAdvice #Ascendra`,
  instagram: `Lesson 8 of 14: LinkedIn Featured section and recommendations ⭐

Show your best work and let others vouch for you.

📌 Save this
💬 Want feedback on your profile? DM me
➡️ Follow for lesson 9 tomorrow

#LinkedInTips #PersonalBranding #Ascendra`,
  youtube: { title: 'LinkedIn Featured & Recommendations (Lesson 8) #shorts', description: 'Lesson 8 of LinkedIn from Zero: use the Featured section and recommendations as proof. Want feedback on your profile? Message Ascendra.\n#LinkedInTips #Ascendra' },
},
{
  day: 9, offer: 1, titleA: 'Build a Network', titleB: 'That Opens Doors', subtitle: 'Lesson 9: connect with purpose, not at random',
  why: [['network', 'Reach', 'Your posts are shown to your network first'], ['door-open', 'Opportunities', 'Many jobs come through people you know'], ['lightbulb', 'Learning', 'Your feed is shaped by who you follow']],
  steps: [['users', 'Start with people you know', ['Colleagues, classmates, friends', 'Import contacts if you like']], ['target', 'Add your target field', ['People in roles you want', 'Recruiters in your industry']], ['pen-line', 'Add a personal note', ['Say why you want to connect', 'One or two friendly lines']], ['bell', 'Follow industry voices', ['Leaders and companies you admire', 'Learn from what they share']], ['repeat', 'Keep it steady', ['5 to 10 new connections a day', 'Quality over quantity']]],
  do: ['Personalise connection requests', 'Thank people who accept', 'Engage with their posts'], avoid: ['Mass-connecting with strangers', 'Pitching straight after connecting', 'Ignoring messages'],
  tip: 'Note idea: "Hi Sara, I enjoyed your post on IT support. I\'d love to connect."',
  script: { hook: ['Your LinkedIn network decides who sees you.', 'So build it on purpose.'], stepsIntro: 'Follow these steps.', steps: ['Start with people you already know.', 'Add people in the roles and industry you want.', 'Send a short personal note with each request.', 'Follow leaders and companies you admire.', 'And keep it steady, a few new connections every day.'], doAvoid: 'Never pitch someone straight after connecting. Need help? Send me a message.', cta: 'Follow Ascendra for lesson ten tomorrow.' },
  linkedin: `Build a network that opens doors

Lesson 9 of LinkedIn from Zero.

Your posts are shown to your network first, so who you connect with really matters.

1️⃣ Start with people you know
2️⃣ Add people in the roles and industry you want
3️⃣ Send a short personal note with each request
4️⃣ Follow leaders and companies you admire
5️⃣ Keep it steady: 5 to 10 new connections a day

Example note:
"Hi Sara, I enjoyed your post on IT support. I'd love to connect."

Don't pitch anyone straight after they accept. Build the relationship first.

Want a second pair of eyes on your profile? Send me a message.

#LinkedInTips #Networking #CareerGrowth #JobSearch #Ascendra`,
  instagram: `Lesson 9 of 14: build a LinkedIn network that opens doors 🤝

Connect with purpose, add a note, keep it steady.

📌 Save this
💬 Need help with your profile? DM me
➡️ Follow for lesson 10 tomorrow

#LinkedInTips #Networking #CareerGrowth #Ascendra`,
  youtube: { title: 'Build a LinkedIn Network That Works (Lesson 9) #shorts', description: 'Lesson 9 of LinkedIn from Zero: how to grow your network with purpose. Need help with your profile? Message Ascendra.\n#LinkedInTips #Networking #Ascendra' },
},
{
  day: 10, offer: 1, titleA: 'Your First', titleB: 'LinkedIn Post', subtitle: 'Lesson 10: a simple structure anyone can use',
  why: [['eye', 'Visibility', 'Posting puts you in front of your network'], ['award', 'Expertise', 'Sharing what you know builds credibility'], ['message-circle', 'Conversations', 'Good posts start useful discussions']],
  steps: [['zap', 'Hook', ['A short, bold first line', 'Make people want to click "more"']], ['book-open', 'Story or lesson', ['One idea per post', 'Something you learned or did']], ['list-checks', 'Make it scannable', ['Short lines and white space', 'Lists or emojis help']], ['message-circle', 'Ask a question', ['Invite people to comment', 'Reply to every comment']], ['hash', 'Add 3 to 5 hashtags', ['Relevant to your topic', 'At the end of the post']]],
  do: ['Post 2 or 3 times a week', 'Add an image or document', 'Reply within the first hour'], avoid: ['Waiting for the perfect post', 'Walls of text', 'Putting links in the post body'],
  tip: 'Easy first post: "3 things I learned in my first year as..."',
  script: { hook: ['Scared of writing your first LinkedIn post?', 'Use this simple structure.'], stepsIntro: 'Five parts.', steps: ['Start with a short, bold hook.', 'Share one story or lesson.', 'Keep it scannable, with short lines.', 'End with a question to invite comments.', 'And add three to five relevant hashtags.'], doAvoid: 'Do not wait for the perfect post. Want feedback? Send me a message.', cta: 'Follow Ascendra for lesson eleven tomorrow.' },
  linkedin: `How to write your first LinkedIn post

Lesson 10 of LinkedIn from Zero.

Your first post doesn't need to be perfect. It needs to be useful. Use this structure:

1️⃣ Hook: a short, bold first line
2️⃣ One story or lesson
3️⃣ Short lines and white space
4️⃣ A question to invite comments
5️⃣ 3 to 5 relevant hashtags

Easy idea to start with:
"3 things I learned in my first year as..."

Reply to every comment in the first hour. It helps your post reach more people.

Write yours this week and tag me, I'll read it 👇

Want a second pair of eyes on your profile? Send me a message.

#LinkedInTips #ContentCreation #PersonalBranding #CareerGrowth #Ascendra`,
  instagram: `Lesson 10 of 14: how to write your first LinkedIn post ✍️

Hook, one lesson, short lines, a question, hashtags.

📌 Save this
💬 Want feedback? DM me
➡️ Follow for lesson 11 tomorrow

#LinkedInTips #ContentCreation #PersonalBranding #Ascendra`,
  youtube: { title: 'Write Your First LinkedIn Post (Lesson 10) #shorts', description: 'Lesson 10 of LinkedIn from Zero: a five-part structure for your first post. Want feedback? Message Ascendra.\n#LinkedInTips #Ascendra' },
},
{
  day: 11, offer: 1, titleA: 'Comment Your', titleB: 'Way to Visibility', subtitle: 'Lesson 11: the fastest way to grow without posting',
  why: [['eye', 'Seen by new people', 'Your comments appear to the poster\'s audience'], ['handshake', 'Builds relationships', 'People remember those who add value'], ['clock', 'Low effort', '15 minutes a day is enough']],
  steps: [['search', 'Find 5 to 10 voices', ['People in your target industry', 'Turn on their notifications']], ['clock', 'Comment early', ['In the first hour after they post', 'Early comments get seen more']], ['lightbulb', 'Add something useful', ['A tip, example or question', 'More than "Great post"']], ['message-circle', 'Keep the chat going', ['Reply to replies', 'Turn comments into connections']], ['repeat', 'Make it a habit', ['15 minutes every day', 'Same time, same routine']]],
  do: ['Write 2 or 3 thoughtful lines', 'Be kind, even when you disagree', 'Connect after a good exchange'], avoid: ['"Great post!" on its own', 'Self-promotion in comments', 'Arguing with strangers'],
  tip: 'Pro tip: comment before you post. It warms up your audience.',
  script: { hook: ['You do not need to post every day to grow on LinkedIn.', 'Start with comments.'], stepsIntro: 'Here is the method.', steps: ['Find five to ten people in your industry.', 'Comment early, in the first hour after they post.', 'Add something useful, more than great post.', 'Keep the conversation going and reply to replies.', 'And make it a daily fifteen minute habit.'], doAvoid: 'Avoid self-promotion in comments. Need help? Send me a message.', cta: 'Follow Ascendra for lesson twelve tomorrow.' },
  linkedin: `Comment your way to visibility

Lesson 11 of LinkedIn from Zero.

You don't need to post every day to grow. Thoughtful comments put you in front of new people every day.

1️⃣ Pick 5 to 10 voices in your industry
2️⃣ Comment early, in the first hour
3️⃣ Add a tip, example or question, not just "Great post"
4️⃣ Reply to replies and connect after a good chat
5️⃣ Do it for 15 minutes a day

Try it today. Leave one useful comment on a post in your field and tell me how it went 👇

Want a second pair of eyes on your profile? Send me a message.

#LinkedInTips #Networking #PersonalBranding #CareerGrowth #Ascendra`,
  instagram: `Lesson 11 of 14: grow on LinkedIn through comments 💬

15 minutes a day, add real value, comment early.

📌 Save this
💬 Need help with LinkedIn? DM me
➡️ Follow for lesson 12 tomorrow

#LinkedInTips #Networking #CareerGrowth #Ascendra`,
  youtube: { title: 'Grow on LinkedIn With Comments (Lesson 11) #shorts', description: 'Lesson 11 of LinkedIn from Zero: how commenting builds visibility without posting every day. Need help? Message Ascendra.\n#LinkedInTips #Ascendra' },
},
{
  day: 12, offer: 2, titleA: 'Find Jobs With', titleB: 'LinkedIn\'s Tools', subtitle: 'Lesson 12: job search features most people under-use',
  why: [['bell', 'Be first', 'Job alerts tell you about new roles quickly'], ['eye', 'Get approached', 'Recruiters can see you are open to work'], ['target', 'Focus', 'Filters cut out roles that do not fit']],
  steps: [['badge-check', 'Turn on Open to Work', ['Choose roles and locations', 'Recruiters only, or everyone']], ['filter', 'Use search filters', ['Location, date posted, experience', 'Remote, hybrid or on-site']], ['bell', 'Set job alerts', ['Save searches for your target roles', 'Get notified daily']], ['building-2', 'Follow target companies', ['See their news and openings', 'Engage with their posts']], ['send', 'Message the hiring team', ['A short note after applying', 'Mention one reason you fit']]],
  do: ['Apply within a few days of posting', 'Tailor your CV for each role', 'Follow up politely'], avoid: ['Only using Easy Apply', 'Applying to everything', 'Generic messages to recruiters'],
  tip: 'Need help with your CV or profile? 1-to-1 sessions, £20 per hour.',
  script: { hook: ['LinkedIn is not just a profile.', 'It is one of the best job search tools you have.'], stepsIntro: 'Use these features.', steps: ['Turn on Open to Work, so recruiters can find you.', 'Use filters for location, date posted and experience.', 'Set job alerts for your target roles.', 'Follow the companies you want to work for.', 'And send the hiring team a short note after you apply.'], doAvoid: 'Need help with your CV or LinkedIn? I offer one to one sessions for twenty pounds an hour.', cta: 'Send me a message, and follow Ascendra for lesson thirteen.' },
  linkedin: `Find jobs with LinkedIn's own tools

Lesson 12 of LinkedIn from Zero.

Most people only scroll the jobs tab. Use the features that do the work for you:

1️⃣ Open to Work: tell recruiters what you're looking for
2️⃣ Filters: location, date posted, experience, remote or hybrid
3️⃣ Job alerts: get new roles sent to you
4️⃣ Follow your target companies
5️⃣ Message the hiring team with a short note after applying

Tailor your CV for each role, and don't rely only on Easy Apply.

📩 Want help? I offer 1-to-1 LinkedIn profile and CV sessions for £20 per hour. Message me or email hello@ascendra-academy.co.uk

#LinkedInTips #JobSearch #JobSearchTips #CareerAdvice #Ascendra`,
  instagram: `Lesson 12 of 14: LinkedIn job search tools most people ignore 🎯

Open to Work, filters, alerts, company follows, messaging the hiring team.

💼 1-to-1 LinkedIn and CV help: £20/hour. DM me to book
➡️ Follow for lesson 13 tomorrow

#LinkedInTips #JobSearchTips #CareerAdvice #Ascendra`,
  youtube: { title: 'LinkedIn Job Search Tools (Lesson 12) #shorts', description: 'Lesson 12 of LinkedIn from Zero: Open to Work, filters, job alerts and more. 1-to-1 LinkedIn and CV help for £20 per hour: hello@ascendra-academy.co.uk\n#LinkedInTips #JobSearch #Ascendra' },
},
{
  day: 13, offer: 2, titleA: 'Match Your CV', titleB: 'and LinkedIn', subtitle: 'Lesson 13: two documents, one consistent story',
  why: [['shield-check', 'Trust', 'Recruiters compare your CV with your profile'], ['file-check', 'No red flags', 'Different dates or titles raise questions'], ['target', 'Stronger match', 'The same keywords help both pass filters']],
  steps: [['calendar', 'Same titles and dates', ['Check every role matches', 'Explain gaps the same way']], ['hash', 'Same keywords', ['Use words from your target jobs', 'In both CV and profile']], ['file-text', 'CV is short, profile is fuller', ['CV: 2 pages, tailored', 'Profile: more context and media']], ['link', 'Link them together', ['Add your LinkedIn URL to your CV', 'Add your CV to Featured if you like']], ['repeat', 'Update both together', ['New role or skill? Update both', 'Review every few months']]],
  do: ['Tailor your CV for each job', 'Keep your profile broad but focused', 'Ask someone to check both'], avoid: ['Conflicting dates or titles', 'A CV longer than 2 pages', 'An outdated LinkedIn profile'],
  tip: 'Want a review of both? 1-to-1 LinkedIn and CV help, £20 per hour.',
  script: { hook: ['Recruiters read your CV, then check your LinkedIn.', 'If they do not match, that is a red flag.'], stepsIntro: 'Here is how to align them.', steps: ['Use the same job titles and dates in both.', 'Use the same keywords from your target jobs.', 'Keep your CV short and tailored, and your profile fuller.', 'Put your LinkedIn link on your CV.', 'And update both whenever something changes.'], doAvoid: 'Want me to review both? One to one sessions are twenty pounds an hour.', cta: 'Send me a message to book, and follow Ascendra for the final lesson.' },
  linkedin: `Your CV and LinkedIn should tell the same story

Lesson 13 of LinkedIn from Zero.

Recruiters often read your CV, then check your LinkedIn. If the details don't match, it raises questions.

1️⃣ Same job titles and dates in both
2️⃣ Same keywords from the jobs you want
3️⃣ CV: up to 2 pages and tailored. Profile: fuller, with media
4️⃣ Put your LinkedIn URL on your CV
5️⃣ Update both together

📩 I offer 1-to-1 sessions to review and improve your CV and LinkedIn profile together: £20 per hour. Message me or email hello@ascendra-academy.co.uk

When did you last update your CV? 👇

#CVTips #LinkedInTips #JobSearch #CareerAdvice #Ascendra`,
  instagram: `Lesson 13 of 14: make your CV and LinkedIn match 📄

Same titles, same dates, same keywords.

💼 CV + LinkedIn review: £20/hour. DM me to book
➡️ Follow for the final lesson tomorrow

#CVTips #LinkedInTips #JobSearchTips #Ascendra`,
  youtube: { title: 'Match Your CV and LinkedIn (Lesson 13) #shorts', description: 'Lesson 13 of LinkedIn from Zero: align your CV and LinkedIn profile. 1-to-1 CV and LinkedIn help for £20 per hour: hello@ascendra-academy.co.uk\n#CVTips #LinkedInTips #Ascendra' },
},
{
  day: 14, offer: 2, titleA: 'LinkedIn from Zero:', titleB: 'Your Checklist', subtitle: 'Lesson 14: everything from the last two weeks in one place',
  why: [['circle-check', 'Profile ready', 'Photo, headline, About, experience, skills'], ['users', 'Network growing', 'Purposeful connections and daily comments'], ['rocket', 'Visible', 'Posting, engaging and using job tools']],
  steps: [['settings', 'Setup and settings', ['Custom URL, location, privacy', 'Two-step verification on']], ['camera', 'Photo, banner, headline', ['Clear photo, simple banner', 'Role | who you help | result']], ['notebook-pen', 'About, experience, skills', ['Story with proof', 'Results and matching skills']], ['star', 'Proof and network', ['Featured and recommendations', 'Connect with purpose daily']], ['pen-line', 'Post, comment, search', ['2 to 3 posts a week', 'Comment daily, use job alerts']]],
  do: ['Save this checklist', 'Review your profile monthly', 'Keep showing up'], avoid: ['Stopping after two weeks', 'Copying templates word for word', 'Doing it all alone'],
  tip: 'Want it done together? 1-to-1 LinkedIn and CV help, £20 per hour.',
  script: { hook: ['Two weeks ago we started LinkedIn from zero.', 'Here is your full checklist.'], stepsIntro: 'Five areas to tick off.', steps: ['Your setup: custom link, location and privacy.', 'Your photo, banner and headline.', 'Your About section, experience and skills.', 'Proof, with Featured and recommendations, and a growing network.', 'And your habits: post, comment, and use the job tools.'], doAvoid: 'If you would like help, I offer one to one LinkedIn and CV sessions for twenty pounds an hour.', cta: 'Send me a message to book. Thank you for following Ascendra.' },
  linkedin: `LinkedIn from Zero: your full checklist

Lesson 14, the final one. Thank you for following along.

✅ Setup: custom URL, location, privacy, two-step verification
✅ Photo, banner and a clear headline
✅ About section with a hook and proof
✅ Experience written as results
✅ Skills that match your target jobs
✅ Featured and recommendations
✅ A network built with purpose
✅ Posting, commenting and job alerts

Save this and review your profile once a month.

📩 Want to do it together? I offer 1-to-1 LinkedIn profile and CV help for £20 per hour. Message me or email hello@ascendra-academy.co.uk

Which lesson helped you most? 👇

#LinkedInTips #CareerGrowth #JobSearch #CVTips #Ascendra`,
  instagram: `Lesson 14 of 14: your complete LinkedIn checklist ✅

Everything from the series in one place. Save it!

💼 1-to-1 LinkedIn and CV help: £20/hour. DM me to book
➡️ Follow Ascendra for more

#LinkedInTips #CareerGrowth #JobSearchTips #CVTips #Ascendra`,
  youtube: { title: 'Your Complete LinkedIn Checklist (Lesson 14) #shorts', description: 'The final lesson of LinkedIn from Zero: the full checklist. 1-to-1 LinkedIn and CV help for £20 per hour: hello@ascendra-academy.co.uk\n#LinkedInTips #CareerGrowth #Ascendra' },
},
].map(l => Object.assign({ tags: TAGS, offerLine: l.offer === 2 ? FULL : l.offer === 1 ? SOFT : '' }, l));
