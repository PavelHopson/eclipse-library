"""Create a reviewed, allowlisted overlay; never publish or alter original assets."""
from pathlib import Path, PurePosixPath
import hashlib
import json
import re
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '.artifacts/gwen/publication'
TEXT = {'.html', '.css', '.js', '.json', '.md', '.txt'}

def checked_path(value):
    if not re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9._/-]*', value) or any(p in ('', '.', '..') for p in value.split('/')):
        raise ValueError('Unsafe publication path')
    return value

def inspect_docx(data):
    from io import BytesIO
    with zipfile.ZipFile(BytesIO(data)) as archive:
        if sum(e.file_size for e in archive.infolist()) > 20_000_000:
            raise ValueError('Unexpected document expansion')
        for name in archive.namelist():
            if re.search(r'vba|activex|embeddings/', name, re.I):
                raise ValueError('Active Office content rejected')
            if name.endswith(('.xml', '.rels')):
                xml = archive.read(name).decode('utf-8')
                if re.search(r'DDEAUTO|\bDDE\s|INCLUDETEXT|INCLUDEPICTURE|altChunk', xml, re.I):
                    raise ValueError('External Office field rejected')
                if name.endswith('.rels') and any(e.get('TargetMode') == 'External' for e in ET.fromstring(xml)):
                    raise ValueError('External Office relationship rejected')

def build():
    contract = json.loads((ROOT / 'contracts/gwen-publication.json').read_text(encoding='utf-8'))
    project = ROOT / checked_path(contract['projectRoot'])
    route = checked_path(contract['route'])
    expected = sorted(contract['publicFiles'] + [p for p in contract['internalFiles'] if (project / p).is_file()])
    actual = sorted(p.relative_to(project).as_posix() for p in project.rglob('*') if p.is_file())
    if actual != expected or any(p.is_symlink() for p in project.rglob('*')):
        raise ValueError('Unexpected project file or symlink; review publication contract')
    files = {}
    for name in contract['publicFiles']:
        checked_path(name)
        source = (project / name).resolve()
        if not source.is_relative_to(project.resolve()): raise ValueError('Asset escaped project')
        files[f'{route}/{name}'] = source.read_bytes()
    guide = checked_path(contract['guide'])
    files[guide] = (ROOT / guide).read_bytes()
    for path, data in files.items():
        if PurePosixPath(path).suffix in TEXT:
            text = data.decode('utf-8').replace('\r\n', '\n').replace('\r', '\n')
            if re.search(r'\b[A-Za-z]:[\\/]|file://|-----BEGIN (?:[A-Z]+ )?PRIVATE KEY-----', text):
                raise ValueError(f'Private material detected in {path}')
            files[path] = text.encode('utf-8')
        elif path.endswith('.docx'):
            inspect_docx(data)
    manifest = {'schemaVersion': 1, 'kind': 'gwen-library-overlay', 'deployed': False,
                'rightsReviewRequired': True, 'files': [
                    {'path': name, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()}
                    for name, data in sorted(files.items())]}
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for path, data in files.items():
        dest = OUTPUT / 'site' / path
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
    manifest_bytes = (json.dumps(manifest, ensure_ascii=False, indent=2) + '\n').encode('utf-8')
    (OUTPUT / 'release-manifest.json').write_bytes(manifest_bytes)
    archive_path = OUTPUT / 'Gwen-Library-Overlay.zip'
    readme = ('Eclipse Library / Gwen reveal\n\n'
              'Reviewed overlay, not a complete website or a deployment command.\n'
              'Do not use rsync --delete with this archive: it omits the rest of the Library.\n'
              'Entry: experiments/gwen-reveal/index.html\n'
              'Guide: experiments/gwen-reveal/guide.html\n'
              'The Library navigation and global guide manifest are integrated separately.\n'
              'No install, keys, API or build is required for the effect. Serve over local HTTP.\n'
              'Not deployed. Public redistribution rights for portraits require review.\n').encode('utf-8')
    packed = {**files, 'gwen-release-manifest.json': manifest_bytes, 'BUNDLE-README.txt': readme}
    with zipfile.ZipFile(archive_path, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for path, data in sorted(packed.items()):
            info = zipfile.ZipInfo(path, (2026, 9, 5, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            archive.writestr(info, data)
    digest = hashlib.sha256(archive_path.read_bytes()).hexdigest()
    (OUTPUT / 'SHA256SUMS.txt').write_text(f'{digest}  {archive_path.name}\n', encoding='utf-8')
    with zipfile.ZipFile(archive_path) as archive:
        if archive.testzip() is not None: raise ValueError('Archive CRC check failed')
        if sorted(archive.namelist()) != sorted(packed): raise ValueError('Archive inventory mismatch')
    print(f'Prepared {len(files)} public files; ZIP {archive_path.stat().st_size} bytes; CRC verified. No deployment performed.')

if __name__ == '__main__': build()
