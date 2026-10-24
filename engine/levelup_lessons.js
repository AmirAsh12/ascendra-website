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
];
