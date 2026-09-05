"""Loopback-only preview, exposing the static web tree and library guides only."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse

ROOT = Path(__file__).resolve().parents[1]

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = unquote(urlsplit(path).path)
        base = ROOT / ('guides' if path.startswith('/guides/') else 'web')
        rel = path[len('/guides/'):] if path.startswith('/guides/') else path.lstrip('/')
        candidate = (base / rel).resolve()
        if not candidate.is_relative_to(base.resolve()) or any(p.startswith('.') for p in Path(rel).parts):
            return str(ROOT / 'web/not-found')
        return str(candidate)

    def list_directory(self, path):
        self.send_error(404)
        return None

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--port', type=int, default=4186)
    port = p.parse_args().port
    print(f'Gwen preview: http://127.0.0.1:{port}/experiments/gwen-reveal/', flush=True)
    ThreadingHTTPServer(('127.0.0.1', port), Handler).serve_forever()
