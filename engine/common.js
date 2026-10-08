const fs = require('fs'), path = require('path');
const ICON_DIR = path.join(__dirname, 'node_modules/lucide-static/icons');
exports.icon = (name, size = 24, color = 'currentColor', sw = 2) =>
  fs.readFileSync(path.join(ICON_DIR, name + '.svg'), 'utf8').replace(/<!--[\s\S]*?-->/g, '')
    .replace(/width="24"/, `width="${size}"`).replace(/height="24"/, `height="${size}"`)
    .replace(/stroke="currentColor"/, `stroke="${color}"`).replace(/stroke-width="2"/, `stroke-width="${sw}"`).replace(/class="[^"]*"/, '');
exports.esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
exports.launch = () => require('playwright').chromium.launch({ executablePath: fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined });
exports.FONT = 'file://' + path.join(__dirname, 'node_modules/@fontsource/playfair-display/files/');
