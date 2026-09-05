"""Reproducible local preparation; never modifies the supplied originals."""
import argparse
import hashlib
import json
from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET
from PIL import Image, ImageChops, ImageFilter

ROOT = Path(__file__).resolve().parents[1]

def prepare(source, document=None):
    output = ROOT / 'web/experiments/gwen-reveal/assets'
    output.mkdir(parents=True, exist_ok=True)
    images = [Image.open(source / name).convert('RGBA') for name in ('Suit.png', 'Sadie.png')]
    if images[0].size != images[1].size:
        raise ValueError('The images must use a common coordinate system.')
    union = ImageChops.lighter(*(im.getchannel('A') for im in images))
    bbox = union.getbbox()
    if not bbox:
        raise ValueError('Empty alpha channel.')
    box = (bbox[0]-24, bbox[1]-24, bbox[2]+24, bbox[3]+24)
    size = (1400, round(1400*(box[3]-box[1])/(box[2]-box[0])))
    prepared = [im.crop(box).resize(size, Image.Resampling.LANCZOS) for im in images]
    for im, name in zip(prepared, ('suit', 'face')):
        im.save(output / (name+'.webp'), quality=90, method=6)
    alpha = ImageChops.lighter(*(im.getchannel('A') for im in prepared))
    matte = Image.new('RGBA', size, 'white')
    matte.putalpha(alpha.filter(ImageFilter.MaxFilter(11)).filter(ImageFilter.GaussianBlur(3)))
    matte.save(output / 'matte.png', optimize=True)
    # Illustration for the guide; no opaque screenshot background is used by the demo.
    proof = Image.new('RGB', (1400, 650), '#121014')
    for i, im in enumerate(prepared):
        thumb = im.copy()
        thumb.thumbnail((690, 650), Image.Resampling.LANCZOS)
        proof.paste(thumb, (i*700+(700-thumb.width)//2, 650-thumb.height), thumb)
    proof.save(output / 'source-pair.webp', quality=90)
    metadata = {'width': size[0], 'height': size[1], 'commonCrop': box,
                'alignment': 'Original shared coordinates; no face warp or generative edits.',
                'sourceHashes': {name: hashlib.sha256((source/name).read_bytes()).hexdigest()
                                 for name in ('Suit.png', 'Sadie.png')},
                'rights': 'User-supplied reference images. Public redistribution rights not verified.'}
    (output / 'provenance.json').write_text(json.dumps(metadata, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    doc = document or source / 'Gwen Stacy.docx'
    with zipfile.ZipFile(doc) as archive:
        names = archive.namelist()
        if any(any(token in n.lower() for token in ('vba', 'activex', 'embeddings/')) for n in names):
            raise ValueError('Active content is not accepted.')
        for name in names:
            if name.endswith('.rels'):
                if any(rel.get('TargetMode') == 'External' for rel in ET.fromstring(archive.read(name))):
                    raise ValueError('External document relationships require review.')
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        root = ET.fromstring(archive.read('word/document.xml'))
        paras = [''.join(t.text or '' for t in p.findall('.//w:t', ns)) for p in root.findall('.//w:p', ns)]
    (output / 'original-brief.txt').write_text('\n'.join(paras).rstrip()+'\n', encoding='utf-8')
    print(json.dumps(metadata, ensure_ascii=False))

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('source', type=Path)
    parser.add_argument('--document', type=Path)
    args = parser.parse_args()
    prepare(args.source, args.document)
