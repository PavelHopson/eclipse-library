"""Read the supplied OOXML as data, never launch Office or embedded content."""
import argparse, hashlib, json, re, zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

parser=argparse.ArgumentParser()
parser.add_argument('source',type=Path)
args=parser.parse_args()
out=Path(__file__).resolve().parents[1]/'.artifacts/anura'
out.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(args.source) as z:
    entries=z.infolist()
    if len(entries)>2000 or sum(i.file_size for i in entries)>200_000_000:
        raise ValueError('Unexpected OOXML size')
    names=[i.filename for i in entries]
    active=[n for n in names if re.search(r'vbaProject|activeX|embeddings/',n,re.I)]
    external=[];fields=[]
    for entry in entries:
        if entry.filename.endswith(('.xml','.rels')):
            if entry.file_size>5_000_000: raise ValueError('Oversized XML part')
            data=z.read(entry)
            if b'<!DOCTYPE' in data or b'<!ENTITY' in data: raise ValueError('XML entity declaration')
            tree=ET.fromstring(data)
            external.extend({'part':entry.filename,'type':r.attrib.get('Type',''),'target':r.attrib.get('Target','')} for r in tree.iter() if r.attrib.get('TargetMode')=='External')
            fields.extend(t.text or '' for t in tree.iter() if t.tag.endswith('}instrText'))
    ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    doc=ET.fromstring(z.read('word/document.xml'))
    paragraphs=[''.join(t.text or '' for t in p.findall('.//w:t',ns)) for p in doc.findall('.//w:p',ns)]
    paragraphs=[p for p in paragraphs if p.strip()]
    brief='\n\n'.join(paragraphs)+'\n'
    (out/'original-brief.txt').write_text(brief,encoding='utf8')
    report={'sha256':hashlib.sha256(args.source.read_bytes()).hexdigest(),'paragraphs':len(paragraphs),'activeParts':active,'externalRelationships':external,'activeFields':[f for f in fields if re.search(r'DDE|INCLUDETEXT|INCLUDEPICTURE',f,re.I)],'media':[{'name':i.filename,'bytes':i.file_size} for i in entries if i.filename.startswith(('word/media/','word/embeddings/'))]}
    (out/'source-inspection.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8')
    print(json.dumps(report,ensure_ascii=False,indent=2))
