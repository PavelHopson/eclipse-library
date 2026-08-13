import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const directory = new URL("../web/diagrams/", import.meta.url);

test("published diagrams are static, local and accessible", async () => {
  const files = (await readdir(directory)).filter((name) => name.endsWith(".html"));
  assert.ok(files.length > 0, "at least one diagram fixture is required");

  for (const file of files) {
    const html = await readFile(new URL(file, directory), "utf8");
    const label = "web/diagrams/" + file;

    assert.doesNotMatch(html, /<(?:script|iframe|frame|object|embed|form|input|button|textarea|select)\b/i, label + " contains executable or interactive HTML");
    assert.doesNotMatch(html, /\son[a-z]+\s*=/i, label + " contains an inline event handler");
    assert.doesNotMatch(html, /(?:javascript|vbscript)\s*:/i, label + " contains an executable URL");
    assert.doesNotMatch(html, /@import\b|<link\b/i, label + " loads an external stylesheet");
    assert.doesNotMatch(html, /\b(?:fetch|XMLHttpRequest|WebSocket|EventSource)\s*\(/i, label + " contains a network runtime");
    assert.doesNotMatch(html, /(?:src|href)\s*=\s*["']https?:/i, label + " contains a remote runtime asset");

    const cssUrls = [...html.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)]
      .map((match) => match[1])
      .filter((value) => !value.startsWith("#"));
    assert.ok(cssUrls.length > 0, label + " must use self-hosted fonts");
    cssUrls.forEach((value) => {
      assert.match(value, /^\.\.\/assets\/fonts\/[a-z0-9.-]+\.woff2$/i, label + " contains a non-local CSS asset: " + value);
    });

    const svgTags = [...html.matchAll(/<svg\b[^>]*>/gi)].map((match) => match[0]);
    assert.ok(svgTags.length > 0, label + " must include an SVG");
    for (const svg of svgTags) {
      assert.match(svg, /\brole=["']img["']/i, label + " SVG is missing role=img");
      const labelledBy = svg.match(/\baria-labelledby=["']([^"']+)["']/i)?.[1]?.trim().split(/\s+/) || [];
      assert.equal(labelledBy.length, 2, label + " SVG must reference title and description");
      labelledBy.forEach((id) => {
        const target = new RegExp("<(?:title|desc)\\s+id=[\"']" + id + "[\"']", "i");
        assert.match(html, target, label + " aria-labelledby target " + id + " is missing");
      });
    }

    assert.match(html, /@media\s*\(prefers-reduced-motion:\s*reduce\)/i, label + " must define a reduced-motion contract");
  }
});
