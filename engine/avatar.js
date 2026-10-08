// Cartoon avatar of Amir as inline SVG. Mouth (#mouthOpen) and eyes (#eyes) are animatable.
module.exports = function avatar() {
  const SK = '#D7A07C', SK2 = '#BF8763', SK3 = '#A9714F', HAIR = '#36312F', HAIR2 = '#5E5853', GREY = '#A39C96', BROW = '#26201E';
  const SHIRT = '#6487C8', SHIRT2 = '#4F70AE', SHIRT3 = '#7C9DD8';
  const eye = (cx, flip) => `
    <g>
      <path d="M${cx - 27} 287 C${cx - 14} 272, ${cx + 14} 272, ${cx + 27} 287 C${cx + 14} 296, ${cx - 14} 296, ${cx - 27} 287 Z" fill="#FBF7F2"/>
      <circle cx="${cx + (flip ? -1 : 1)}" cy="286" r="10.5" fill="#4B2F20"/>
      <circle cx="${cx + (flip ? -1 : 1)}" cy="286" r="5" fill="#140C08"/>
      <circle cx="${cx + 3}" cy="282" r="3" fill="#fff"/>
      <path d="M${cx - 29} 288 C${cx - 15} 270, ${cx + 15} 270, ${cx + 29} 288" fill="none" stroke="${BROW}" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M${cx - 22} 300 C${cx - 10} 306, ${cx + 10} 306, ${cx + 22} 300" fill="none" stroke="${SK3}" stroke-width="2.5" stroke-linecap="round" opacity=".55"/>
    </g>`;
  return `
<svg viewBox="0 0 600 640" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <defs>
    <linearGradient id="skin" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${SK2}"/><stop offset=".3" stop-color="${SK}"/><stop offset=".7" stop-color="${SK}"/><stop offset="1" stop-color="${SK2}"/>
    </linearGradient>
    <linearGradient id="shirt" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${SHIRT3}"/><stop offset="1" stop-color="${SHIRT2}"/></linearGradient>
    <pattern id="stub" width="7" height="7" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r=".9" fill="#3A302C" opacity=".35"/><circle cx="5.5" cy="5" r=".8" fill="#6E6460" opacity=".35"/>
    </pattern>
    <clipPath id="faceclip"><path id="facepath" d="M178 256 C176 186, 228 152, 300 150 C372 152, 424 186, 422 256 L421 330 C419 412, 376 464, 300 478 C224 464, 181 412, 179 330 Z"/></clipPath>
  </defs>
  <!-- shirt -->
  <path d="M30 640 C42 560, 118 516, 226 498 L300 528 L374 498 C482 516, 558 560, 570 640 Z" fill="url(#shirt)"/>
  <path d="M232 503 C196 556, 156 604, 126 640" fill="none" stroke="${SHIRT2}" stroke-width="5" stroke-linecap="round"/>
  <path d="M368 503 C404 556, 444 604, 474 640" fill="none" stroke="${SHIRT2}" stroke-width="5" stroke-linecap="round"/>
  <!-- neck -->
  <path d="M240 430 L236 500 C262 538, 338 538, 364 500 L360 430 Z" fill="${SK2}"/>
  <path d="M246 470 C270 492, 330 492, 354 470 L354 505 C330 530, 270 530, 246 505 Z" fill="${SK3}" opacity=".45"/>
  <path d="M248 456 C262 500, 338 500, 352 456 L352 470 C330 500, 270 500, 248 470Z" fill="url(#stub)" opacity=".7"/>
  <!-- collar -->
  <path d="M218 494 C240 556, 360 556, 382 494 L372 492 C352 540, 248 540, 228 492 Z" fill="${SHIRT2}"/>
  <path d="M226 498 C248 546, 352 546, 374 498" fill="none" stroke="${SHIRT3}" stroke-width="2.5" opacity=".7"/>
  <!-- ears -->
  <ellipse cx="178" cy="305" rx="22" ry="38" fill="${SK2}"/><ellipse cx="181" cy="305" rx="11" ry="22" fill="${SK3}" opacity=".5"/>
  <ellipse cx="422" cy="305" rx="22" ry="38" fill="${SK2}"/><ellipse cx="419" cy="305" rx="11" ry="22" fill="${SK3}" opacity=".5"/>
  <!-- face -->
  <use href="#facepath" fill="url(#skin)"/>
  <g clip-path="url(#faceclip)">
    <!-- stubble beard & moustache -->
    <path d="M178 340 C190 432, 248 482, 300 482 C352 482, 410 432, 422 340 C402 396, 366 420, 334 424 C322 408, 278 408, 266 424 C234 420, 198 396, 178 340 Z" fill="#55474A" opacity=".34"/>
    <path d="M178 340 C190 432, 248 482, 300 482 C352 482, 410 432, 422 340 C402 396, 366 420, 334 424 C322 408, 278 408, 266 424 C234 420, 198 396, 178 340 Z" fill="url(#stub)"/>
    <path d="M262 392 C280 378, 320 378, 338 392 C326 386, 274 386, 262 392 Z" fill="#5A4A42" opacity=".35"/>
    <path d="M256 395 C275 374, 325 374, 344 395 L336 398 C320 384, 280 384, 264 398 Z" fill="url(#stub)"/>
    <!-- cheek shading -->
    <ellipse cx="225" cy="350" rx="30" ry="18" fill="#D98A70" opacity=".22"/><ellipse cx="375" cy="350" rx="30" ry="18" fill="#D98A70" opacity=".22"/>
    <path d="M196 230 C230 210, 370 210, 404 230 L404 200 L196 200Z" fill="${SK2}" opacity=".35"/>
  </g>
  <!-- grey temples -->
  <path d="M178 286 C172 252, 180 226, 196 210 L204 266 Z" fill="${GREY}" opacity=".85"/>
  <path d="M422 286 C428 252, 420 226, 404 210 L396 266 Z" fill="${GREY}" opacity=".85"/>
  <!-- hair -->
  <path d="M176 272 C160 200, 176 140, 222 116 C256 98, 300 94, 338 100 C392 108, 436 146, 434 204 C436 236, 430 258, 424 274 C418 238, 404 214, 384 206 C360 196, 330 214, 300 200 C272 214, 238 196, 214 210 C196 222, 186 244, 182 272 Z" fill="${HAIR}"/>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M196 150 C186 126, 204 108, 226 116" stroke="${HAIR}" stroke-width="18"/>
    <path d="M232 118 C230 92, 262 84, 274 104" stroke="${HAIR}" stroke-width="18"/>
    <path d="M284 102 C292 78, 326 80, 328 102" stroke="${HAIR}" stroke-width="18"/>
    <path d="M338 106 C354 86, 388 98, 384 122" stroke="${HAIR}" stroke-width="18"/>
    <path d="M392 134 C414 128, 428 150, 418 172" stroke="${HAIR}" stroke-width="16"/>
    <path d="M300 86 C306 70, 322 70, 326 82" stroke="${HAIR}" stroke-width="7"/>
    <path d="M250 96 C252 80, 266 76, 272 86" stroke="${HAIR}" stroke-width="6"/>
    <path d="M214 200 C232 176, 262 168, 290 176" stroke="${HAIR2}" stroke-width="7"/>
    <path d="M300 178 C330 164, 366 172, 388 196" stroke="${HAIR2}" stroke-width="7"/>
    <path d="M220 150 C250 128, 292 124, 322 136" stroke="${HAIR2}" stroke-width="6"/>
    <path d="M330 132 C360 130, 390 146, 402 170" stroke="${HAIR2}" stroke-width="6"/>
    <path d="M202 214 C214 186, 240 170, 268 166" stroke="${GREY}" stroke-width="3.5"/>
    <path d="M318 164 C350 160, 380 178, 398 210" stroke="${GREY}" stroke-width="3.5"/>
    <path d="M244 128 C264 114, 292 112, 312 118" stroke="${GREY}" stroke-width="3"/>
    <path d="M342 116 C366 116, 386 128, 396 146" stroke="${GREY}" stroke-width="3"/>
    <path d="M206 138 C214 126, 226 122, 236 124" stroke="${GREY}" stroke-width="2.5" opacity=".8"/>
    <path d="M268 190 C276 184, 290 182, 298 186" stroke="${GREY}" stroke-width="2.5" opacity=".8"/>
  </g>
  <!-- eyebrows -->
  <path d="M222 254 C242 238, 270 238, 288 248 L286 260 C268 252, 246 254, 226 266 Z" fill="${BROW}"/>
  <path d="M378 254 C358 238, 330 238, 312 248 L314 260 C332 252, 354 254, 374 266 Z" fill="${BROW}"/>
  <!-- eyes -->
  <g id="eyes" style="transform-origin:300px 287px">${eye(256, false)}${eye(344, true)}</g>
  <!-- nose -->
  <path d="M300 292 C301 318, 306 336, 316 350" fill="none" stroke="${SK3}" stroke-width="3" stroke-linecap="round" opacity=".7"/>
  <path d="M278 352 C284 364, 296 366, 300 362 C304 366, 316 364, 322 352" fill="none" stroke="${SK3}" stroke-width="3.5" stroke-linecap="round"/>
  <ellipse cx="286" cy="356" rx="5" ry="3" fill="#8A5238" opacity=".6"/><ellipse cx="314" cy="356" rx="5" ry="3" fill="#8A5238" opacity=".6"/>
  <ellipse cx="300" cy="338" rx="12" ry="18" fill="#E8B694" opacity=".35"/>
  <!-- mouth -->
  <g id="mouth">
    <g id="mouthOpen" style="transform-origin:300px 404px;transform:scaleY(0)">
      <ellipse cx="300" cy="406" rx="25" ry="15" fill="#5A1F1F"/>
      <path d="M279 399 C290 395, 310 395, 321 399 L319 405 C306 402, 294 402, 281 405 Z" fill="#F4EEE8"/>
      <ellipse cx="300" cy="415" rx="13" ry="5" fill="#C0585A"/>
    </g>
    <path d="M262 402 C280 390, 296 394, 300 396 C304 394, 320 390, 338 402 C318 407, 282 407, 262 402 Z" fill="#9A5A50"/>
    <path id="lowlip" d="M266 404 C282 422, 318 422, 334 404 C316 409, 284 409, 266 404 Z" fill="#B46E62"/>
  </g>
</svg>`;
};
