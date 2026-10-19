// Weekly Instagram intro + recap reels, hosted by Ollie the Ascendra owl (a fictional character).
// One entry per week. Render with: bash render_weekly.sh <week>
module.exports = [
  {
    week: 1,
    publishDate: '2026-10-25',
    title: ['New here?', 'Start with this'],
    about: 'Ascendra teaches LinkedIn and AI skills, one simple step at a time.',
    recap: [
      ['message-circle', 'Comment your way to visibility', 'Grow without posting every day'],
      ['search', "Use LinkedIn's job tools", 'Open to Work, filters, alerts'],
      ['file-text', 'Match your CV and LinkedIn', 'Same titles, dates, keywords'],
      ['list-checks', 'Your complete checklist', 'All 14 lessons in one place'],
    ],
    script: {
      hook: "Hi, I'm Ollie from Ascendra! Here's your week.",
      recap: [
        'Comment to get seen.',
        "Use LinkedIn's job tools.",
        'Match your CV and profile.',
        'Follow your checklist.',
      ],
      cta: 'Follow for more!',
    },
    igCaption: "New here? Meet Ollie 🦉 and catch up on this week's lessons\n\n💬 Comment your way to visibility\n🔍 LinkedIn's job search tools\n📄 Match your CV and LinkedIn\n✅ Your complete LinkedIn checklist\n\n📌 Save this to catch up later\n➡️ Follow Ascendra for a new lesson every day\n\n#LinkedInTips #CareerGrowth #JobSearchTips #PersonalBranding #Ascendra",
  },
];
