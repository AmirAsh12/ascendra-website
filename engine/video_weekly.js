// node video_weekly.js <week> <outDir> [--preview t1 t2 ...]  -> <outDir>/video_silent.mp4 (needs voice.wav + timeline.json)
const fs = require('fs'), path = require('path');
const { spawn, execFileSync } = require('child_process');
const { icon, esc, launch, FONT } = require('./common');
const week = +process.argv[2]; const OUT = path.resolve(process.argv[3]);
const Wk = require('./weekly.js').find(w => w.week === week);
const TL = JSON.parse(fs.readFileSync(path.join(OUT, 'timeline.json')));
const FPS = 30, W = 1080, H = 1920, DUR = Math.ceil(TL.duration * 10) / 10;
const PREVIEW = process.argv.includes('--preview');
const OWL = require('./owl.js')();

const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', path.join(OUT, 'voice.wav'), '-f', 's16le', '-ac', '1', '-ar', '24000', '-'], { maxBuffer: 1e9 });
const smp = new Int16Array(raw.buffer, raw.byteOffset, raw.length / 2); const spf = 24000 / FPS, env = [];
for (let f = 0; f < DUR * FPS; f++) { let s = 0, n = 0; for (let i = Math.floor(f * spf); i < Math.min(smp.length, (f + 1) * spf); i++) { s += smp[i] * smp[i]; n++; } env.push(n ? Math.sqrt(s / n) / 32768 : 0); }
const mx = Math.max(...env); const ENV = env.map(v => +Math.min(1, v / (mx * 0.6)).toFixed(3));

