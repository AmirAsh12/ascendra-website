# python3 tts.py <lesson.json> <modelDir> <outDir>  -> voice.wav + timeline.json
import json, sys, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
L = json.load(open(sys.argv[1])); M = sys.argv[2]; O = sys.argv[3]
k = Kokoro(f"{M}/kokoro-v1.0.onnx", f"{M}/voices-v1.0.bin")
s = L["script"]
scenes = [("hook", s["hook"]), ("steps", [s["stepsIntro"]] + s["steps"]), ("doavoid", [s["doAvoid"]]), ("cta", [s["cta"]])]
SR = 24000; out = [np.zeros(int(SR * .6), np.float32)]; t = .6; tl = []
for name, sents in scenes:
    sc = {"name": name, "start": t, "lines": []}
    for x in sents:
        a, _ = k.create(x, voice="bm_george", speed=0.95, lang="en-gb"); a = a.astype(np.float32)
        sc["lines"].append({"text": x, "start": t, "end": t + len(a) / SR}); out.append(a); t += len(a) / SR
        g = 0.35; out.append(np.zeros(int(SR * g), np.float32)); t += g
    g = 0.6; out.append(np.zeros(int(SR * g), np.float32)); t += g
    sc["end"] = t; tl.append(sc)
out.append(np.zeros(int(SR * 1.2), np.float32)); t += 1.2
sf.write(f"{O}/voice.wav", np.concatenate(out), SR)
json.dump({"duration": t, "scenes": tl}, open(f"{O}/timeline.json", "w"), indent=1)
print("duration", round(t, 1))
