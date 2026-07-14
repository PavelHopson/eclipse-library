# Claude Design Skills: карта применения для Eclipse Forge

> Источник: [Novitckii · 42 Claude design skills](https://www.novitckii.com/resources/claude-design-skills/). В ссылку на сайт не сохраняем query/token. Материал полезен не как “поставить всё”, а как карта слоёв: taste, motion, tokens, visual feedback, AI interaction, prompt architecture, trust.

## Главный принцип

Не ставить 42 скилла одновременно.

Рабочий стек для одного проекта:

1. один базовый taste-layer;
2. один motion-layer;
3. один token/design-system layer;
4. один feedback-loop layer с реальным браузером или скриншотами.

Если поставить всё сразу, агент начнёт конфликтовать сам с собой: разные правила типографики, разные motion-подходы, разные запреты и разные UX-приоритеты.

## 6 слоёв

| Слой | Что закрывает | Что брать нам |
|---|---|---|
| Frontend & UI | Вкус, анти-slop, сетка, типографика, компоненты | `design-taste-frontend`, `frontend-design`, `impeccable` |
| Image, Graphics, 3D & Video | Картинки, motion, Remotion, 3D, canvas graphics | `canvas-design`, `algorithmic-art`, `remotion-superpowers`, `blender-motion` |
| Claude Design canvas | Мокапы, дизайн-системы, шаблоны, deck flow | Использовать как reference/handoff, не как production source |
| AI Product Interaction | Поведение AI-продукта, turn-taking, repair, disclosure | `context-window-design`, `conversation-patterns`, `progressive-disclosure`, `mixed-initiative-flow` |
| Prompt Architecture | Системные промпты, persona, tone, templates, constraints | `system-prompt-structure`, `persona-architecture`, `constraint-specification` |
| Trust & Safety | Отказы, прозрачность, confidence, доверие | `guardrail-design`, `trust-calibration`, `transparency-patterns` |

## Рекомендуемые стеки под наши проекты

| Проект | Stack skills | Зачем |
|---|---|---|
| EclipseForgeLanding | `design-taste-frontend` + `animate` + `theme-factory` + `playwright-mcp` | Держать high-end визуал, motion и автопроверку responsive через браузер |
| Eclipse Chat | `context-window-design` + `progressive-disclosure` + `feedback-loops` + `trust-calibration` + `playwright-mcp` | Чат должен быть не Discord clone, а понятная operational platform с AI-memory и безопасной обратной связью |
| Eclipse DnD Forge | `mixed-initiative-flow` + `conversation-patterns` + `multimodal-orchestration` + `emotional-design` | Мастер, игрок и AI не должны мешать друг другу; агент должен вести сцену, но не забирать контроль |
| Eclipse Media / Shotforge / Text2Image | `canvas-design` + `algorithmic-art` + `remotion-superpowers` + `nano-banana` | Генерация визуалов, промо, motion-пакетов и серийного контента |
| Hopson Sentinel | `system-prompt-structure` + `context-window-design` + `guardrail-design` + `transparency-patterns` | Локальный оператор должен помнить контекст, но показывать границы уверенности и действий |
| oh-my-claudecode | `impeccable` + `theme-factory` + `playwright-mcp` + `constraint-specification` | Аудит скиллов/MCP, единый стиль output и проверяемые правила |

## Что добавлять в первую очередь

### 1. Playwright MCP как “глаза агента”

Самая полезная идея из подборки: агент не должен верстать вслепую.

```bash
claude mcp add playwright -s user -- npx @playwright/mcp@latest
```

Использование:

```text
Открой приложение, сделай screenshots на 1920 и 390 ширине, сравни с reference и исправь расхождения.
```

### 2. Taste-layer

Для наших сайтов и интерфейсов базовый слой:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

**The Taste / `design-taste-frontend`** — дефолтный anti-slop слой для лендингов, портфолио,
маркетинговых страниц и редизайна. Он полезен не тем, что “делает красиво”, а тем, что
заставляет агента сначала выбрать дизайн-read: продукт, аудиторию, визуальное направление,
dials `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY`, затем держать типографику,
spacing, motion и pre-flight в одном стиле.

Где включать сразу: `EclipseForgeLanding`, landing/home экраны `Eclipse Chat`, промо-страницы
`Eclipse DnD Forge`, project showcase, portfolio pages, kwork-offer pages.

Где не делать главным: тяжёлые dashboards, admin-панели, таблицы, CRM/операционные базы.
Там Taste можно использовать только для polish, а базовые паттерны брать из Carbon / Fluent /
Atlassian / Polaris / Primer по смыслу продукта.

Альтернативы:

```bash
npx skills add anthropics/skills --skill frontend-design
npx impeccable install
```

### 3. Motion-layer

```bash
npx skills add delphi-ai/animate-skill --skill animate
npx skills add kylezantos/design-motion-principles
```

### 4. AI interaction-layer

Особенно важно для Eclipse Chat и DnD:

```bash
npx skills add Owl-Listener/ai-design-skills --skill context-window-design
npx skills add Owl-Listener/ai-design-skills --skill conversation-patterns
npx skills add Owl-Listener/ai-design-skills --skill progressive-disclosure
npx skills add Owl-Listener/ai-design-skills --skill mixed-initiative-flow
npx skills add Owl-Listener/ai-design-skills --skill feedback-loops
```

## Shortlist из 42

| Группа | Навыки |
|---|---|
| Frontend & UI | frontend-design, impeccable, design-taste-frontend, animate, design-motion-principles, theme-factory, Figma MCP, playwright-mcp, brandkit, designer-skills |
| Image / Graphics / Video | nano-banana, banana-claude, canvas-design, algorithmic-art, remotion-superpowers, claude-remotion, blender-motion, aftereffects-motion |
| Claude Design canvas | High-fidelity mockups, Design systems, Templates, Slide decks |
| AI Product Interaction | context-window-design, conversation-patterns, generative-ui, progressive-disclosure, multimodal-orchestration, mixed-initiative-flow, frustration-detection, feedback-loops |
| Prompt Architecture | system-prompt-structure, persona-architecture, tone-calibration, emotional-design, template-design, few-shot-patterns, chain-of-thought-design, constraint-specification |
| Trust & Safety | guardrail-design, trust-calibration, transparency-patterns |

## Правило внедрения

Перед установкой любого нового skill:

1. проверить репозиторий и автора;
2. посмотреть `SKILL.md` целиком;
3. проверить, не конфликтует ли он с нашим `PRODUCT_UX_PRINCIPLES.md`;
4. не добавлять в глобальный агент, если skill нужен только одному проекту;
5. зафиксировать решение в roadmap проекта.
