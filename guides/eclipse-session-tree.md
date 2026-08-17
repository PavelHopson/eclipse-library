# Eclipse Forge Codex session tree

**Updated:** 2026-08-17

This file is the durable registry for the existing Codex tasks. Codex currently has no API that can
re-parent already-created tasks, so the app hierarchy is represented by pinned numeric titles and
this source-of-truth map.

## Tree

```text
Eclipse Forge
├─ 00 Library · 019f94d4-a3f7-7111-9899-caa66cb929eb
├─ 10 Growth OS · 019fc87d-22f5-7313-a9f8-9e8b8dd77d0e
│  └─ 11 Social · 019fffdc-5ec0-7103-94bb-ee85833a904e
├─ 20 Future and plans · 019fe049-5800-7ff1-9d8c-e547bcd4a378
├─ 30 Eclipse Chat · 019f94d7-bfb3-7bb3-9e13-98e97b47bc60
├─ 40 DnD · Living World VTT · 019fffdc-3a69-76a1-8d3d-694c90429dd0
│  └─ 41 DnD · Legal Cleanup · 01a0000d-abf0-7950-961c-a24405e08952
└─ 50 Project design · 019f8fab-f2f7-7800-897d-a54e71ef211b
```

## Routing rules

- Library owns verified resources, licenses, evidence, deduplication and cross-project decisions.
- Growth OS owns brand, content, funnel and analytics; Social is its execution stream.
- Future and plans owns portfolio-level bets, not implementation status.
- Product tasks own code and production verification for their repositories.
- Design owns the visual contract and cross-project design review.
- A decision becomes implementation work only through `eclipse.handoff.v1`; chat history alone is not a specification.
