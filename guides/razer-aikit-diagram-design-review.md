# Razer AIKit и Diagram Design: проверка и план внедрения

> Проверено 13.08.2026 по canonical GitHub repositories, лицензиям, release/plugin metadata,
> документации, Compose и CI. Внешние containers и skills не устанавливались и не запускались.

## Короткое решение

| Находка | Решение | Проблема и проект | Что разработать | Ценность | Сложность / приоритет | Риск и следующий шаг |
|---|---|---|---|---|---|---|
| Razer AIKit | Добавить в roadmap | AI Hub и Sentinel: понять, даёт ли единый NVIDIA stack преимущество для локального inference/fine-tuning | Isolated GPU benchmark, Hardware Doctor, model/dataset license gate и reproducible run manifest | Решение на измерениях вместо рекламного сравнения с Ollama/LM Studio | L / P2 | Готовый Compose открыт и unauthenticated; сначала hardened disposable lab |
| Diagram Design | Внедрить сейчас | Все Eclipse products: быстро объяснять архитектуру, процессы и решения в фирменном стиле | Owned Eclipse Diagram Contract, pinned source, static-first HTML/SVG, evidence ledger и review gate | Понятнее документация, roadmap и product story без ручной сборки каждой схемы | M / P1 | Moving plugin с Read/Write; закрепить commit и проверить первый public fixture |

## Razer AIKit: что подтверждено

Razer AIKit — официальный preview-проект Razer под Apache-2.0. Версия v0.6.0 объединяет:

- rzr-aikit CLI для download, run, generate, stop и cluster lifecycle;
- vLLM для text inference, LlamaFactory для parameter-efficient fine-tuning и Ray для multi-GPU;
- JupyterLab notebooks для text, image, audio, video, voice и semantic-search experiments;
- Open WebUI, Prometheus и Grafana в расширенном Compose;
- NVIDIA GPU с Compute Capability 7.0 или выше; Windows 11 работает через WSL2.

Фраза «убийца Ollama и LM Studio» не подтверждена benchmark. AIKit решает более широкую задачу
GPU-лаборатории, но требует Docker, NVIDIA Container Toolkit, WSL2/Linux и заметно больше
операционного контроля. Для простого локального chat один большой stack может оказаться хуже
по времени старта и сопровождению.

## Почему официальный Compose нельзя публиковать

Конфигурация удобна для доверенного local lab, но не имеет production defaults:

- network_mode: host и ipc: host расширяют доступ container;
- Jupyter запускается с пустыми token и password на 0.0.0.0:8888;
- Open WebUI имеет WEBUI_AUTH=false;
- Grafana использует admin/admin и anonymous role Admin;
- services и основной image используют moving tags latest или main;
- Hugging Face token передаётся environment-переменной, а model cache монтируется с host.

Это **High risk для запуска конфигурации**, а не утверждение о вредоносности проекта. До исправления
этих defaults AIKit допускается только на disposable GPU host без production данных и inbound access.

### Eclipse GPU Lab — acceptance gate

1. Закрепить tag v0.6.0, source SHA, image digests и dependency lock; сохранить SBOM.
2. Один isolated host/VLAN, deny-by-default ingress/egress, без workspace и production credentials.
3. Убрать host network, включить auth, bind только к loopback/private interface, использовать test token.
4. Один небольшой public model и permissive dataset; license/model-card check до download.
5. Сравнить с текущим baseline: quality, tokens/s, p50/p95 latency, cold start, peak VRAM/RAM,
   disk, failures, energy estimate и operator time.
6. Для fine-tuning добавить held-out eval, contamination check, budget/time cap и artifact provenance.
7. Решение SHIP / KEEP AS LAB / REJECT принимает человек по отчёту; model или container ничего
   не публикуют автоматически.

Прямое внедрение в production сейчас не рекомендуется. Полезный результат первого этапа —
совместимый provider contract и Hardware Doctor в AI Hub, а не копирование всего UI AIKit.

## Diagram Design: что подтверждено

MIT-проект поставляет Agent Skill/plugin v2.3.2 с 27 visual types и standalone HTML + inline SVG.
Static output является default; optional motion имеет complete static frame, controls и
prefers-reduced-motion fallback. CI проверяет accessibility, geometry, motion, imports и plugin
package на Linux, Windows и macOS. Поддерживаются Mermaid/draw.io import и HTML/SVG/PNG export.

Ограничения:

- GitHub Releases отсутствуют, поэтому marketplace следует за moving repository;
- последний проверенный commit unsigned;
- plugin декларирует Read/Write, а onboarding может читать local design files или fetch-ить сайт;
- базовые templates используют Google Fonts; motion output содержит один inline controller;
- PNG export может установить/запустить Playwright Chromium.

## Eclipse Diagram Contract v1

Diagram Design используем как проверяемый input и reference, а не как право менять любой проект.

1. **Bounded brief.** Вход содержит audience, destination, visual type, size, source files и
   факты, которые нельзя менять. Агент не обходит workspace в поисках «интересных данных».
