"""Readable source/implementation comparisons, not replacements for screenshots."""
from PIL import Image, ImageOps, ImageDraw
from pathlib import Path
import sys
root=Path(__file__).resolve().parents[1]
run=root/'.artifacts/gwen'/ (sys.argv[1] if len(sys.argv)>1 else 'qa-initial')
source=Image.open(root/'web/experiments/gwen-reveal/assets/source-pair.webp').convert('RGB')
source.thumbnail((780,360))
shot=Image.open(run/'desktop-1440.png').convert('RGB')
sheet=Image.new('RGB',(1440,1300),'#16131b')
sheet.paste(source,((1440-source.width)//2,30))
sheet.paste(shot,(0,400))
draw=ImageDraw.Draw(sheet);draw.text((24,12),'SUPPLIED ASSETS / COMMON CROP',fill='white');draw.text((24,380),'IMPLEMENTATION / 1440 x 900 / DPR 1',fill='white')
sheet.save(run/'source-desktop-comparison.jpg',quality=87)
for name in ['pointer-reveal','wall-goo','full-face','fast-drag','layout-390','mobile-face','guide-cover','guide-mobile','library-guide','gallery','reduced-motion','asset-error']:
    im=Image.open(run/(name+'.png')).convert('RGB'); im.save(run/(name+'.jpg'),quality=85)
