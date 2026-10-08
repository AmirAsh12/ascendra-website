#!/usr/bin/env bash
# One-off setup in a fresh container: installs deps and downloads the voice model (~350MB from GitHub).
set -e
cd "$(dirname "$0")"
npm install --no-audit --no-fund >/dev/null
pip install --break-system-packages -q kokoro-onnx soundfile opencv-python-headless numpy >/dev/null 2>&1 || true
mkdir -p models
[ -s models/kokoro-v1.0.onnx ] || curl -sSL -o models/kokoro-v1.0.onnx https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
[ -s models/voices-v1.0.bin ] || curl -sSL -o models/voices-v1.0.bin https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
echo SETUP_OK