2. **Fidelity ledger.** Указать, что сохранено, объединено, упрощено или исключено. Не добавлять
   services, KPI, связи и статусы, которых нет в источнике.
3. **Eclipse visual tokens.** Использовать локальный eclipse-forge.visual-system.v1: deep-black,
   warm-gold, signal-blue, Outfit/Inter и проектный profile (product или operational).
4. **Static first.** Source of truth — static HTML с inline SVG. Motion добавляется только если
   объясняет последовательность; полный смысл виден без animation и JavaScript.
5. **No remote runtime.** Шрифты self-hosted. Запрещены remote scripts/styles/images, fetch, forms,
   iframe, navigation, inline event handlers и непроверенные HTML fragments.
6. **Accessibility.** role="img", уникальные title/desc, читаемый contrast, нецветовые labels,
   keyboard controls для интерактивности и reduced-motion/print fallback.
7. **Disposable preview.** Генерация только в bounded worktree; показываются semantic summary,
   полный diff и screenshot. Никакого auto-merge, deploy или записи в соседние проекты.
8. **Human gate.** Reviewer подтверждает факты, читаемость, visual contract, mobile/desktop export,
   license attribution и отсутствие secret/customer data.

### Первый pilot

- Материал: публичная схема [Library catalog → policy → static API exports → consumers](../web/diagrams/catalog-data-flow.html).
- Формат: doc-wide static HTML + SVG, mixed audience, balanced detail.
- Метрики: время подготовки, число factual corrections, читаемость на 390px/1440px,
  accessibility findings и размер output.
- Успех: ноль выдуманных связей, ноль remote requests, все labels читаемы, diff одобрен человеком.

### Первый controlled rollout

- [Eclipse AI Hub provider boundary](../web/diagrams/ai-hub-provider-boundary.html) показывает
  capability + hardware profile → Model Registry → readiness gate → interactive route, batch route
  или no safe match. Registry ничего не запускает; provider execution, BYOK и gateway auth остаются отдельными boundaries.
- [Hopson Sentinel capability boundary](../web/diagrams/sentinel-capability-boundary.html) показывает
  intent → tool proposal → capability gate → bounded executor, human approval или deny. Диаграмма не
  меняет permission engine и не даёт input/content управлять policy.
- Обе схемы используют только factual state из собственных README, contracts, roadmap и security
  документации проектов. TypeScript/Rust/provider implementation details объединены в fidelity ledger.

### Product workflow rollout

- [Eclipse DnD Forge Azgaar import boundary](../web/diagrams/dnd-azgaar-import-boundary.html)
  показывает текущий внешний handoff без iframe: campaign brief → Minimal JSON до 8 МБ → локальная
  проверка `pack.burgs`, очистка и dedupe → preview → явный import. Будущий Campaign Map Asset v1,
  регионы, дороги и связи не выданы за готовый функционал.
- [Eclipse media storyboard handoff](../web/diagrams/media-storyboard-handoff.html) показывает
  versioned `eclipse.release-storyboard.v1` из Shotforge → локальную fail-closed проверку 64 KB,
  пяти сцен и 15 секунд в Eclipse Media → ручной перенос текста, verify, render, review и publish.
  Text2Image честно показан отдельным источником скачиваемого PNG, а не уже подключённым asset pipeline.
- Обе схемы имеют отдельные desktop/mobile SVG, self-hosted fonts, reduced-motion/print fallback и
  не содержат runtime JavaScript, remote assets, forms, iframe или navigation.

После первого rollout тот же контракт применяется:

- **Eclipse Chat:** sequence, approval flow, Growth OS run lifecycle;
- **Eclipse DnD Forge:** campaign/data flow и безопасные GM/player boundaries, но не замена Azgaar maps;
- **Hopson Sentinel:** отдельные browser/voice trust boundaries и incident timelines поверх уже
  опубликованного базового capability gate;
- **Eclipse Media / Shotforge / Text2Image:** generation pipeline, provenance и export workflow;
- **Landing / Library / Educator-AI:** architecture visuals, explainers, roadmap и учебные схемы.

## Официальные источники

- [Razer AIKit repository](https://github.com/razerofficial/aikit)
- [Razer AIKit v0.6.0](https://github.com/razerofficial/aikit/releases/tag/v0.6.0)
- [Razer AIKit GPU compatibility](https://github.com/razerofficial/aikit/blob/main/docs/gpu-compatibility.md)
- [Razer AIKit Compose](https://github.com/razerofficial/aikit/blob/main/docker_compose/docker-compose.yaml)
- [Diagram Design repository](https://github.com/cathrynlavery/diagram-design)
- [Diagram Design skill](https://github.com/cathrynlavery/diagram-design/blob/main/skills/diagram-design/SKILL.md)
- [Diagram Design CI](https://github.com/cathrynlavery/diagram-design/blob/main/.github/workflows/ci.yml)
