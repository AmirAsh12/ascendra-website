# Ascendra content engine

Renders the "LinkedIn from Zero" 14-day series.

- `lessons.js` – all lesson content (infographic, video script, LinkedIn / Instagram / YouTube captions)
- `bash setup.sh` – install dependencies in a fresh container
- `bash render.sh <day>` – renders `out/day<N>/post.png` (1080x1350) and `out/day<N>/short.mp4` (1080x1920)
- Published media lives in `/media/day<N>/` on this branch and is served from
  `https://raw.githubusercontent.com/AmirAsh12/ascendra-website/content-engine/media/day<N>/...`

Publishing: n8n workflow "Ascendra Daily Publisher" reads table `ascendra_daily_queue` at 10:00 Europe/London.
