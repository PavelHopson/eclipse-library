# Deterministic Media Factory

> Единый contract для rough cut, HyperFrames, Remotion, Carousel Studio и AI-provider handoff с frame-accurate render и правами на asset.

**Eclipse Media** владеет pipeline, **Shotforge** — storyboard/claims/face consent, **Text2Image** — prompt/reference provenance и cost preview.

## P0 MVP

`inspect → manifest → storyboard → static preview → render → visual QA → export`. FFprobe/FFmpeg собирают metadata; HyperFrames/Remotion получают deterministic timeline. Форматы: 16:9, 9:16, 1:1, carousel 1080×1350.

Acceptance: rerender совпадает по кадрам; нет overflow; captions в safe area; reduced motion; права/consent прикреплены; import не запускает provider; render approval не равен publish approval.

## P1

Rough-cut skill, contact sheets, edit-plan JSON, Carousel Studio, paper/3D/UGC templates. Стоимость provider видна до вызова, retries ограничены.

## P2

Faceless YouTube, Arcads и Higgsfield только opt-in paid pilot. Batch count, credits, avatar/product rights и publish подтверждаются раздельно.
