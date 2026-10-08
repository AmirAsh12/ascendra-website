#!/usr/bin/env bash
# Usage: bash render.sh <day>   -> out/day<N>/{post.png, short.mp4, meta.json}
set -euo pipefail
DAY="$1"; ENG="$(cd "$(dirname "$0")" && pwd)"; OUT="$ENG/out/day$DAY"; MODELS="${MODELS:-$ENG/models}"
mkdir -p "$OUT"
cd "$ENG"
node -e "const L=require('./lessons.js').find(l=>l.day===$DAY);require('fs').writeFileSync('$OUT/lesson.json',JSON.stringify(L,null,1))"
node infographic.js "$DAY" "$OUT"
python3 tts.py "$OUT/lesson.json" "$MODELS" "$OUT"
DUR=$(python3 -c "import json;print(json.load(open('$OUT/timeline.json'))['duration']+0.5)")
[ -f "$OUT/../music.wav" ] || python3 music.py "$OUT/.." 75
node video.js "$DAY" "$OUT"
ffmpeg -v error -y -i "$OUT/voice.wav" -af "loudnorm=I=-16:TP=-1.5" -ar 44100 -ac 2 "$OUT/voice_n.wav"
ffmpeg -v error -y -i "$OUT/voice_n.wav" -i "$OUT/../music.wav" -filter_complex "[1:a]volume=0.20,afade=t=out:st=$(python3 -c "print($DUR-2.5)"):d=2.5[m];[m][0:a]sidechaincompress=threshold=0.04:ratio=4:attack=20:release=400[md];[0:a][md]amix=inputs=2:normalize=0:duration=first,alimiter=limit=0.95[a]" -map "[a]" -ar 44100 "$OUT/mix.wav"
ffmpeg -v error -y -i "$OUT/video_silent.mp4" -i "$OUT/mix.wav" -map 0:v -map 1:a -c:v copy -c:a aac -b:a 160k -shortest -movflags +faststart "$OUT/short.mp4"
ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT/short.mp4"
ffmpeg -v error -y -ss 2.6 -i "$OUT/short.mp4" -frames:v 1 -vf scale=540:-1 "$OUT/check_hook.jpg"
echo "RENDERED day $DAY -> $OUT"
