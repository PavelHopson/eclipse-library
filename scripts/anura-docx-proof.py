from pathlib import Path
import pypdfium2 as pdfium
from PIL import Image, ImageDraw
ROOT=Path(__file__).resolve().parents[1]
out=ROOT/'.artifacts/anura'
pdf=pdfium.PdfDocument(out/'ANURA-Guide-proof.pdf')
sheet=Image.new('RGB',(1200,((len(pdf)+3)//4)*455),'#dce5df')
d=ImageDraw.Draw(sheet)
for i,page in enumerate(pdf):
    im=page.render(scale=.48).to_pil().convert('RGB')
    sheet.paste(im,((i%4)*300+5,(i//4)*455+24));d.text(((i%4)*300+10,(i//4)*455+5),f'PAGE {i+1}',fill='black')
sheet.save(out/'docx-contact.jpg',quality=87)
for i in [0,2,7]:
    pdf[i].render(scale=1).to_pil().save(out/f'docx-page-{i+1}.png')
print('Rendered',len(pdf),'DOCX proof pages for visual inspection.')
