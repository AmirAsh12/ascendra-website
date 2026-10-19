#!/usr/bin/env bash
# Usage: bash render_weekly.sh <week>   -> out/week<N>/{short.mp4, cover.jpg}
set -euo pipefail
WK="$1"; ENG="$(cd "$(dirname "$0")" && pwd)"; OUT="$ENG/out/week$WK"; MODELS="${MODELS:-$ENG/models}"
mkdir -p "$OUT"; cd "$ENG"
node -e "require('fs').writeFileSync('$OUT/week.json',JSON.stringify(require('./weekly.js').find(w=>w.week===$WK),null,1))"
python3 tts_weekly.py "$OUT/week.json" "$MODELS" "$OUT"
DUR=$(python3 -c "import json;print(json.load(open('$OUT/timeline.json'))['duration']+0.5)")
[ -f "$OUT/../music.wav" ] || python3 music.py "$OUT/.." 75
node video_weekly.js "$WK" "$OUT"
ffmpeg -v error -y -i "$OUT/voice.wav" -af "loudnorm=I=-16:TP=-1.5" -ar 44100 -ac 2 "$OUT/voice_n.wav"
ffmpeg -v error -y -i "$OUT/voice_n.wav" -i "$OUT/../music.wav" -filter_complex "[1:a]volume=0.20,afade=t=out:st=$(python3 -c "print($DUR-2.5)"):d=2.5[m];[m][0:a]sidechaincompress=threshold=0.04:ratio=4:attack=20:release=400[md];[0:a][md]amix=inputs=2:normalize=0:duration=first,alimiter=limit=0.95[a]" -map "[a]" -ar 44100 "$OUT/mix.wav"
ffmpeg -v error -y -i "$OUT/video_silent.mp4" -i "$OUT/mix.wav" -map 0:v -map 1:a -c:v copy -c:a aac -b:a 160k -shortest -movflags +faststart "$OUT/short.mp4"
ffmpeg -v error -y -ss 2.6 -i "$OUT/short.mp4" -frames:v 1 -q:v 3 "$OUT/cover.jpg"
ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT/short.mp4"
echo "RENDERED week $WK -> $OUT"
