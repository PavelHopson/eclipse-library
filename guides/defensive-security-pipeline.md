# Defensive Security Pipeline

> Security-проверка изменений и Strix-пилот только на собственных разрешённых целях: evidence, patch, rescan и rollback.

## P0

Проверяются secrets, unsafe logging, access control, injection, SSRF, XSS, CSRF, file/URL processing, rate limits, dependencies и CI supply chain по затронутой поверхности.

Findings маркируются Critical–Low и разделяются на fixed, accepted, unresolved. Issue не закрыт, пока runtime/deployment/rotation незавершены.

## Strix pilot

Только explicit target allowlist и Docker sandbox. Сначала read-only scan; затем approval конкретного patch; после patch — отдельный rescan. Никакой атаки внешних целей и `curl | bash` без чтения source.

Acceptance: PoC воспроизводим; severity/blast radius понятны; High/Critical fix имеет regression test; before/after подтверждён rescan; rollback документирован.
