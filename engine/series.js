// Picks the series to render. Default: LinkedIn from Zero (navy and gold).
// SERIES=levelup: LinkedIn Level Up (navy and gold, follows LinkedIn from Zero), media goes to media/levelup<N>/.
// SERIES=claude: Claude for Work (warm dark and Claude orange), media goes to media/claude<N>/.
const claude = process.env.SERIES === 'claude';
const SWAP = [
  // golds and accents -> Claude orange family
  ['#D4AF37', '#D97757'], ['#F5D88A', '#F4B393'], ['#B8862B', '#B4532F'], ['#E9C46A', '#EE9D7E'],
  ['#FFF1C1', '#FCE3D6'], ['#C9962E', '#C2613C'], ['#7A5A1C', '#7A3420'], ['#F2B544', '#D97757'],
  ['#D99A1F', '#C2613C'], ['#F5C860', '#F0A988'], ['#C98A12', '#C2613C'], ['#FFF6E2', '#FCEDE5'],
  ['rgba(212,175,55', 'rgba(217,119,87'], ['rgba(242,181,68', 'rgba(217,119,87'], ['rgba(245,216,138', 'rgba(244,179,147'],
  // navy backgrounds -> warm near-black
  ['#1E4F8A', '#5B3021'], ['#12325E', '#3A2118'], ['#0A1A33', '#1F1511'], ['#06102A', '#140D0A'], ['#06122A', '#140D0A'],
  ['#1A4A80', '#4A281C'], ['#2A6DAE', '#8A4A33'], ['#2D6AB0', '#8A4A33'], ['#123A6E', '#3A2118'],
  ['rgba(10,26,51', 'rgba(31,21,17'], ['rgba(6,16,40', 'rgba(20,13,10'], ['rgba(6,16,38', 'rgba(20,13,10'],
  ['#22A06B', '#D97757'], ['#0B6E5F', '#3A2A22'], ['#E3F5EE', '#FBE6DC'], ['#EEF4FA', '#F6EEE8'], ['#D5DEEA', '#EADDD3'],
  ['#0B1F3A', '#2A1C16'], ['#F4F7FB', '#FAF6F1'], ['#C9D7EA', '#F1D9CC'], ['#9FB3CC', '#D9B9A8'],
];
module.exports = process.env.SERIES === 'levelup' ? {
  key: 'levelup', name: 'LinkedIn Level Up', total: 8, lessons: require('./levelup_lessons.js'),
  label: d => `LinkedIn Level Up · Lesson ${d}`, next: d => 'Next: another LinkedIn lesson',
  recolor: html => html, vals: ['VISIBLE', 'CREDIBLE', 'FOUND'], mark: 'mountain',
} : claude ? {
  key: 'claude', name: 'Claude for Work', total: 7, lessons: require('./claude_lessons.js'),
  label: d => `Claude for Work · Lesson ${d}`, next: d => 'Next: another Claude lesson',
  recolor: html => SWAP.reduce((h, [a, b]) => h.split(a).join(b), html),
  vals: ['FASTER', 'SMARTER', 'SAFER'], mark: 'sparkles',
} : {
  key: 'linkedin', name: 'LinkedIn from Zero', total: 14, lessons: require('./lessons.js'),
  label: d => `LinkedIn from Zero · Lesson ${d} of 14`, next: d => `Next: Lesson ${d + 1} of 14`,
  recolor: html => html, vals: ['VISIBLE', 'CREDIBLE', 'FOUND'], mark: 'mountain',
};
