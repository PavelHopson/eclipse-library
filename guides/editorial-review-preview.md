# Editorial Review Preview

> Локальный fail-closed preview для изменения одной существующей карточки: pinned commit, semantic summary, полный diff и отдельное write-once решение без auto-merge.

Этот workflow нужен, когда карточка уже проверена редактором, но предложенные изменения ещё нельзя переносить в каталог вслепую.

Он создаёт отдельный detached Git worktree на точном commit, проверяет patch и показывает два evidence-файла:

- `semantic-summary.md` — какая карточка и какие поля меняются;
- `full.diff` — полный фактический diff без сокращений.

Workflow не выполняет patch-код, не устанавливает зависимости, не меняет текущую ветку, не создаёт commit и не запускает deploy.

## 1. Подготовить входные файлы

В Library откройте карточку → «Проверить карточку» → завершите четыре проверки → выберите «Готово к редакторскому merge» → «Скачать JSON».

Сохраните предложенные изменения как unified diff:

```powershell
git diff --output=proposal.diff -- catalog/resources.json guides/editorial-review-preview.md
```

Preview допускает только:

- `catalog/resources.json` — обязательно;
- `guides/<slug>.md`;
- `README.md` и `ROADMAP.md`.

Executable files, workflow/runtime-код, binary patches, symlinks, submodules, rename/copy, удаления и пути вне repository запрещены.

## 2. Создать disposable preview

Сначала получите полный SHA commit, относительно которого создан patch:

```powershell
git rev-parse HEAD
```

Затем выполните:

```powershell
node scripts/review-preview.mjs prepare `
  --packet C:\path\review-packet.json `
  --patch C:\path\proposal.diff `
  --base 0123456789abcdef0123456789abcdef01234567
```

Команда fail closed, если packet не завершён, итог не `approve`, SHA сокращён, patch не применяется чисто, изменяет другую карточку или выходит за editorial allowlist.

Результат находится в `.artifacts/review-previews/<resource-id>-<hash>/` и не попадает в Git.

## 3. Проверить результат

Обязательно прочитайте:

1. `semantic-summary.md`;
2. `full.diff`;
3. `manifest.json` и SHA-256 evidence.

Запустите quality, security и responsive checks внутри `worktree/`. Не используйте secrets, production accounts и непроверенные installer-команды.

## 4. Записать отдельное решение

Reject можно зафиксировать без технических checkmarks:

```powershell
node scripts/review-preview.mjs decide --preview <preview-directory> --decision reject --note "Источник не подтверждает claim"
```

Approve требует все три gate и явное подтверждение отсутствия auto-merge:

```powershell
node scripts/review-preview.mjs decide `
  --preview <preview-directory> `
  --decision approve `
  --checks quality,security,responsive `
  --confirm-no-auto-merge
```

Даже после approve `mergeAllowed` и `deployAllowed` остаются `false`. Решение означает только «можно вручную перенести проверенный diff в отдельной задаче».

## 5. Удалить disposable worktree

После approve/reject:

```powershell
node scripts/review-preview.mjs cleanup --preview <preview-directory>
```

Worktree удаляется, а packet, diff, hashes и решение остаются локальным audit evidence в `.artifacts/`. Команда `decide` создаёт decision один раз и не перезаписывает его, но локальные файлы не являются криптографически подписанным или внешне защищённым журналом.
