# Original motion publication — 2026-09-05

## Release scope

- Existing target branch: `master`; baseline `1519e54faadb81b007e892ccee591f8a74fe0051`. Release prepared in a clean detached worktree to exclude unrelated local work and the rejected outer-card redesign.
- Collection version: `1be7cbad01e64e66`; 43 complete scenes, 405 resolved resources. The publication contract pins 544 files after LF canonicalization of text.
- The owner explicitly declared authorship of the supplied materials and authorized publication of all 43 scenes. This is the owner's declaration, not an independent legal determination. Existing third-party notices and original source URLs remain; see `web/original-motion/THIRD_PARTY_NOTICES.md`.
- Original compositions and motion retained, visible text localized to Russian. Gallery wrappers remain flat; scroll/focus preservation, explicit stop/start and reduced-motion behavior retained. Gwen and ANURA remain discoverable with return links. Previous production gallery retained at `animations-lab-archive.html`.
- Flip-card's eight unavailable PNG layers recovered from a pinned archived export; slider uses the same Unsplash photo identities. Force-switch uses its original local interaction/autoplay logic; the unavailable external script's unknown extra effects cannot be certified identical.

## Verification before push

- All 48 commands from `.github/workflows/quality.yml` passed locally, including three new portable publication tests, existing catalog/project/guide checks, Gwen and ANURA publication checks.
- Generated catalog files were normalized with their existing builders because Windows checkout line endings made exact-text checks fail. Semantic data and Git diffs remained unchanged.
- Earlier local verification: 54 Node tests and seven isolated Edge release checks passed, including jQuery regressions and the complete 20-second deadline cycle. The preceding collection revision had 43-scene Edge coverage with zero JavaScript errors, external requests or broken images, plus scroll/focus and responsive checks. Production verification is still required after deployment; local checks do not establish deployment.

## Proportional security review

- Fixed locally, High upstream: retired jQuery 2.2.4 replaced with official 3.7.1, SHA-256 `fc9a93dd241f6b045cbff0481cf4e1901becd0e12fb45166a8f17f95823f0b1a`; copyright retained. Old distribution is outside the publication tree.
- Iframes grant only `allow-scripts`, not same-origin/forms/popups/navigation. Scene CSP denies connection, form, object and base sources. No live API, authentication, uploads or secrets are introduced.
- Every published text file passes a bounded secret/machine-path signature check. Assets are local and the contract rejects unexpected files, symlinks, missing resources, stale versions and retired jQuery. This is not a complete vulnerability inventory of every vendored dependency.
- Existing pinned Actions, same-repository successful-master quality gate, SSH host verification and deployment concurrency remain unchanged. New post-deployment smoke checks compare all 544 canonical file hashes and relevant MIME types against the approved contract.
- No new Critical/High findings beyond the corrected jQuery dependency were identified in this scoped review. Remaining compatibility limits: no new full Firefox/Safari, physical-touch or all-scene FPS certification.

## Deployment evidence boundary

At this document's creation, commit/push/deployment had not yet run. A successful `Deploy library web to VPS (eclipse-forge.ru)` run for the release commit plus production smoke/browser checks must be recorded before claiming publication.
