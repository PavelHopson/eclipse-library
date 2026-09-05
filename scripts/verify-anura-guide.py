"""Static clean-DOCX acceptance: full source text retained, no active Office content."""
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
import json
ROOT=Path(__file__).resolve().parents[1]
scene=ROOT/'web/experiments/anura'
original=(scene/'assets/original-brief.txt').read_text(encoding='utf8')
with ZipFile(scene/'assets/ANURA-Guide.docx') as z:
    names=z.namelist()
    assert not any(('embeddings/' in n or 'vbaProject' in n or 'activeX' in n) for n in names)
    for name in names:
        if name.endswith('.rels'):
            assert not any(el.attrib.get('TargetMode')=='External' for el in ET.fromstring(z.read(name)).iter())
    doc=ET.fromstring(z.read('word/document.xml'))
    ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs=[''.join(t.text or '' for t in p.findall('.//w:t',ns)) for p in doc.findall('.//w:p',ns)]
    lines=[x for x in original.splitlines() if x.strip()]
    assert paragraphs[-len(lines):]==lines
    for field in doc.findall('.//w:instrText',ns): assert not field.text or field.text.strip()=='PAGE'
    report={'sourceParagraphs':len(lines),'retained':len(lines),'paragraphs':len(paragraphs),'images':len([n for n in names if n.startswith('word/media/')]),'embeddedObjects':0,'externalRelationships':0,'bytes':(scene/'assets/ANURA-Guide.docx').stat().st_size}
(ROOT/'.artifacts/anura/guide-verification.json').write_text(json.dumps(report,indent=2),encoding='utf8')
print(json.dumps(report,indent=2))
