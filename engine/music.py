import numpy as np, soundfile as sf, sys
D = sys.argv[1]; DUR = float(sys.argv[2])
SR = 44100
N = int(SR * DUR)
t = np.arange(N) / SR
rng = np.random.default_rng(7)
mix = np.zeros((N, 2), dtype=np.float64)

def midi(m): return 440 * 2 ** ((m - 69) / 12)

BPM = 72; beat = 60 / BPM; bar = beat * 4
# Dmaj9 - Bm9 - Gmaj7 - A6sus (luxury, warm)
chords = [[50, 57, 61, 64, 66], [47, 54, 57, 61, 62], [43, 50, 54, 57, 59], [45, 52, 54, 57, 62]]

# Pads: detuned sines, slow attack/release, per bar
for i in range(int(DUR / bar) + 1):
    c = chords[i % 4]; s0 = i * bar
    n0, n1 = int(s0 * SR), min(N, int((s0 + bar + 1.2) * SR))
    if n0 >= N: break
    tt = t[n0:n1] - s0; L = len(tt)
    env = np.minimum(1, tt / 1.4) * np.clip((bar + 1.2 - tt) / 1.4, 0, 1)
    for m in c:
        f = midi(m + 12)
        for det, pan in ((-0.12, 0.3), (0.12, 0.7)):
            w = np.sin(2 * np.pi * f * (1 + det / 100) * tt) + 0.18 * np.sin(2 * np.pi * 2 * f * tt)
            mix[n0:n1, 0] += 0.022 * env * w * (1 - pan)
            mix[n0:n1, 1] += 0.022 * env * w * pan

# Soft bass
for i in range(int(DUR / bar) + 1):
    s0 = i * bar; n0 = int(s0 * SR)
    if n0 >= N: break
    n1 = min(N, int((s0 + bar) * SR)); tt = t[n0:n1] - s0
    f = midi(chords[i % 4][0] - 12)
    env = np.minimum(1, tt / 0.05) * np.exp(-tt * 0.6)
    w = 0.09 * env * np.sin(2 * np.pi * f * tt)
    mix[n0:n1] += w[:, None]

# Piano-like arpeggio (eighth notes, gentle)
def pluck(f, L):
    tt = np.arange(L) / SR
    env = np.minimum(1, tt / 0.004) * np.exp(-tt * 2.6)
    return env * (np.sin(2*np.pi*f*tt) + 0.35*np.sin(2*np.pi*2*f*tt)*np.exp(-tt*3) + 0.12*np.sin(2*np.pi*3*f*tt)*np.exp(-tt*5))
pattern = [0, 2, 4, 3, 1, 3, 4, 2]
step = beat / 2
k = 0; st = bar * 1  # piano enters after first bar
while st < DUR - 1.5:
    bi = int(st / bar); c = chords[bi % 4]
    idx = pattern[k % 8]; m = c[idx] + 24
    if not (k % 16 == 15):
        L = int(SR * 2.2); n0 = int(st * SR); n1 = min(N, n0 + L)
        p = pluck(midi(m), n1 - n0) * (0.05 + 0.012 * rng.random())
        pan = 0.35 + 0.3 * (idx / 4)
        mix[n0:n1, 0] += p * (1 - pan); mix[n0:n1, 1] += p * pan
    st += step; k += 1

# Shimmer sparkles occasionally
for s in np.arange(bar * 2, DUR - 2, bar * 2):
    L = int(SR * 1.5); n0 = int(s * SR); n1 = min(N, n0 + L)
    tt = np.arange(n1 - n0) / SR
    f = midi(chords[int(s / bar) % 4][2] + 36)
    w = 0.012 * np.exp(-tt * 2) * np.sin(2*np.pi*f*tt)
    mix[n0:n1] += w[:, None]

# Simple stereo reverb via noise-impulse convolution (FFT)
ir_len = int(SR * 2.4); ti = np.arange(ir_len) / SR
ir = rng.standard_normal((ir_len, 2)) * np.exp(-ti * 2.8)[:, None]; ir[0] = 0
ir /= np.sqrt((ir ** 2).sum(0))
wet = np.zeros_like(mix)
for ch in range(2):
    n = N + ir_len; nf = 1 << (n - 1).bit_length()
    wet[:, ch] = np.fft.irfft(np.fft.rfft(mix[:, ch], nf) * np.fft.rfft(ir[:, ch], nf), nf)[:N]
out = 0.75 * mix + 0.35 * wet
# fades
fi = np.minimum(1, t / 2.0); fo = np.clip((DUR - t) / 3.0, 0, 1)
out *= (fi * fo)[:, None]
out /= np.abs(out).max() + 1e-9
sf.write(f"{D}/music.wav", (out * 0.9).astype(np.float32), SR)
print("ok")
