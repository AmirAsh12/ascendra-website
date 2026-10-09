// node video_long.js <day> <outDir> [--preview t1 t2 ...] -> <outDir>/video_silent.mp4 (1920x1080 YouTube version)
const fs = require('fs'), path = require('path');
const { spawn, execFileSync } = require('child_process');
const { icon, esc, launch, FONT } = require('./common');
const day = +process.argv[2]; const OUT = path.resolve(process.argv[3]);
const L = require('./lessons.js').find(l => l.day === day);
const TL = JSON.parse(fs.readFileSync(path.join(OUT, 'timeline.json')));
const FPS = 30, W = 1920, H = 1080, DUR = Math.ceil(TL.duration * 10) / 10;
const PREVIEW = process.argv.includes('--preview');
const AV = require('./avatar.js')();

const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', path.join(OUT, 'voice.wav'), '-f', 's16le', '-ac', '1', '-ar', '24000', '-'], { maxBuffer: 1e9 });
const smp = new Int16Array(raw.buffer, raw.byteOffset, raw.length / 2); const spf = 24000 / FPS, env = [];
for (let f = 0; f < DUR * FPS; f++) { let s = 0, n = 0; for (let i = Math.floor(f * spf); i < Math.min(smp.length, (f + 1) * spf); i++) { s += smp[i] * smp[i]; n++; } env.push(n ? Math.sqrt(s / n) / 32768 : 0); }
const mx = Math.max(...env); const ENV = env.map(v => +Math.min(1, v / (mx * 0.6)).toFixed(3));

const S = Object.fromEntries(TL.scenes.map(s => [s.name, s]));
const win = n => `data-in="${(S[n].start - .3).toFixed(2)}" data-out="${(S[n].end - .2).toFixed(2)}"`;
const at = (a, b = 9999) => `data-in="${a.toFixed(2)}" data-out="${b.toFixed(2)}"`;
const whyT = S.why.lines.map(l => l.start + .05);
const stepStart = [0, 1, 2, 3, 4].map(i => S.steps.lines.find(l => l.step === i).start + .05);
const stepEnd = [0, 1, 2, 3, 4].map(i => { const ls = S.steps.lines.filter(l => l.step === i); return ls[ls.length - 1].end + .3; });
const daT = S.doavoid.lines[0].start;
const cA = S.outro.start - .3;
const capLines = TL.scenes.flatMap(s => s.lines).map(l => { const w = l.text.split(' '); const tot = w.reduce((a, x) => a + x.length + 1, 0); let acc = 0; return { s: l.start, e: l.end, w: w.map(x => { const st = l.start + (l.end - l.start) * acc / tot; acc += x.length + 1; return [x, st]; }) }; });
const dust = Array.from({ length: 70 }, (_, i) => { const r = k => { const x = Math.sin(i * 127.1 + k * 311.7 + day) * 43758.5453; return x - Math.floor(x); }; return { x: r(1) * W, y: r(2) * H, s: 1 + r(3) * 3, v: 6 + r(4) * 16, ph: r(5) * 6.28, a: .25 + r(6) * .55 }; });

const ctaInner = L.offer === 2 ? `
  <div class="kicker anim up" ${at(cA + .2)}>Work with me</div>
  <div class="offer anim pop" ${at(cA + .5)}><div class="ol">1-to-1 LinkedIn<br>&amp; CV Help</div><div class="price gold">£20<small>/hour</small></div></div>
  <div class="pills"><div class="pill f anim up" ${at(cA + 1)}>${icon('send', 30, '#14110B', 2.4)}MESSAGE ME TO BOOK</div></div>
  <div class="mail anim up" ${at(cA + 1.3)}>hello@ascendra-academy.co.uk</div>` : `
  <div class="anim pop" ${at(cA + .2)}>${icon('mountain', 130, '#D4AF37', 1.3)}</div>
  <div class="logo gold shimmer anim up" ${at(cA + .5)}>ASCENDRA</div>
  <div class="kicker anim up" style="margin-top:16px" ${at(cA + .9)}>Next: Lesson ${day + 1} of 14</div>
  <div class="pills"><div class="pill f anim up" ${at(cA + 1.2)}>${icon('bell', 30, '#14110B', 2.4)}SUBSCRIBE</div></div>
  ${L.offer === 1 ? `<div class="mail anim up" ${at(cA + 1.5)}>Need help with your profile? Send me a message</div>` : ''}`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:PF;src:url(${FONT}playfair-display-latin-700-normal.woff2);font-weight:700}
