# Library decision-model pilot — 2026-10-11

## Quality/cost comparison — 2026-10-18, local only

User approved the proposed Library-first comparison. Implemented in the verified `E:/projects/eclipse-library` master checkout, preserving unrelated dirty work. No branch, commit, push, deployment, provider setup, subscription purchase, model training or paid inference. Existing Decision Lab localStorage and queue are unchanged.

Added `compare.html`, `compare.css`, `compare.mjs`, `compare-core.mjs` alongside the existing pilot, linked from its index. Test rows are frozen with a SHA-256 identity; built-in assistant-suggested records remain excluded. Both exported workloads have the same item IDs/text and omit gold labels, rationales and source groups. Cascade protocol checks ambiguous items and every fifth item selected before inference. This is a systematic audit sample, not a claim of random sampling.

Strict bounded JSON imports reject missing/duplicate/foreign IDs, wrong hashes, incomplete runs, missing cascade checks, invalid expenses and mixed run modes. Results are model outputs before human correction. Metrics include per-class recall, unflagged mistakes, review workload, elapsed time, tokens and incremental API spend. Unknown usage remains null. Subscription/local runs are not converted into API dollars. A minimum 50 records, 10 source groups and 5 records per class is a chosen pilot gate, not statistical proof. No automatic model acceptance.

Comparison is memory-only and uses no network, secret fields or existing localStorage. Download/restore package includes the gold set and is for the evaluator only. Two accepted runs cannot be silently replaced. Operator attestations and usage are declarations, not authenticated or provider-verified evidence. Source/group independence still needs editorial review; normalized duplicate checking is not semantic deduplication.

Public guide added: `guides/codex-quality-cost-pilot.md`; existing pilot guide linked to it. Manifest generator was run only after confirming its sole delta was the new guide (95 -> 96 entries; no extra/changed existing entries). Current OpenAI pricing and subagent docs were checked; no exact model/pricing defaults or third-party configuration were installed. Added focused CI checks, not run on GitHub.

Verification: 29/29 Node tests (comparison, Decision Lab, guide loading), both new modules syntax, navigation, guide manifest and tracked whitespace checks PASS. In-app browser at loopback port 4231 exercised dataset import, freeze, A import, wrong-hash B rejection without losing A, valid B import, package download and restoration of the actual downloaded file. Synthetic eight-item QA records only; their perfect metrics are not model evidence. New page warning/error log empty. Mobile 390x844: document client/scroll width both 375; table has local horizontal overflow, accessible region and keyboard focus. Desktop screenshot inspected, viewport reset, page returned to empty state. New guide heading and body rendered in the Library viewer. Screenshot: `C:/Users/garaa/Documents/Codex/decision-comparison-preview.png`.

QA generator: `node scripts/decision-comparison-fixtures.mjs` writes explicitly synthetic fixtures under the system temporary directory, not public web data. Browser download `E:/ADMIN_HOPSON_PC/Загрузки/library-comparison-private.json` is also a synthetic QA package, not human-reviewed gold or a real model run.

Local entry: http://127.0.0.1:4231/experiments/decision-lab/compare.html . Preview uses existing `scripts/serve-gwen-preview.py --port 4231` (loopback web + guides only). No production change. Remaining: independent gold set, chosen/approved model execution, actual measured runs and editorial interpretation. No Critical/High issue found in bounded import/render review; this is not a full security audit. Low/accepted limitation: declarations, expense inputs and downloaded gold packages depend on operator handling.

## Local catalog QA follow-up 2026-10-11

User requested continuation after the career-flow QA findings. In `E:/projects/eclipse-library`,
regenerated only `web/guides.json` after asserting that the sole difference was the missing
`decision-model-library-pilot` entry (no changed or extra entries). Manifest check now passes:
94 guides. Navigation + Decision Lab tests: 18/18 PASS. In-app local browser search for
«Проверка материалов» finds the guide and opens `#guide/decision-model-library-pilot`.
No runtime, guide text, catalog resource data, review rows, commit, push or deployment changed in this follow-up.
This supersedes only the older local note below saying the guide was not registered.

## Publication 2026-10-11 (supersedes local-only scope below)

User explicitly authorized publication. Release assembled in clean existing master checkout `C:/Users/garaa/Documents/Codex/decision-lab-release-20261011`, based on GitHub `14b0d44c1781cd2f54218974169671b492cda8c4`. Original E:/projects checkout and unrelated dirty work preserved; no new branch created.

