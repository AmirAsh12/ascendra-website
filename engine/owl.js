// Ollie, the Ascendra owl: an original cartoon character for the weekly reels.
// Same contract as avatar.js: #eyes (blinks via scaleY) and #mouthOpen (talks via scaleY).
module.exports = function owl() {
  return `
<svg viewBox="0 0 600 640" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <defs>
    <radialGradient id="ob" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#4C86C9"/><stop offset="1" stop-color="#1F4C86"/></radialGradient>
    <radialGradient id="ol" cx="50%" cy="40%" r="65%"><stop offset="0" stop-color="#FFF6E4"/><stop offset="1" stop-color="#EBD9B8"/></radialGradient>
    <linearGradient id="og" x1="0" x2="1"><stop offset="0" stop-color="#B8862B"/><stop offset=".5" stop-color="#F5D88A"/><stop offset="1" stop-color="#C9962E"/></linearGradient>
    <linearGradient id="os" x1="0" x2="1"><stop offset="0" stop-color="#E8892F"/><stop offset="1" stop-color="#F2B544"/></linearGradient>
  </defs>
  <!-- ear tufts -->
  <path d="M150 170 L120 60 L230 130 Z" fill="#1F4C86"/>
  <path d="M450 170 L480 60 L370 130 Z" fill="#1F4C86"/>
  <!-- body -->
  <ellipse cx="300" cy="380" rx="230" ry="250" fill="url(#ob)"/>
  <!-- wings -->
  <path d="M85 360 C40 430 60 540 130 580 C120 500 120 430 140 380 Z" fill="#183F73"/>
  <path d="M515 360 C560 430 540 540 470 580 C480 500 480 430 460 380 Z" fill="#183F73"/>
  <!-- belly -->
  <ellipse cx="300" cy="470" rx="140" ry="140" fill="url(#ol)"/>
  <path d="M245 440 q15 14 30 0 M300 440 q15 14 30 0 M270 490 q15 14 30 0 M325 490 q15 14 30 0" stroke="#D9BF93" stroke-width="6" fill="none" stroke-linecap="round"/>
  <!-- scarf -->
  <path d="M150 330 Q300 400 450 330 L455 365 Q300 440 145 365 Z" fill="url(#os)"/>
  <path d="M390 370 L430 470 L395 465 L370 380 Z" fill="#E8892F"/>
  <!-- eye discs -->
  <circle cx="215" cy="240" r="98" fill="url(#ol)" stroke="url(#og)" stroke-width="10"/>
  <circle cx="385" cy="240" r="98" fill="url(#ol)" stroke="url(#og)" stroke-width="10"/>
  <g id="eyes" style="transform-box:fill-box;transform-origin:center">
    <circle cx="225" cy="248" r="48" fill="#0A1A33"/><circle cx="375" cy="248" r="48" fill="#0A1A33"/>
    <circle cx="240" cy="230" r="16" fill="#fff"/><circle cx="390" cy="230" r="16" fill="#fff"/>
    <circle cx="212" cy="265" r="7" fill="#fff" opacity=".7"/><circle cx="362" cy="265" r="7" fill="#fff" opacity=".7"/>
  </g>
  <!-- brows -->
  <path d="M140 140 Q215 105 280 150" stroke="#123A6E" stroke-width="14" fill="none" stroke-linecap="round"/>
  <path d="M460 140 Q385 105 320 150" stroke="#123A6E" stroke-width="14" fill="none" stroke-linecap="round"/>
  <!-- beak: open part sits behind the top beak and stretches when talking -->
  <g id="mouthOpen" style="transform-box:fill-box;transform-origin:50% 0%">
    <path d="M272 318 L328 318 L300 368 Z" fill="#7A2E12"/>
  </g>
  <path d="M265 290 Q300 278 335 290 L300 340 Z" fill="url(#os)" stroke="#C86A1E" stroke-width="4" stroke-linejoin="round"/>
  <!-- cheeks -->
  <ellipse cx="150" cy="320" rx="26" ry="14" fill="#F29A90" opacity=".55"/>
  <ellipse cx="450" cy="320" rx="26" ry="14" fill="#F29A90" opacity=".55"/>
  <!-- gold mountain badge -->
  <circle cx="300" cy="560" r="34" fill="#0A1A33" stroke="url(#og)" stroke-width="6"/>
  <path d="M280 575 L295 545 L303 560 L310 550 L322 575 Z" fill="none" stroke="url(#og)" stroke-width="5" stroke-linejoin="round"/>
</svg>`;
};