@font-face{font-family:PF;src:url(${FONT}playfair-display-latin-900-normal.woff2);font-weight:900}
@font-face{font-family:PF;src:url(${FONT}playfair-display-latin-700-italic.woff2);font-weight:700;font-style:italic}
*{box-sizing:border-box;margin:0;padding:0}
body{width:${W}px;height:${H}px;overflow:hidden;background:#06122A;font-family:Inter,sans-serif;color:#F4EBDD}
#bg{position:absolute;inset:0;background:radial-gradient(1400px 900px at 62% 40%,#1E4F8A 0%,#12325E 42%,#0A1A33 78%,#06102A 100%)}
#glow{position:absolute;width:1300px;height:1300px;left:300px;top:-300px;border-radius:50%;background:radial-gradient(circle,rgba(242,181,68,.12),rgba(242,181,68,0) 60%)}
#dust{position:absolute;inset:0}
.frame{position:absolute;inset:24px;border:1.5px solid rgba(212,175,55,.42);border-radius:6px}
.corner{position:absolute;width:50px;height:50px;border-color:#D4AF37;border-style:solid;border-width:0}
.c1{left:16px;top:16px;border-left-width:3px;border-top-width:3px}.c2{right:16px;top:16px;border-right-width:3px;border-top-width:3px}
.c3{left:16px;bottom:16px;border-left-width:3px;border-bottom-width:3px}.c4{right:16px;bottom:16px;border-right-width:3px;border-bottom-width:3px}
.gold{background:linear-gradient(100deg,#B8862B 0%,#F5D88A 30%,#D4AF37 50%,#FFF1C1 62%,#C9962E 80%,#E9C46A 100%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}
#top{position:absolute;top:50px;left:70px;right:70px;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:12px;font-family:PF;font-weight:700;font-size:30px;letter-spacing:9px}
.series{font-size:20px;letter-spacing:5px;color:#D4AF37;font-weight:600}
#prog{position:absolute;top:104px;left:70px;right:70px;height:3px;background:rgba(212,175,55,.18);border-radius:2px;overflow:hidden}
#progf{height:100%;width:0;background:linear-gradient(90deg,#B8862B,#F5D88A)}
#left{position:absolute;left:70px;top:150px;width:470px;bottom:60px}
#narr{position:absolute;left:55px;top:20px;width:360px;height:360px}
#ring{position:absolute;inset:-14px;border-radius:50%;background:conic-gradient(from 0deg,#7A5A1C,#F5D88A,#D4AF37,#FFF1C1,#B8862B,#7A5A1C)}
#ringglow{position:absolute;inset:-44px;border-radius:50%;background:radial-gradient(circle,rgba(245,216,138,.55),rgba(245,216,138,0) 65%)}
#face{position:absolute;inset:0;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 50% 35%,#2D6AB0,#123A6E 70%,#0A1A33)}
#av{position:absolute;width:125%;left:-12.5%;top:-11%;height:133.4%}
#tag{position:absolute;left:50%;bottom:-28px;transform:translateX(-50%);white-space:nowrap;padding:8px 24px;border-radius:30px;background:#0A1A33;border:1.5px solid #D4AF37;font-size:19px;letter-spacing:4px;font-weight:700;color:#E9C46A}
#cap{position:absolute;left:0;right:0;top:440px;bottom:0;display:flex;align-items:flex-start}
#capbox{width:100%;padding:26px 30px;border-radius:20px;background:rgba(6,16,38,.82);border:1px solid rgba(212,175,55,.4);font-size:31px;line-height:1.36;font-weight:600;color:rgba(244,235,221,.42);min-height:100px}
#capbox i{font-style:normal}#capbox i.on{color:#FBF4E6}#capbox i.now{color:#F5D88A}
.scene{position:absolute;left:600px;right:80px;top:140px;bottom:60px;display:flex;flex-direction:column;justify-content:center}
.anim{opacity:0}
.kicker{font-size:22px;letter-spacing:7px;color:#D4AF37;text-transform:uppercase;font-weight:600}
h1.big{font-family:PF;font-weight:900;font-size:110px;line-height:1.04;color:#FBF4E6}
h1.big em{font-style:italic;font-weight:700;display:block;margin-top:6px}
h2.t{font-family:PF;font-weight:900;font-size:62px;line-height:1.1;color:#FBF4E6;margin-top:10px}
h2.t em{font-style:italic;font-weight:700}
.rule{height:2px;width:240px;margin:28px 0;background:linear-gradient(90deg,#D4AF37,transparent)}
.dots{display:flex;gap:12px;margin-top:46px}.dots i{width:46px;height:10px;border-radius:5px;background:rgba(255,255,255,.18)}.dots i.on{background:linear-gradient(90deg,#B8862B,#F5D88A)}
.sub{margin-top:34px;font-size:34px;color:#CDBFA8;line-height:1.35;max-width:1100px}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:50px}
.card{padding:36px 30px;border-radius:24px;background:linear-gradient(160deg,rgba(212,175,55,.16),rgba(10,26,51,.45));border:1.5px solid rgba(212,175,55,.5);min-height:430px}
.card .ic{width:96px;height:96px;border-radius:50%;border:1.5px solid rgba(212,175,55,.6);display:flex;align-items:center;justify-content:center;background:rgba(6,16,40,.55);margin-bottom:26px}
.card h4{font-family:PF;font-weight:700;font-size:40px;color:#FBF4E6;line-height:1.15}
.card p{font-size:26px;color:#CDBFA8;margin-top:14px;line-height:1.4}
.llist{margin-top:30px;display:flex;flex-direction:column;gap:20px}
.lrow{display:flex;align-items:center;gap:26px;padding:24px 32px;border-radius:18px;background:linear-gradient(90deg,rgba(212,175,55,.12),rgba(10,26,51,.35));border:1.5px solid rgba(212,175,55,.3);transition:none}
.lrow.cur{border-color:#F5D88A;background:linear-gradient(90deg,rgba(212,175,55,.3),rgba(10,26,51,.45));box-shadow:0 0 40px rgba(245,216,138,.25)}
.num{font-family:PF;font-weight:900;font-size:54px;width:54px;color:#D4AF37;line-height:1;text-align:center}
.lic{width:72px;height:72px;flex:none;border-radius:50%;border:1.5px solid rgba(212,175,55,.6);display:flex;align-items:center;justify-content:center;background:rgba(6,16,40,.55)}
.ltx h4{font-family:PF;font-weight:700;font-size:42px;color:#FBF4E6;line-height:1.1}
.ltx p{font-size:26px;color:#CDBFA8;margin-top:8px}
.da{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:50px}
.box{border-radius:22px;overflow:hidden;border:1.5px solid rgba(212,175,55,.5);background:rgba(6,16,40,.5)}
.box .hd{padding:18px 30px;font-weight:800;letter-spacing:4px;font-size:28px;display:flex;align-items:center;gap:12px}
.box.do .hd{background:rgba(34,160,107,.25);color:#7FE0B5}.box.av .hd{background:rgba(201,72,64,.22);color:#F29A90}
.box ul{list-style:none;padding:16px 30px 24px}
.box li{font-family:PF;font-weight:700;font-size:40px;color:#FBF4E6;padding:14px 0 14px 54px;position:relative;line-height:1.2}
.box li svg{position:absolute;left:0;top:20px}
.tipc{margin-top:40px;padding:70px 70px;border-radius:30px;border:2px solid #D4AF37;background:linear-gradient(160deg,rgba(212,175,55,.22),rgba(10,26,51,.6));box-shadow:0 0 90px rgba(212,175,55,.25);display:flex;gap:40px;align-items:center}
.tipc .t{font-family:PF;font-weight:700;font-size:62px;line-height:1.25;color:#FBF4E6}
.cta{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-bottom:20px}
.cta .logo{font-family:PF;font-weight:900;font-size:120px;letter-spacing:14px;margin-top:24px}
.offer{margin-top:28px;width:980px;padding:46px 50px;border-radius:28px;border:2px solid #D4AF37;background:linear-gradient(160deg,rgba(212,175,55,.22),rgba(10,26,51,.6));display:flex;align-items:center;justify-content:space-between;box-shadow:0 0 90px rgba(212,175,55,.3)}
.offer .ol{font-family:PF;font-weight:900;font-size:64px;line-height:1.1;color:#FBF4E6}
.offer .price{font-family:PF;font-weight:900;font-size:140px;line-height:1}.offer .price small{font-size:42px}
.pills{display:flex;gap:24px;margin-top:44px}
.pill{display:flex;align-items:center;gap:14px;padding:22px 40px;border-radius:60px;border:2px solid #D4AF37;font-size:30px;font-weight:700;letter-spacing:2px;color:#FBF4E6}
.pill.f{background:linear-gradient(100deg,#B8862B,#F5D88A 50%,#D4AF37);color:#14110B;border-color:transparent}
.mail{margin-top:26px;font-size:30px;color:#E9C46A;font-weight:600}
</style></head><body>
<div id="bg"></div><div id="glow"></div><svg id="dust" width="${W}" height="${H}"></svg>
<div class="frame"></div><div class="corner c1"></div><div class="corner c2"></div><div class="corner c3"></div><div class="corner c4"></div>
<div id="top"><div class="brand">${icon('mountain', 36, '#D4AF37', 1.8)}<span class="gold shimmer">ASCENDRA</span></div><div class="series">LINKEDIN FROM ZERO · LESSON ${day} OF 14</div></div>
<div id="prog"><div id="progf"></div></div>
<div id="left"><div id="narr"><div id="ringglow"></div><div id="ring"></div><div id="face"><div id="av">${AV}</div></div><div id="tag">YOUR GUIDE</div></div><div id="cap"><div id="capbox"></div></div></div>

<div class="scene anim" ${win('intro')} data-noshift="1">
  <div class="kicker anim up" ${at(.5)}>Lesson ${day} of 14</div>
  <div class="rule anim" ${at(.8)}></div>
  <h1 class="big anim up" ${at(1)}>${esc(L.titleA)}<em class="gold shimmer">${esc(L.titleB)}</em></h1>
  <div class="dots anim up" ${at(1.5)}>${Array.from({ length: 14 }, (_, i) => `<i class="${i < day ? 'on' : ''}"></i>`).join('')}</div>
  <div class="sub anim up" ${at(2)}>${esc(L.subtitle.replace(/^Lesson \d+: /, ''))}</div>
</div>

<div class="scene anim" ${win('why')}>
  <div class="kicker">Why it matters</div>
  <h2 class="t">${esc(L.titleA)} <em class="gold">${esc(L.titleB)}</em></h2>
  <div class="cards">${L.why.map(([ic, t, p], i) => `<div class="card anim up" ${at(whyT[i])}><div class="ic">${icon(ic, 50, '#E9C46A', 1.6)}</div><h4>${esc(t)}</h4><p>${esc(p)}</p></div>`).join('')}</div>
</div>

<div class="scene anim" ${win('steps')}>
  <div class="kicker">Step by step</div>
  <div class="llist">${L.steps.map(([ic, t, b], i) => `<div class="lrow anim left" id="st${i}" data-cs="${stepStart[i].toFixed(2)}" data-ce="${stepEnd[i].toFixed(2)}" ${at(stepStart[i])}><div class="num">${i + 1}</div><div class="lic">${icon(ic, 38, '#E9C46A', 1.6)}</div><div class="ltx"><h4>${esc(t)}</h4><p>${esc(b.join('  ·  '))}</p></div></div>`).join('')}</div>
</div>

<div class="scene anim" ${win('doavoid')}>
  <div class="kicker">Remember</div>
  <h2 class="t">Do <em class="gold">&amp;</em> Avoid</h2>
  <div class="da">
    <div class="box do anim up" ${at(daT)}><div class="hd">${icon('circle-check', 32, '#7FE0B5', 2.2)}DO</div><ul>${L.do.map(x => `<li>${icon('check', 36, '#7FE0B5', 2.6)}${esc(x)}</li>`).join('')}</ul></div>
    <div class="box av anim up" ${at(daT + .8)}><div class="hd">${icon('ban', 32, '#F29A90', 2.2)}AVOID</div><ul>${L.avoid.map(x => `<li>${icon('x', 36, '#F29A90', 2.6)}${esc(x)}</li>`).join('')}</ul></div>
  </div>
</div>

<div class="scene anim" ${win('tip')}>
  <div class="kicker">Pro tip</div>
  <div class="tipc anim pop" ${at(S.tip.start)}>${icon('lightbulb', 120, '#F5D88A', 1.5)}<div class="t">${esc(require('./long_scripts.js')[day].tip)}</div></div>
</div>

<div class="scene anim" ${at(cA, DUR + 5)}><div class="cta">${ctaInner}</div></div>
<script>
const ENV=${JSON.stringify(ENV)},CAPS=${JSON.stringify(capLines)},DUST=${JSON.stringify(dust)},DUR=${DUR};
const ease=x=>x<=0?0:x>=1?1:1-Math.pow(1-x,3);
document.getElementById('dust').innerHTML=DUST.map((d,i)=>'<circle id="d'+i+'" r="'+d.s+'" fill="#F5D88A"/>').join('');
const els=[...document.querySelectorAll('.anim')];let last=-1;
const BL=Array.from({length:80},(_,i)=>1.7+i*3.4+((i*7)%5)*.3);
const rows=[...document.querySelectorAll('.lrow')];
window.render=function(t,f){
  for(const el of els){const a=+el.dataset.in,b=+el.dataset.out,pi=ease((t-a)/.6),po=ease((t-b)/.45);el.style.opacity=(pi*(1-po)).toFixed(3);let tr='';
    if(el.classList.contains('up'))tr+='translateY('+((1-pi)*40).toFixed(1)+'px)';if(el.classList.contains('left'))tr+='translateX('+((1-pi)*-60).toFixed(1)+'px)';
    if(el.classList.contains('pop'))tr+=' scale('+(.88+.12*pi).toFixed(3)+')';if(el.classList.contains('scene')&&!el.dataset.noshift)tr+='translateY('+(po*-30).toFixed(1)+'px)';el.style.transform=tr;}
  rows.forEach(r=>{r.classList.toggle('cur',t>=+r.dataset.cs&&t<+r.dataset.ce);});
  document.querySelectorAll('.shimmer').forEach(e=>e.style.backgroundPosition=((t*18)%250)+'% 0');
  DUST.forEach((d,i)=>{const c=document.getElementById('d'+i);let y=(d.y-t*d.v)%${H};if(y<0)y+=${H};c.setAttribute('cx',(d.x+Math.sin(t*.6+d.ph)*14).toFixed(1));c.setAttribute('cy',y.toFixed(1));c.setAttribute('opacity',(d.a*(.55+.45*Math.sin(t*1.3+d.ph))).toFixed(2));});
  document.getElementById('glow').style.transform='translate('+(Math.sin(t*.2)*80).toFixed(1)+'px,'+(Math.cos(t*.17)*40).toFixed(1)+'px)';
  document.getElementById('progf').style.width=(100*t/DUR).toFixed(2)+'%';
  const e=ENV[Math.min(ENV.length-1,f)]||0,e2=((ENV[f-1]||0)+e+(ENV[f+1]||0))/3;
  document.getElementById('ring').style.transform='rotate('+(t*25)+'deg)';
  document.getElementById('ringglow').style.opacity=(.25+.75*e2).toFixed(2);document.getElementById('ringglow').style.transform='scale('+(1+.12*e2).toFixed(3)+')';
  document.getElementById('av').style.transform='translateY('+(-e2*6).toFixed(1)+'px) scale('+(1+.012*Math.sin(t*1.2)).toFixed(4)+')';
  const mo=Math.min(1,e*1.15+(e>.08?.15*Math.sin(t*38):0));document.getElementById('mouthOpen').style.transform='scaleY('+Math.max(0,mo).toFixed(2)+')';
  let ey=1;for(const b of BL){const d=Math.abs(t-b);if(d<.09)ey=.1+.9*(d/.09);}document.getElementById('eyes').style.transform='scaleY('+ey.toFixed(2)+')';
  document.getElementById('left').style.opacity=ease((t-.2)/.6)*(1-ease((t-(DUR-.8))/.6));
  let ci=-1;for(let i=0;i<CAPS.length;i++)if(t>=CAPS[i].s-.05)ci=i;const box=document.getElementById('capbox');
  if(ci!==last){box.innerHTML=ci<0?'':CAPS[ci].w.map(w=>'<i>'+w[0]+'</i> ').join('');last=ci;}
  if(ci>=0){const ws=box.querySelectorAll('i');CAPS[ci].w.forEach((w,k)=>{const on=t>=w[1];const nxt=k+1<CAPS[ci].w.length?CAPS[ci].w[k+1][1]:CAPS[ci].e;ws[k].className=on?(t<nxt?'now':'on'):'';});}
};
</script></body></html>`;

(async () => {
  const hp = path.join(OUT, 'video.html'); fs.writeFileSync(hp, html);
  const b = await launch(); const p = await b.newPage({ viewport: { width: W, height: H } });
  await p.goto('file://' + hp, { waitUntil: 'load' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  if (PREVIEW) { for (const t of process.argv.slice(process.argv.indexOf('--preview') + 1).map(Number)) { await p.evaluate(([t, f]) => render(t, f), [t, Math.round(t * FPS)]); await p.screenshot({ path: path.join(OUT, `prev_${t}.jpg`), type: 'jpeg', quality: 80 }); } await b.close(); return; }
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '21', '-pix_fmt', 'yuv420p', path.join(OUT, 'video_silent.mp4')], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.round(DUR * FPS);
  for (let f = 0; f < N; f++) { await p.evaluate(([t, f]) => render(t, f), [f / FPS, f]); const buf = await p.screenshot({ type: 'jpeg', quality: 88 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await b.close(); console.log('video frames', N, 'dur', DUR);
})();
