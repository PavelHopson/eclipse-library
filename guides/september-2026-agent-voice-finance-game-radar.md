# Радар 1 сентября 2026: агенты, голос, финансы и коллекции

> Проверка пяти GitHub-репозиториев и двух сайтов по официальным README, лицензиям, manifests и условиям. Запись в Library не устанавливает код и не является security endorsement.

## Короткое решение

| Источник | Решение | Куда применить | Что именно взять |
|---|---|---|---|
| StockAgent | Только reference | CryptoPulse 2077, AI Hub | Синтетические market scenarios и воспроизводимые agent experiments |
| II-Agent | Roadmap pilot | Eclipse AI Hub, Eclipse Claw | Workspace, provider, skill и sandbox contracts |
| RealtimeVoiceChat | Только reference | Hopson Sentinel, Eclipse Chat | Barge-in, partial transcript и turn-taking state machine |
| Ruflo | Roadmap pilot | Eclipse Claw, AI Hub, oh-my-claudecode | Budgeted coordination, receipts, memory boundaries и observability |
| AIRI | Roadmap pilot | Hopson Sentinel, Eclipse Chat | Voice/provider boundary и изолированный avatar renderer |
| Backloggd | UX reference | Eclipse Library, Valhalla | Личные статусы, списки, журнал прогресса и opt-in social layer |
| FMHY | Общий каталог отклонён | Sentinel — только ручной privacy research | Taxonomy privacy tools; без downloads, torrents и автоматической рекомендации |

## 1. StockAgent: лаборатория, а не торговец

[StockAgent](https://github.com/MingyuJ666/Stockagent) описывает LLM-агентов в искусственной биржевой среде и связан с исследовательской публикацией. Он полезен для **CryptoPulse 2077** как источник идеи scenario lab: синтетические события, фиксированные правила, несколько типов участников и сравнение результатов моделей.

Не переносим код и не подключаем брокеров. В репозитории нет LICENSE, зависимости старые, а quick start требует отдельный PromptCoder без закреплённой ревизии. Собственная реализация должна использовать только синтетические данные, фиксированный seed, budget и дисклеймер «не финансовая рекомендация». Любой реальный ордер остаётся вне этого проекта.

## 2. II-Agent: разобрать на contracts

[II-Agent](https://github.com/Intelligent-Internet/ii-agent) — активный Apache-2.0 self-hosted workspace с multi-provider chat, planning, research, skills, file/document tools и интеграциями. Это сильный reference для **Eclipse AI Hub** и **Eclipse Claw**, но не готовый модуль: полный запуск поднимает backend, frontend, Postgres, Redis и MinIO и требует внешних API keys.

Первый пилот должен проверить одну цепочку `plan → sandbox → artifact → receipt` на синтетических данных. Provider keys остаются server-side; tools получают allowlist, timeout и resource budget; Gmail, GitHub, filesystem и другие внешние действия требуют отдельного approval.

## 3. RealtimeVoiceChat: идеи хорошие, поставка неприемлема

[RealtimeVoiceChat](https://github.com/KoljaB/RealtimeVoiceChat) ясно показывает low-latency pipeline: browser audio chunks → WebSocket → STT → LLM → TTS, partial transcripts, adaptive silence и interruption. Эти идеи подходят **Hopson Sentinel** и **Eclipse Chat**.

Сам проект использовать как зависимость нельзя: автор прекратил активное сопровождение, LICENSE отсутствует, installer скачивает отдельный wheel, а Docker-инструкция предлагает safety-reduced модель. Делаем собственную state machine `idle/listening/transcribing/thinking/speaking/interrupted/error`, тестируем русские имена, шум, echo и barge-in на synthetic/consented audio. Микрофон включается только явно и всегда показывает активное состояние.

## 4. Ruflo: один contract вместо полного swarm

[Ruflo](https://github.com/ruvnet/ruflo) — новое имя существующей в Library карточки Claude Flow. MIT-проект добавляет swarms, hooks, MCP, memory, plugins, budgets и observability вокруг Claude Code и Codex. Поэтому карточка обновлена, а не продублирована.

Полный `npx ruflo init` не запускаем: CLI меняет agent configuration, регистрирует MCP и hooks, а расширенный режим включает daemon и большую plugin/dependency surface. Для **Eclipse Claw** берём один first-party vertical slice: ограниченная задача, два исполнителя, общий budget, проверяемый result receipt и human approval. Federation, autonomous loops и persistent memory с production data пока исключены.

## 5. AIRI: Presence без лишних полномочий

[Project AIRI](https://github.com/moeru-ai/airi) активно развивает self-hosted virtual character с realtime voice, WebGPU/WebAudio, локальными и облачными providers, VRM/Live2D и memory. В **Hopson Sentinel** и **Eclipse Chat** полезны три идеи:

1. единый ASR/TTS provider contract;
2. визуальные состояния слушает/думает/говорит/ошибка;
3. отдельный renderer, который не владеет tool permissions.

Не переносим монорепозиторий и игровые/computer-control integrations. Первый avatar — first-party synthetic asset; renderer не получает keys, clipboard, filesystem или PC tools. Голос, персона, память и cloud processing включаются раздельно и имеют понятное удаление данных.

## 6. Backloggd: хороший UX, но не источник данных

[Backloggd](https://backloggd.com/) показывает сильный паттерн личной коллекции: backlog/status, платформа, время, журнал, оценки, wishlist, приватные и публичные списки, activity feed. Для **Eclipse Library** это превращается в статусы `Проверить → Изучаю → Внедрено → Отклонено`, приватные подборки и журнал эксперимента. Для **Valhalla** полезны progress log и коллекции целей.

Не копируем код, reviews, images или game catalog и не скрейпим сайт. Terms требуют использовать предоставленный интерфейс, а данные игр приходят из IGDB. Социальный слой возможен только после opt-in privacy, moderation, block/report, export и deletion.

## 7. FMHY: общий каталог не принимаем

[FMHY](https://fmhy.net/) прямо содержит разделы streaming, downloading и torrenting. Это создаёт copyright, malware и link-drift risk, поэтому главная страница не добавляется как полезный ресурс и исключена из agent recommendations.

Существующая карточка [FMHY Privacy](https://fmhy.net/privacy) сохранена как restricted manual reference для **Hopson Sentinel**. Любой найденный там инструмент становится отдельным proposal только после проверки canonical owner, license, release signature/hash, permissions, advisories и поведения в изолированной среде. Библиотека не даёт инструкций по обходу DRM, paywall или access controls.

## Порядок внедрения

1. **Eclipse Library:** first-party статусы и приватные списки по мотивам Backloggd — без внешних данных.
2. **Hopson Sentinel / Eclipse Chat:** собственная voice state machine и Russian latency/barge-in benchmark по мотивам RealtimeVoiceChat и AIRI.
3. **Eclipse Claw / AI Hub:** один budgeted coordination pilot с receipts по мотивам Ruflo и II-Agent.
4. **CryptoPulse 2077:** маленький synthetic market lab без broker integration.

## Security gate

- никакого direct install из Library;
- commit/version pin и полный review manifests, hooks, install/postinstall и binaries;
- secrets только server-side или в OS credential store;
- deny-by-default network/filesystem/tools;
- synthetic data first, отдельное согласие на microphone и cloud audio;
- cost/time/token budgets, cancellation и immutable receipts;
- preview + approval для внешних, финансовых и системных действий;
- отсутствие LICENSE означает отсутствие разрешения на копирование кода;
- FMHY links и Backloggd data не импортируются автоматически.