Published commit: `0c47e810016a743040c151db0c301557cad162fc`. Allowlist: seven Decision Lab runtime files, focused test, pilot guide, two concise source guides required by the queue, generated guides manifest, and the two Decision Lab checks added to existing quality workflow. No private review rows or drafts included. The two source guides in this release are concise public educational versions, not the longer local drafts with cross-product implementation details. Do not overwrite their published versions by bulk-copying the dirty checkout.

Local release checks: 18/18 Decision Lab tests, JavaScript syntax, guide manifest, navigation, catalog index/runtime/license queue/exports and diff whitespace checks PASS. Catalog generators normalized Windows CRLF output without any catalog content change. Existing shared CSS matches the verified local pilot. GitHub quality run `38147742861` and deployment run `38147767789` succeeded.

Production browser check: page loaded, Confirm advanced to next item and saved a row, Undo returned to 0/7, reload restored the empty state. Test row removed through normal Undo; no user rows were present initially. Browser warning/error log empty. Guide renders, directory search finds its title. The guide renderer rewrote root-relative experiment links to GitHub; fixed all three guide links to absolute production URLs and added regression assertions. Follow-up commit `bb833f42651c2951b2379bc393b6ba755f0cfee4`, quality run `38147975650` and deployment run `38148002570` succeeded. Reopened the guide through directory search and verified its rendered Open link points to the live production pilot. Production screenshot: `C:/Users/garaa/Documents/Codex/decision-lab-production.jpg`.

Verification limitation: optional shell payload hash comparison could not connect (Node HTTPS timeout; PowerShell TLS authentication error). No certificate checks disabled. Browser and deployment workflow smoke checks provide runtime evidence instead; do not claim independent byte-for-byte public payload verification.

Production target: https://library.eclipse-forge.ru/experiments/decision-lab/index.html#queue
Guide target: https://library.eclipse-forge.ru/#guide/decision-model-library-pilot

Local browser storage does not migrate to the public origin. Export saved decisions from the old localhost tab and import through Advanced mode on production; unfinished drafts are not in that export.

## Current state: interface v3 (supersedes earlier memory-only UI)

User authorized all proposed UX improvements. Implemented a ready suggestion with explanation, Confirm/Correct, automatic next material, progress/completion, editable saved decisions and one-step undo. Split selection, custom records, import and baseline metrics are collapsed in Advanced mode. Seven suggestions are assistant-prepared editorial proposals, explicitly separate from the unchanged rules engine. None become a dataset row before a user action.

Added `review.mjs` and `storage.mjs` within the existing pilot folder. Browser-local persistence uses only `eclipse-library.decision-lab.workspace.v1`: rows, selected item, per-item correction drafts, custom-material draft and last deletion. Export schema 3 retains proposed label/reason, confirmed/corrected outcome and action timestamp; versions 1/2 remain importable. This is a declaration of a UI decision, not authenticated identity or independent review. Source and hint provenance prevent those records entering test.

Persistence validates bounded data before use/write, reports quota/access/corrupt-data errors, preserves unreadable old data, checks a snapshot before writing and detects storage events from other tabs. Not a server transaction or multi-user system. On an unsaved replacement, the user is warned and can export/copy their draft first. JSON export contains decisions, not unfinished drafts. Old pre-v3 in-memory tabs must be exported before reloading; none were silently reloaded or cleared.

Verification: 17/17 Node tests PASS and app syntax check PASS. In-app runtime tested on isolated loopback origin port 4211: confirm, correct, reload retaining both row and correction draft, second-tab change notification and read-saved recovery, completion 7/7, undo to 6/7, collapsed advanced controls. Warning/error console empty. At mobile 390x844: no horizontal overflow, body content font 17px and confirmation target 44px high; screenshot inspected. Viewport reset. Main port 4210 opened as v3 with 0/7, no QA labels copied there. No model trained and no deployment.

Security review (bounded local surface): no Critical/High findings in reviewed paths. Imported strings use textContent; links require HTTPS without credentials or allowlisted relative guide syntax; CSP blocks connections/form submission. Local storage is accessible to same-origin scripts and can be cleared by the browser: disclosed limitation, not a secret store. Validation/error-path tests are not a full independent security audit.

The older sections below document previous implementation stages; their memory-only and unlabelled-queue instructions are no longer current. Current guide: `guides/decision-model-library-pilot.md`.

## Scope and authority

User confirmed: first a verifiable local Library pilot. Other requested Media / Chat / AI Hub / Educator scenarios are deferred, not implemented. No training, cloud data upload, commit, push or deployment in this task.

