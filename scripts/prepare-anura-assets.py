"""Reproducible, bounded local media derivatives. Never executes embedded content."""
import argparse, hashlib, json, subprocess
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'web/experiments/anura'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--video', type=Path, required=True)
    parser.add_argument('--image', type=Path, required=True)
    args = parser.parse_args()
    frames = DEST / 'frames'; assets = DEST / 'assets'
    frames.mkdir(parents=True, exist_ok=True); assets.mkdir(parents=True, exist_ok=True)
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-nostdin',
        '-protocol_whitelist', 'file,pipe', '-i', str(args.video.resolve()),
        '-map', '0:v:0', '-an', '-vf', 'fps=24,scale=1280:720', '-frames:v', '240',
        '-c:v', 'libwebp', '-quality', '78', '-threads', '2', '-start_number', '0',
        '-y', str(frames / '%03d.webp')], check=True)
    with Image.open(args.image) as source:
        source.convert('RGB').resize((1280, 714)).save(assets / 'source.webp', quality=85)
    with Image.open(frames / '000.webp') as source:
        source.convert('RGB').save(assets / 'poster.webp', quality=85)
    files = sorted(frames.glob('*.webp'))
    if len(files) != 240: raise ValueError('Expected exactly 240 frames')
    manifest = {'schemaVersion': 1, 'frames': 240, 'fps': 24, 'width': 1280, 'height': 720,
        'bytes': sum(p.stat().st_size for p in files),
        'source': {'videoSha256': digest(args.video), 'imageSha256': digest(args.image),
                   'durationSeconds': 10, 'originalFrames': 600, 'rights': 'User-supplied; distribution rights not independently verified'},
        'files': [{'name': p.name, 'bytes': p.stat().st_size, 'sha256': digest(p)} for p in files]}
    (assets / 'sequence.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
    print(json.dumps({k:v for k,v in manifest.items() if k not in ('files','source')}, indent=2))

if __name__ == '__main__': main()
