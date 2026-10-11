// Amir's avatar photo (assets/avatar.jpg), placed to fill the round #face frame used by video.js and video_long.js.
// The svg viewBox matches the old drawn avatar so the existing #av sizing still lines up.
// #eyes and #mouthOpen are kept as empty groups because the renderers still set their transforms.
const fs = require('fs'), path = require('path');
module.exports = function avatar() {
  const img = fs.readFileSync(path.join(__dirname, 'assets/avatar.jpg')).toString('base64');
  return `
<svg viewBox="0 0 600 640" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <image href="data:image/jpeg;base64,${img}" x="60" y="53" width="480" height="480" preserveAspectRatio="xMidYMid slice"/>
  <g id="eyes"></g><g id="mouthOpen"></g>
</svg>`;
};
