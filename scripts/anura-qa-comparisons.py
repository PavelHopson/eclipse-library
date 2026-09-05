"""Side-by-side QA evidence, not replacement app artwork."""
from pathlib import Path
from PIL import Image, ImageDraw
import argparse
ROOT=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser();p.add_argument('run');args=p.parse_args()
if not args.run.replace('-','').isalnum():raise ValueError('Invalid run')
out=ROOT/'.artifacts/anura'/args.run
def tile(path,width):
    im=Image.open(path).convert('RGB');im.thumbnail((width,2000));return im
ref=tile(ROOT/'web/experiments/anura/assets/poster.webp',720)
screen=tile(out/'desktop-1440.png',900)
board=Image.new('RGB',(1640,max(screen.height,ref.height)+60),'#0b1917')
board.paste(ref,(10,45));board.paste(screen,(740,45));d=ImageDraw.Draw(board)
d.text((12,15),'SOURCE VIDEO / FRAME 000',fill='white');d.text((742,15),'ANURA / 1440 x 900 / FRAME 000',fill='white')
board.save(out/'compare-desktop.jpg',quality=88)
parts=[tile(out/f'scene-{size}.png',390) for size in ['390x844','320x740','768x1024']]
board=Image.new('RGB',(1200,max(i.height for i in parts)+70),'#0b1917');d=ImageDraw.Draw(board)
for n,(im,label) in enumerate(zip(parts,['390 x 844','320 x 740','768 x 1024'])):
    board.paste(im,(n*400,45));d.text((n*400+12,15),label,fill='white')
board.save(out/'compare-responsive.jpg',quality=88)
for name in ['guide-1440','library-390','guide-390']:
    im=Image.open(out/(name+'.png')).convert('RGB')
    im.crop((0,0,im.width,min(im.height,1000))).save(out/(name+'-top.jpg'),quality=87)
