#!/usr/bin/env bash
# Usage: bash render_long.sh <day> -> out_long/day<N>/youtube.mp4 (1920x1080, 2-3 min)
set -euo pipefail
DAY="$1"; ENG="$(cd "$(dirname "$0")" && pwd)"; OUT="$ENG/out_long/day$DAY"; MODELS="${MODELS:-$ENG/models}"
mkdir -p "$OUT"; cd "$ENG"
node -e "require('fs').writeFileSync('$OUT/long.json',JSON.stringify(require('./long_scripts.js')[$DAY]))"
python3 tts_long.py "$DAY" "$OUT/long.json" "$MODELS" "$OUT"
DUR=$(python3 -c "import json;print(json.load(open('$OUT/timeline.json'))['duration']+0.5)")
[ -f "$ENG/out_long/music.wav" ] || python3 music.py "$ENG/out_long" 200
node video_long.js "$DAY" "$OUT"
ffmpeg -v error -y -i "$OUT/voice.wav" -af "loudnorm=I=-16:TP=-1.5" -ar 44100 -ac 2 "$OUT/voice_n.wav"
ffmpeg -v error -y -i "$OUT/voice_n.wav" -i "$ENG/out_long/music.wav" -filter_complex "[1:a]volume=0.17,afade=t=out:st=$(python3 -c "print($DUR-3)"):d=3[m];[m][0:a]sidechaincompress=threshold=0.04:ratio=4:attack=20:release=400[md];[0:a][md]amix=inputs=2:normalize=0:duration=first,alimiter=limit=0.95[a]" -map "[a]" -ar 44100 "$OUT/mix.wav"
ffmpeg -v error -y -i "$OUT/video_silent.mp4" -i "$OUT/mix.wav" -map 0:v -map 1:a -c:v copy -c:a aac -b:a 160k -shortest -movflags +faststart "$OUT/youtube.mp4"
ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT/youtube.mp4"
echo "RENDERED long day $DAY"
