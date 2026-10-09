# python3 tts_long.py <day> <long.json> <modelDir> <outDir> -> voice.wav + timeline.json (long YouTube version)
import json, sys, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
day = sys.argv[1]; S = json.load(open(sys.argv[2])); M = sys.argv[3]; O = sys.argv[4]
k = Kokoro(f"{M}/kokoro-v1.0.onnx", f"{M}/voices-v1.0.bin")
scenes = [("intro", S["intro"], None), ("why", S["why"], None),
          ("steps", [x for st in S["steps"] for x in st], [i // 2 for i in range(10)]),
          ("doavoid", [S["doAvoid"]], None), ("tip", ["Pro tip. " + S["tip"]], None), ("outro", S["outro"], None)]
SR = 24000; out = [np.zeros(int(SR * .8), np.float32)]; t = .8; tl = []
for name, sents, idx in scenes:
    sc = {"name": name, "start": t, "lines": []}
    for j, x in enumerate(sents):
        a, _ = k.create(x, voice="bm_george", speed=0.95, lang="en-gb"); a = a.astype(np.float32)
        ln = {"text": x, "start": t, "end": t + len(a) / SR}
        if idx: ln["step"] = idx[j]
        sc["lines"].append(ln); out.append(a); t += len(a) / SR
        g = 0.4; out.append(np.zeros(int(SR * g), np.float32)); t += g
    g = 0.8; out.append(np.zeros(int(SR * g), np.float32)); t += g
    sc["end"] = t; tl.append(sc)
out.append(np.zeros(int(SR * 1.5), np.float32)); t += 1.5
sf.write(f"{O}/voice.wav", np.concatenate(out), SR)
json.dump({"duration": t, "scenes": tl}, open(f"{O}/timeline.json", "w"), indent=1)
print("duration", round(t, 1))