const S = Object.fromEntries(TL.scenes.map(s => [s.name, s]));
const win = n => `data-in="${(S[n].start - .25).toFixed(2)}" data-out="${(S[n].end - .15).toFixed(2)}"`;
const at = (a, b = 999) => `data-in="${a.toFixed(2)}" data-out="${b.toFixed(2)}"`;
const recT = S.recap.lines.slice(S.recap.lines.length - Wk.recap.length).map(l => l.start + .05);
const aT = S.about ? S.about.start : 0; const cA = S.cta.start - .25; const HOOK_END = S.hook.end;
const capLines = TL.scenes.flatMap(s => s.lines).map(l => { const w = l.text.split(' '); const tot = w.reduce((a, x) => a + x.length + 1, 0); let acc = 0; return { s: l.start, e: l.end, w: w.map(x => { const st = l.start + (l.end - l.start) * acc / tot; acc += x.length + 1; return [x, st]; }) }; });
const dust = Array.from({ length: 60 }, (_, i) => { const r = k => { const x = Math.sin(i * 127.1 + k * 311.7 + week * 7) * 43758.5453; return x - Math.floor(x); }; return { x: r(1) * W, y: r(2) * H, s: 1 + r(3) * 3, v: 8 + r(4) * 20, ph: r(5) * 6.28, a: .25 + r(6) * .55 }; });

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:PF;src:url(${FONT}playfair-display-latin-700-normal.woff2);font-weight:700}
@font-face{font-family:PF;src:url(${FONT}playfair-display-latin-900-normal.woff2);font-weight:900}
@font-face{font-family:PF;src:url(${FONT}playfair-display-latin-700-italic.woff2);font-weight:700;font-style:italic}
*{box-sizing:border-box;margin:0;padding:0}
body{width:${W}px;height:${H}px;overflow:hidden;background:#06122A;font-family:Inter,sans-serif;color:#F4EBDD}
#bg{position:absolute;inset:0;background:radial-gradient(1300px 1000px at 50% 28%,#1E4F8A 0%,#12325E 40%,#0A1A33 75%,#06102A 100%)}
#glow{position:absolute;width:1400px;height:1400px;left:-160px;top:-200px;border-radius:50%;background:radial-gradient(circle,rgba(242,181,68,.14),rgba(242,181,68,0) 60%)}
#dust{position:absolute;inset:0}
.frame{position:absolute;inset:34px;border:1.5px solid rgba(212,175,55,.45);border-radius:6px}
.frame:after{content:"";position:absolute;inset:10px;border:1px solid rgba(212,175,55,.18);border-radius:4px}
.corner{position:absolute;width:60px;height:60px;border-color:#D4AF37;border-style:solid;border-width:0}
.c1{left:26px;top:26px;border-left-width:3px;border-top-width:3px}.c2{right:26px;top:26px;border-right-width:3px;border-top-width:3px}
.c3{left:26px;bottom:26px;border-left-width:3px;border-bottom-width:3px}.c4{right:26px;bottom:26px;border-right-width:3px;border-bottom-width:3px}
.gold{background:linear-gradient(100deg,#B8862B 0%,#F5D88A 30%,#D4AF37 50%,#FFF1C1 62%,#C9962E 80%,#E9C46A 100%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent}
#top{position:absolute;top:200px;left:0;right:0;display:flex;flex-direction:column;align-items:center;gap:14px}
.brand{display:flex;align-items:center;gap:14px;font-family:PF;font-weight:700;font-size:34px;letter-spacing:10px}
#prog{width:640px;height:3px;background:rgba(212,175,55,.18);border-radius:2px;overflow:hidden}
#progf{height:100%;width:0;background:linear-gradient(90deg,#B8862B,#F5D88A)}
.scene{position:absolute;left:80px;right:80px;top:330px;height:1000px}
.anim{opacity:0}
.kicker{font-size:24px;letter-spacing:7px;color:#D4AF37;text-transform:uppercase;font-weight:600;text-align:center}
h1.big{font-family:PF;font-weight:900;font-size:112px;line-height:1.04;text-align:center;color:#FBF4E6}
h1.big em{font-style:italic;font-weight:700;display:block;margin-top:8px}
h2.t{font-family:PF;font-weight:900;font-size:74px;line-height:1.08;text-align:center;color:#FBF4E6}
h2.t em{font-style:italic;font-weight:700}
.rule{height:2px;width:220px;margin:30px auto;background:linear-gradient(90deg,transparent,#D4AF37,transparent)}
.about{display:flex;flex-direction:column;align-items:center;padding-top:40px}
.about p{margin-top:40px;font-family:PF;font-weight:700;font-size:58px;line-height:1.2;text-align:center;color:#FBF4E6}
.tags{display:flex;gap:22px;margin-top:56px}
.tagp{display:flex;align-items:center;gap:14px;padding:20px 34px;border-radius:60px;border:2px solid rgba(212,175,55,.7);background:rgba(6,16,40,.5);font-size:34px;font-weight:700;color:#FBF4E6}
.llist{margin-top:46px;display:flex;flex-direction:column;gap:22px}
.lrow{display:flex;align-items:center;gap:24px;padding:22px 28px;border-radius:18px;background:linear-gradient(90deg,rgba(212,175,55,.16),rgba(10,26,51,.35));border:1px solid rgba(212,175,55,.45)}
.num{font-family:PF;font-weight:900;font-size:62px;width:60px;color:#D4AF37;line-height:1;text-align:center}
.lic{width:80px;height:80px;flex:none;border-radius:50%;border:1.5px solid rgba(212,175,55,.6);display:flex;align-items:center;justify-content:center;background:rgba(6,16,40,.55)}
.ltx h4{font-family:PF;font-weight:700;font-size:42px;color:#FBF4E6;line-height:1.1}
.ltx p{font-size:26px;color:#CDBFA8;margin-top:6px;line-height:1.3}
.cta{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;padding-top:40px}
.cta .logo{font-family:PF;font-weight:900;font-size:128px;letter-spacing:14px;margin-top:30px}
.pills{display:flex;gap:24px;margin-top:50px}
.pill{display:flex;align-items:center;gap:14px;padding:22px 38px;border-radius:60px;border:2px solid #D4AF37;background:rgba(6,16,40,.5);font-size:32px;font-weight:700;letter-spacing:2px;color:#FBF4E6}
.pill.f{background:linear-gradient(100deg,#B8862B,#F5D88A 50%,#D4AF37);color:#14110B;border-color:transparent}
.mail{margin-top:28px;font-size:30px;color:#E9C46A;font-weight:600;text-align:center}
#narr{position:absolute;left:66px;bottom:300px;width:300px;height:300px;transform-origin:center}
#ring{position:absolute;inset:-14px;border-radius:50%;background:conic-gradient(from 0deg,#7A5A1C,#F5D88A,#D4AF37,#FFF1C1,#B8862B,#7A5A1C)}
#ringglow{position:absolute;inset:-40px;border-radius:50%;background:radial-gradient(circle,rgba(245,216,138,.55),rgba(245,216,138,0) 65%)}
#face{position:absolute;inset:0;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 50% 35%,#2D6AB0,#123A6E 70%,#0A1A33)}
#av{position:absolute;width:96%;left:2%;top:4%;height:102%}
#tag{position:absolute;left:50%;bottom:-30px;transform:translateX(-50%);white-space:nowrap;padding:8px 24px;border-radius:30px;background:#0A1A33;border:1.5px solid #D4AF37;font-size:20px;letter-spacing:4px;font-weight:700;color:#E9C46A}
#cap{position:absolute;left:410px;right:70px;bottom:318px;height:270px;display:flex;align-items:center}
#capbox{width:100%;padding:30px 36px;border-radius:22px;background:rgba(6,16,38,.82);border:1px solid rgba(212,175,55,.4);font-size:40px;line-height:1.32;font-weight:600;color:rgba(244,235,221,.42);min-height:120px}
#capbox i{font-style:normal}#capbox i.on{color:#FBF4E6}#capbox i.now{color:#F5D88A}
</style></head><body>
<div id="bg"></div><div id="glow"></div><svg id="dust" width="${W}" height="${H}"></svg>
<div class="frame"></div><div class="corner c1"></div><div class="corner c2"></div><div class="corner c3"></div><div class="corner c4"></div>
<div id="top"><div class="brand">${icon('mountain', 40, '#D4AF37', 1.8)}<span class="gold shimmer">ASCENDRA</span></div><div id="prog"><div id="progf"></div></div></div>

<div class="scene anim" ${win('hook')} data-noshift="1">
  <div class="kicker anim up" ${at(.4)}>Ascendra weekly · Week ${week}</div>
  <div class="rule anim" ${at(.7)}></div>
  <h1 class="big anim up" ${at(.9)}>${esc(Wk.title[0])}<em class="gold shimmer">${esc(Wk.title[1])}</em></h1>
</div>

${S.about ? `<div class="scene anim" ${win('about')}>
  <div class="about">
    <div class="kicker">What is Ascendra?</div>
    <div class="anim pop" style="margin-top:40px" ${at(aT)}>${icon('mountain', 150, '#D4AF37', 1.3)}</div>
    <p class="anim up" ${at(aT + .3)}>${esc(Wk.about)}</p>
    <div class="tags"><div class="tagp anim up" ${at(aT + .9)}>${icon('linkedin', 36, '#E9C46A', 2)}LinkedIn</div><div class="tagp anim up" ${at(aT + 1.2)}>${icon('sparkles', 36, '#E9C46A', 2)}AI at work</div></div>
  </div>
</div>` : ''}

<div class="scene anim" ${win('recap')}>
  <div class="kicker">This week's lessons</div>
  <h2 class="t" style="margin-top:18px">What you <em class="gold">missed</em></h2>
  <div class="llist">${Wk.recap.map(([ic, t, b], i) => `<div class="lrow anim left" ${at(recT[i])}><div class="num">${i + 1}</div><div class="lic">${icon(ic, 42, '#E9C46A', 1.6)}</div><div class="ltx"><h4>${esc(t)}</h4><p>${esc(b)}</p></div></div>`).join('')}</div>
</div>

<div class="scene anim" ${at(cA, DUR + 5)}><div class="cta">
  <div class="anim pop" ${at(cA + .2)}>${icon('mountain', 150, '#D4AF37', 1.3)}</div>
  <div class="logo gold shimmer anim up" ${at(cA + .5)}>ASCENDRA</div>
  <div class="kicker anim up" style="margin-top:18px" ${at(cA + .9)}>LinkedIn &amp; AI, made simple</div>
  <div class="pills"><div class="pill anim up" ${at(cA + 1.2)}>${icon('bookmark', 34, '#F5D88A', 2)}SAVE</div><div class="pill f anim up" ${at(cA + 1.4)}>${icon('plus', 34, '#14110B', 2.6)}FOLLOW</div></div>
  <div class="mail anim up" ${at(cA + 1.7)}>@ascendralearn</div>
</div></div>

<div id="narr"><div id="ringglow"></div><div id="ring"></div><div id="face"><div id="av">${OWL}</div></div><div id="tag">OLLIE</div></div>
<div id="cap"><div id="capbox"></div></div>
<script>
const ENV=${JSON.stringify(ENV)},CAPS=${JSON.stringify(capLines)},DUST=${JSON.stringify(dust)},DUR=${DUR},HE=${HOOK_END.toFixed(2)};
const ease=x=>x<=0?0:x>=1?1:1-Math.pow(1-x,3);
document.getElementById('dust').innerHTML=DUST.map((d,i)=>'<circle id="d'+i+'" r="'+d.s+'" fill="#F5D88A"/>').join('');
const els=[...document.querySelectorAll('.anim')];let last=-1;
const BL=Array.from({length:40},(_,i)=>1.7+i*3.3+((i*7)%5)*.3);
window.render=function(t,f){
  for(const el of els){const a=+el.dataset.in,b=+el.dataset.out,pi=ease((t-a)/.6),po=ease((t-b)/.45);el.style.opacity=(pi*(1-po)).toFixed(3);let tr='';
    if(el.classList.contains('up'))tr+='translateY('+((1-pi)*50).toFixed(1)+'px)';if(el.classList.contains('left'))tr+='translateX('+((1-pi)*-80).toFixed(1)+'px)';
    if(el.classList.contains('pop'))tr+=' scale('+(.85+.15*pi).toFixed(3)+')';if(el.classList.contains('scene')&&!el.dataset.noshift)tr+='translateY('+(po*-40).toFixed(1)+'px)';el.style.transform=tr;}
  document.querySelectorAll('.shimmer').forEach(e=>e.style.backgroundPosition=((t*18)%250)+'% 0');
  DUST.forEach((d,i)=>{const c=document.getElementById('d'+i);let y=(d.y-t*d.v)%${H};if(y<0)y+=${H};c.setAttribute('cx',(d.x+Math.sin(t*.6+d.ph)*14).toFixed(1));c.setAttribute('cy',y.toFixed(1));c.setAttribute('opacity',(d.a*(.55+.45*Math.sin(t*1.3+d.ph))).toFixed(2));});
  document.getElementById('glow').style.transform='translate('+(Math.sin(t*.25)*60).toFixed(1)+'px,'+(Math.cos(t*.2)*40).toFixed(1)+'px)';
  document.getElementById('progf').style.width=(100*t/DUR).toFixed(2)+'%';
  const e=ENV[Math.min(ENV.length-1,f)]||0,e2=((ENV[f-1]||0)+e+(ENV[f+1]||0))/3;
  document.getElementById('ring').style.transform='rotate('+(t*25)+'deg)';
  document.getElementById('ringglow').style.opacity=(.25+.75*e2).toFixed(2);document.getElementById('ringglow').style.transform='scale('+(1+.12*e2).toFixed(3)+')';
  document.getElementById('av').style.transform='translateY('+(-e2*8+Math.sin(t*2.2)*4).toFixed(1)+'px) rotate('+(Math.sin(t*1.1)*3).toFixed(2)+'deg)';
  const mo=Math.min(1,e*1.15+(e>.08?.15*Math.sin(t*38):0));document.getElementById('mouthOpen').style.transform='scaleY('+Math.max(.05,mo).toFixed(2)+')';
  let ey=1;for(const b of BL){const d=Math.abs(t-b);if(d<.09)ey=.1+.9*(d/.09);}document.getElementById('eyes').style.transform='scaleY('+ey.toFixed(2)+')';
  // Ollie starts large in the middle of the screen, then shrinks into the corner when the hook ends
  const m=ease((t-(HE-.35))/.8),sc=1.7-0.7*m,dx=(540-216)*(1-m),dy=(1030-1470)*(1-m),pop=ease((t-.1)/.5);
  const nr=document.getElementById('narr');nr.style.opacity=pop;nr.style.transform='translate('+dx.toFixed(1)+'px,'+dy.toFixed(1)+'px) scale('+(sc*(.8+.2*pop)).toFixed(3)+')';
  document.getElementById('cap').style.opacity=ease((t-.4)/.5)*(1-ease((t-(DUR-.9))/.6));
  let ci=-1;for(let i=0;i<CAPS.length;i++)if(t>=CAPS[i].s-.05)ci=i;const box=document.getElementById('capbox');
  if(ci!==last){box.innerHTML=ci<0?'':CAPS[ci].w.map(w=>'<i>'+w[0]+'</i> ').join('');last=ci;}
  if(ci>=0){const ws=box.querySelectorAll('i');CAPS[ci].w.forEach((w,k)=>{const on=t>=w[1];const nxt=k+1<CAPS[ci].w.length?CAPS[ci].w[k+1][1]:CAPS[ci].e;ws[k].className=on?(t<nxt?'now':'on'):'';});}
};
</script></body></html>`;

(async () => {
  const hp = path.join(OUT, 'video.html'); fs.writeFileSync(hp, html);
  const b = await launch(); const p = await b.newPage({ viewport: { width: W, height: H } });
  await p.goto('file://' + hp, { waitUntil: 'load' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  if (PREVIEW) { for (const t of process.argv.filter(a => /^\d/.test(a)).slice(1).map(Number)) { await p.evaluate(([t, f]) => render(t, f), [t, Math.round(t * FPS)]); await p.screenshot({ path: path.join(OUT, `prev_${t}.jpg`), type: 'jpeg', quality: 80 }); } await b.close(); return; }
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', path.join(OUT, 'video_silent.mp4')], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.round(DUR * FPS);
  for (let f = 0; f < N; f++) { await p.evaluate(([t, f]) => render(t, f), [f / FPS, f]); const buf = await p.screenshot({ type: 'jpeg', quality: 90 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await b.close(); console.log('video frames', N, 'dur', DUR);
})();
