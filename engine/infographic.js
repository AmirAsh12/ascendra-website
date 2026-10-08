// node infographic.js <day> <outDir>  -> <outDir>/post.png (1080x1350)
const fs = require('fs'), path = require('path');
const { icon, esc, launch } = require('./common');
const day = +process.argv[2]; const out = process.argv[3] || path.join(__dirname, 'out', 'day' + day);
const L = require('./lessons.js').find(l => l.day === day);
if (!L) throw new Error('no lesson ' + day);
fs.mkdirSync(out, { recursive: true });

const check = icon('check', 18, '#22A06B', 3.2);
const footerRight = L.offer === 2
  ? `<div class="offer"><b>1-to-1 LinkedIn &amp; CV help</b><span>£20 per hour · message me to book</span></div>`
  : `<div class="brand">${icon('mountain', 34, '#F2B544', 2.4)}<div><div class="nm">ASCENDRA</div><small>${L.offer === 1 ? 'Need help? Send me a message' : 'Follow for the next lesson'}</small></div></div>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;font-family:Inter,sans-serif;background:#F4F7FB;color:#0B1F3A;overflow:hidden;position:relative}
.hero{position:relative;height:290px;background:linear-gradient(180deg,#0A1A33 0%,#12325E 70%,#1A4A80 100%);overflow:hidden}
.hero svg{position:absolute;inset:0}
.chip{position:absolute;top:26px;left:50%;transform:translateX(-50%);background:rgba(242,181,68,.15);border:1.5px solid #F2B544;color:#F2B544;font-weight:800;letter-spacing:3px;font-size:16px;padding:7px 18px;border-radius:30px;white-space:nowrap}
.title{position:absolute;left:30px;right:30px;bottom:26px;text-align:center}
.title h1{font-family:'Inter Display',Inter;font-weight:900;font-size:60px;letter-spacing:.5px;color:#fff;line-height:1.02;text-transform:uppercase}
.title h1 em{font-style:normal;color:#F2B544;display:block}
.title p{margin-top:10px;color:#C9D7EA;font-size:20px;font-weight:500}
.sec{display:flex;align-items:center;justify-content:center;margin:20px 0 12px;position:relative}
.sec:before{content:"";position:absolute;left:40px;right:40px;top:50%;height:2px;background:#0B6E5F;opacity:.35}
.sec span{position:relative;background:#0B1F3A;color:#fff;font-weight:800;font-size:18px;letter-spacing:2px;padding:7px 24px;border-radius:24px;border:3px solid #22A06B}
.why{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;padding:0 30px}
.w{background:#fff;border:1.5px solid #D5DEEA;border-radius:12px;padding:20px 14px;display:flex;gap:12px;align-items:center;box-shadow:0 2px 6px rgba(11,31,58,.06)}
.w .ic{flex:none;width:56px;height:56px;border-radius:50%;background:#E3F5EE;display:flex;align-items:center;justify-content:center}
.w h3{font-size:16.5px;font-weight:800}.w p{font-size:13.5px;color:#4A5A70;margin-top:3px;line-height:1.3}
.steps{display:flex;flex-direction:column;gap:13px;padding:0 30px}
.s{display:flex;align-items:center;gap:16px;background:#fff;border:1.5px solid #D5DEEA;border-left:7px solid #22A06B;border-radius:12px;padding:14px 16px;box-shadow:0 2px 6px rgba(11,31,58,.06)}
.s .n{flex:none;width:44px;height:44px;border-radius:50%;background:#0B1F3A;color:#F2B544;font-weight:900;font-size:21px;display:flex;align-items:center;justify-content:center}
.s .ic{flex:none;width:48px;height:48px;border-radius:12px;background:#EEF4FA;display:flex;align-items:center;justify-content:center}
.s h4{font-size:19px;font-weight:800}
.s ul{list-style:none;display:flex;gap:18px;margin-top:3px}
.s li{font-size:14px;color:#33445C;padding-left:13px;position:relative}
.s li:before{content:"";position:absolute;left:0;top:7px;width:6px;height:6px;border-radius:50%;background:#22A06B}
.da{display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 30px}
.col{background:#fff;border:1.5px solid #D5DEEA;border-radius:12px;overflow:hidden}
.col .hd{padding:8px 14px;color:#fff;font-weight:800;letter-spacing:2px;font-size:15px;display:flex;align-items:center;gap:8px}
.col.do .hd{background:#0B6E5F}.col.av .hd{background:#B8433C}
.col ul{list-style:none;padding:10px 14px}
.col li{font-size:15px;color:#22324A;padding:6px 0 6px 26px;position:relative}
.col li svg{position:absolute;left:0;top:7px}
.tip{margin:14px 30px 0;background:#FFF6E2;border:1.5px solid #F2B544;border-radius:12px;padding:12px 16px;display:flex;gap:12px;align-items:center;font-size:16px;font-weight:600;color:#5A4310}
.foot{position:absolute;left:0;right:0;bottom:0;height:70px;background:#0B1F3A;display:flex;align-items:center;justify-content:space-between;padding:0 34px}
.vals{display:flex;gap:16px;color:#fff;font-weight:800;font-size:14px;letter-spacing:1px}
.vals span{display:flex;align-items:center;gap:5px}
.brand{display:flex;align-items:center;gap:10px;color:#fff}
.brand .nm{font-family:'Inter Display',Inter;font-weight:900;font-size:24px;letter-spacing:3px}
.brand small{display:block;font-size:11.5px;color:#9FB3CC;font-weight:600}
.offer{background:linear-gradient(100deg,#D99A1F,#F5C860);color:#14110B;border-radius:12px;padding:8px 18px;text-align:right}
.offer b{display:block;font-size:17px}.offer span{font-size:13px;font-weight:700}
</style></head><body>
<div class="hero">
<svg width="1080" height="290" viewBox="0 0 1080 290">
  <g fill="#fff" opacity=".45">${Array.from({ length: 50 }, (_, i) => `<circle cx="${(i * 173 + day * 37) % 1080}" cy="${(i * 97) % 140 + 8}" r="${i % 3 ? 1 : 1.6}"/>`).join('')}</g>
  <path d="M0 220 L120 150 L210 195 L330 110 L430 185 L540 80 L650 175 L760 120 L880 195 L980 140 L1080 185 L1080 290 L0 290Z" fill="#2A6DAE" opacity=".35"/>
  <path d="M0 250 L150 195 L260 228 L400 168 L540 128 L690 186 L820 158 L960 210 L1080 186 L1080 290 L0 290Z" fill="#1A4A80" opacity=".8"/>
  ${Array.from({ length: 14 }, (_, i) => `<rect x="${360 + i * 26}" y="76" width="18" height="6" rx="3" fill="${i < day ? '#F2B544' : 'rgba(255,255,255,.22)'}"/>`).join('')}
</svg>
<div class="chip">LINKEDIN FROM ZERO · LESSON ${day} OF 14</div>
<div class="title"><h1>${esc(L.titleA)}<em>${esc(L.titleB)}</em></h1><p>${esc(L.subtitle)}</p></div>
</div>
<div class="sec"><span>WHY IT MATTERS</span></div>
<div class="why">${L.why.map(([ic, t, p]) => `<div class="w"><div class="ic">${icon(ic, 28, '#0B6E5F', 2.2)}</div><div><h3>${esc(t)}</h3><p>${esc(p)}</p></div></div>`).join('')}</div>
<div class="sec"><span>STEP BY STEP</span></div>
<div class="steps">${L.steps.map(([ic, t, b], i) => `<div class="s"><div class="n">${i + 1}</div><div class="ic">${icon(ic, 26, '#0B1F3A', 2)}</div><div><h4>${esc(t)}</h4><ul>${b.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></div>`).join('')}</div>
<div class="sec"><span>DO &amp; AVOID</span></div>
<div class="da">
  <div class="col do"><div class="hd">${icon('thumbs-up', 18, '#fff', 2.4)}DO</div><ul>${L.do.map(x => `<li>${icon('circle-check', 18, '#22A06B', 2.4)}${esc(x)}</li>`).join('')}</ul></div>
  <div class="col av"><div class="hd">${icon('ban', 18, '#fff', 2.4)}AVOID</div><ul>${L.avoid.map(x => `<li>${icon('circle-x', 18, '#C9302C', 2.4)}${esc(x)}</li>`).join('')}</ul></div>
</div>
<div class="tip">${icon('lightbulb', 26, '#C98A12', 2.2)}<span>${esc(L.tip)}</span></div>
<div class="foot"><div class="vals"><span>${check}VISIBLE</span><span>${check}CREDIBLE</span><span>${check}FOUND</span></div>${footerRight}</div>
</body></html>`;

(async () => {
  const b = await launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.setContent(html, { waitUntil: 'load' }); await p.waitForTimeout(200);
  const m = await p.evaluate(() => ({ tipBottom: document.querySelector('.tip').getBoundingClientRect().bottom, footTop: document.querySelector('.foot').getBoundingClientRect().top,
    overflow: [...document.querySelectorAll('.s ul,.w p,.title h1')].some(e => e.scrollWidth > e.clientWidth + 1) }));
  await p.screenshot({ path: path.join(out, 'post.png') }); await b.close();
  const ok = m.tipBottom <= m.footTop - 4 && !m.overflow;
  console.log(JSON.stringify({ day, ok, ...m }));
  if (!ok) process.exitCode = 2;
})();