Checkout: E:/projects/eclipse-library, master. Existing extensive dirty work preserved. Only new pilot files were added; shared catalog, guides.json, index and app were not changed by this task.

## Files

- web/experiments/decision-lab/{index.html,lab.css,core.mjs,app.mjs}
- scripts/decision-lab.test.mjs
- guides/decision-model-library-pilot.md
- reports/2026-10-11-decision-model-pilot.md

Local entry: http://127.0.0.1:4210/experiments/decision-lab/index.html
Server: Python http.server bound to 127.0.0.1, directory web. Not a deployment.

## Delivered

Russian editor labeling, explicit rules baseline, guide/tool/news/review, human rationale, source-group split isolation, normalized duplicate rejection, train/calibration/test, JSON import/export, delete/undo, held-out test metrics and report. No probabilities, model claims, truth/license verdicts or action authorization. Input rendered via textContent. CSP blocks connections and form submission; no persistence or network calls in pilot scripts.

Data stays in tab memory until user downloads JSON. Before-unload warning is best effort; a requested download cannot prove the user kept the file. Export is a pilot schema, not directly Unsloth-compatible. Public/rights checkbox is a human declaration, not automatic verification. Semantic duplicates require manual review.

## Verification actually run

- `node --test scripts/decision-lab.test.mjs`: 7/7 PASS (routing, authority boundaries, validation, duplicates/group leakage, import/export, metrics and static safety assertions).
- `node --check web/experiments/decision-lab/app.mjs`: PASS.
- Codex in-app browser: synthetic test record created; recommendation shown without changing human label; evaluation computed on test only; delete/undo restored record and invalidated old report.
- Dataset downloaded to E:/ADMIN_HOPSON_PC/Загрузки/library-decision-dataset.json; duplicate reimport rejected with current data preserved; delete then import restored one record.
- Desktop visual check and mobile viewport 390x844: checked form, labels, controls; document clientWidth/scrollWidth both 375 (scrollbar excluded), no horizontal overflow.
- Browser warning/error log: empty at final check.
- Screenshot: C:/Users/garaa/Documents/Codex/decision-lab-preview.jpg.

The synthetic single-row 100% UI result proves metric wiring only, not real routing quality. Report download button was enabled after evaluation; dataset download was exercised end-to-end. Mobile viewport reset after test.

## Remaining

No trained model, independent labeled benchmark, calibration, GPU-fit proof or production verification. Need representative permitted materials, second-editor review, frozen source-disjoint splits, explicit baseline-vs-base-model comparison and adapter to a pinned Unsloth schema. Only then decide training budget and data destination. Do not promote the rules baseline to a trained-model claim.

The guide is a local Markdown draft and is deliberately not registered in the shared dirty catalog yet. Other project integrations remain outside this confirmed pilot stage. In Educator, current self-assessment alone is not confirmed achievement evidence.

## Continuation: source-backed editor queue

User requested continuation. Same local-only scope, no deployment or training. Added `web/experiments/decision-lab/candidates.mjs` with seven unlabelled assistant paraphrases: five existing catalog resources and two existing guide files. Official repository descriptions inspected for Dyad, TagGUI, ffmpeg-webCLI, React Bits and Flowsint; local guide contents inspected for the career case and own digital footprint. No source code was installed or run. No external queries using personal identifiers.

Queue supplies text and source group, never a gold label, rationale or rights approval. Draft overwrite is blocked. Source provenance survives version-2 export/import; version-1 remains supported without invented provenance. AI-prepared descriptions cannot enter test (UI and core/import validation). Repeated source IDs and same source URL crossing splits are rejected. Related Flowsint entries share a group; semantic grouping remains an editor responsibility. This is not a balanced or independently validated training set.

Verification: `node --test E:/projects/eclipse-library/scripts/decision-lab.test.mjs` 11/11 PASS; `node --check E:/projects/eclipse-library/web/experiments/decision-lab/app.mjs` PASS. In-app browser confirmed queue load with empty label and unchecked consent, disabled test option, no draft overwrite, save with visible provenance, queue counter/next item, test evaluation remaining disabled, and removal returning item to queue. QA label explicitly marked as UI test and removed, not retained as human training evidence. Browser warning/error log empty. Mobile override 390x844: document width/scrollWidth both 375, no horizontal overflow; override reset.

Next operator action: open `http://127.0.0.1:4210/experiments/decision-lab/index.html#queue`, review source and description, choose category with own rationale, confirm permitted use, save; repeat and export JSON before closing. A separate representative real-input, human-reviewed test set is still required before training or any quality claim.
