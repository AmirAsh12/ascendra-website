// node notebook.js <posts.json> <outDir>  -> <outDir>/<id>.png  (1080x1350 notebook-style infographic)
// Amir's personal job-search posts. Never name his employer; his title on posts is "Project Manager".
const fs = require('fs'), path = require('path');
const { esc, launch } = require('./common');
const posts = JSON.parse(fs.readFileSync(process.argv[2]));
const OUT = path.resolve(process.argv[3]); fs.mkdirSync(OUT, { recursive: true });
const F = 'file:///tmp/claude-0/-home-claude/7619bf29-e2da-53c5-954e-6f851069ae70/scratchpad/fonts/';
const FONTS = process.env.NB_FONTS || F;

const page = p => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Cav;src:url(${FONTS}fontsource-caveat-5.3.0/files/caveat-latin-700-normal.woff2);font-weight:700}
@font-face{font-family:Pat;src:url(${FONTS}fontsource-patrick-hand-5.3.0/files/patrick-hand-latin-400-normal.woff2)}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;background:#E9E2D3;font-family:Pat,sans-serif;color:#1F2A3A;overflow:hidden}
.paper{position:absolute;left:46px;top:40px;right:40px;bottom:40px;border-radius:14px;background:#FFFDF6;
 box-shadow:0 14px 40px rgba(60,45,20,.22),0 2px 0 rgba(0,0,0,.04);
 background-image:repeating-linear-gradient(#FFFDF6 0 55px,#CFE0F2 55px 57px);background-position:0 120px;overflow:hidden}
.margin{position:absolute;left:128px;top:0;bottom:0;width:3px;background:#F2A7A7}
.holes{position:absolute;left:34px;top:70px;bottom:70px;display:flex;flex-direction:column;justify-content:space-between}
.holes i{width:34px;height:34px;border-radius:50%;background:#E9E2D3;box-shadow:inset 0 3px 5px rgba(0,0,0,.18)}
.tag{position:absolute;right:60px;top:44px;font-family:Pat;font-size:28px;color:#6B7A90;transform:rotate(2deg)}
.tag b{background:#1F2A3A;color:#FFFDF6;padding:4px 14px;border-radius:6px;font-weight:400;letter-spacing:1px}
.body{position:absolute;left:170px;right:60px;top:112px}
h1{font-family:Cav;font-weight:700;font-size:88px;line-height:1.0;color:#1F2A3A}
h1 span{background:linear-gradient(transparent 52%,#FFE36E 52%,#FFE36E 92%,transparent 92%);padding:0 6px}
.sub{font-size:32px;color:#4A5A72;margin-top:18px;line-height:1.3}
ol{list-style:none;margin-top:28px}
li{display:flex;gap:22px;align-items:flex-start;margin-bottom:14px}
.n{flex:none;width:58px;height:58px;border-radius:50%;border:3px solid #D9534F;color:#D9534F;font-family:Cav;font-weight:700;font-size:42px;display:flex;align-items:center;justify-content:center;transform:rotate(-6deg)}
.t{font-size:34px;line-height:1.3;padding-top:4px}
.t b{font-weight:400;color:#C0392B}
.take{margin-top:16px;border:3px dashed #2E6DB4;border-radius:16px;padding:20px 26px;background:rgba(46,109,180,.06);transform:rotate(-.6deg)}
.take h3{font-family:Cav;font-weight:700;font-size:44px;color:#2E6DB4}
.take p{font-size:31px;line-height:1.3;margin-top:4px}
.foot{position:absolute;left:170px;right:60px;bottom:52px;display:flex;justify-content:space-between;align-items:flex-end}
.who{font-family:Cav;font-weight:700;font-size:40px;color:#1F2A3A}
.who small{display:block;font-family:Pat;font-weight:400;font-size:26px;color:#6B7A90}
.src{font-size:24px;color:#8A97AA;text-align:right;max-width:430px}
.doodle{position:absolute;right:70px;top:150px;width:120px;opacity:.9}
</style></head><body><div class="paper"><div class="margin"></div><div class="holes">${'<i></i>'.repeat(8)}</div>
<div class="tag"><b>${esc(p.tag)}</b></div>
<div class="body">
 <h1><span>${esc(p.titleA)}</span><br>${esc(p.titleB)}</h1>
 <div class="sub">${esc(p.sub)}</div>
 <ol>${p.points.map((x, i) => `<li><div class="n">${i + 1}</div><div class="t">${x}</div></li>`).join('')}</ol>
 <div class="take"><h3>My take</h3><p>${esc(p.take)}</p></div>
</div>
<div class="foot"><div class="who">Amir Ashtiani<small>Project Manager</small></div><div class="src">Source: ${esc(p.source)}</div></div>
</div></body></html>`;

(async () => {
  const b = await launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const p of posts) {
    const hp = path.join(OUT, p.id + '.html'); fs.writeFileSync(hp, page(p));
    await pg.goto('file://' + hp, { waitUntil: 'load' }); await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(300);
    const over = await pg.evaluate(() => { const r = document.querySelector('.take').getBoundingClientRect(), f = document.querySelector('.foot').getBoundingClientRect(); return r.bottom > f.top - 10; });
    await pg.screenshot({ path: path.join(OUT, p.id + '.png') }); console.log(p.id, over ? 'OVERFLOW' : 'ok');
  }
  await b.close();
})();
