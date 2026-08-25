# Design QA: Eclipse Technology Registry

## Evidence

- Source visual truth: production Eclipse Library capture at `https://library.eclipse-forge.ru/`, saved as `.artifacts/design-qa/star-registry/source-library-desktop.png`.
- Browser-rendered final desktop implementation: `.artifacts/design-qa/star-registry/registry-desktop-final.png`.
- Full-view source/implementation comparison: `.artifacts/design-qa/star-registry/comparison-desktop-final.jpg`.
- Focused header comparison: `.artifacts/design-qa/star-registry/comparison-header.jpg`.
- Mobile implementation: `.artifacts/design-qa/star-registry/registry-mobile.png`.
- Tablet implementation: `.artifacts/design-qa/star-registry/registry-tablet.png`.
- Final browser/security report: `.artifacts/design-qa/star-registry/final-browser-report.json`.

## Normalization and target

- Source and implementation pixels: 1440 × 900. CSS viewport: 1440 × 900, `deviceScaleFactor: 1`, dark theme.
- Mobile viewport and pixels: 390 × 844. Tablet viewport and pixels: 820 × 1000.
- The source is the current Library production design language, not a pixel-identical Registry mock. Comparison therefore checks shared shell, typography, density, color tokens and interaction quality while allowing the new operational information architecture.
- Full-view comparison is sufficient for the dense results workspace; the header was also compared separately because brand, search, typography and primary navigation are the highest-fidelity shared surfaces.

## Findings and comparison history

- Initial P2, design-system drift: `registry.html` referenced stale `styles.css?v=22` while the current Library uses `v=23`. Fixed by using `v=23`; post-fix browser evidence loads only `/styles.css?v=23` and `/registry.css?v=1`.
- Initial P2, keyboard focus: product switching rebuilt every button and lost focus after Enter. Fixed by creating the product controls once and updating only `aria-pressed`; final evidence keeps focus on `star-crm` with a visible focus ring.
- Initial P2, console polish: the page had no explicit favicon and produced a 404. Fixed by reusing the existing Library favicon; final run has zero console errors and zero failed requests.
- No remaining P0, P1 or P2 visual or interaction findings after the second comparison.

## Required fidelity surfaces

- Fonts and typography: local Manrope, display hierarchy, compact mono metadata and line wrapping match the Library language. No Google Fonts or new font dependency is used.
- Spacing and layout: desktop keeps a dense results/policy split; tablet stacks policy below results; mobile uses one column without horizontal page overflow.
- Colors and tokens: the existing neutral, blue, gold, success and risk tokens are reused. No new gradient palette, decorative card stack or high-motion layer was introduced.
- Image and asset fidelity: the workflow has no content imagery. Existing brand treatment and favicon are reused; no placeholder or generated asset was introduced.
- Copy and content: the first screen explains the decision/runtime boundary, uses direct Russian labels and exposes owner, risk, benchmark, fallback and next step without relying on instructions.

## States, behavior and accessibility

- Loading, empty, error and retry states are browser-tested. Retry recovers from an initial HTTP 503.
- Stable `#entry/<id>` links restore the product, open details, scroll to the entry and focus its title.
- Desktop 1440 px, tablet 820 px and mobile 390 px have document width equal to viewport width.
- The mobile product strip keeps touch scrolling with `scrollbar-width: none`; page scroll remains `900 -> 900` after live search rendering.
- Mobile product controls are 58 px tall. Keyboard activation, focus-visible, reduced motion and skip navigation are preserved.
- Hostile JSON strings remain text: no injected elements, unsafe URL, dialog or JavaScript execution.
- The final browser run has no console errors or failed network requests.

## Final Result

final result: passed
---

# Design QA — Eclipse Vault Dial 3D

- Date: 2026-08-21
- Source reference: `.artifacts/vault-reference.png` (551 × 456, idle/closed state)
- Implementation: `web/animation-vault-dial.html`
- Comparison board: `.artifacts/vault-qa-board.jpg`
- Desktop viewport: 900 × 760
- Mobile viewport: 390 × 844
- States reviewed: idle, error, open, reduced motion

## Focused comparison

The implementation preserves the source hierarchy: compact security identity, dominant mechanical dial, six-digit code and one primary Unlock action. The visual contract intentionally advances the reference from a flat panel to a deeper Eclipse-owned mechanism with chamber depth, restrained blue material lighting, door hinges, three retracting pins and a bounded 3D door swing.

## Functional visual acceptance

- closed state reads as a secure object before interaction;
- open state clearly reveals depth and confirms the state change;
- status color, feedback text and button label agree in idle/error/open states;
- drag, wheel, keyboard and primary button converge on the same state machine;
- mobile keeps the object, code and action in one obvious vertical path;
- reduced motion removes parallax and large displacement without hiding confirmation;
- no horizontal overflow, console errors, page errors or failed requests.

## Comparison history

1. Source: flat framed vault with central dial and compact code action.
2. First 3D pass: layered chamber, mechanical dial and hinged door; functional browser QA passed.
3. Final pass: source-matched closed-state comparison added, accessible chamber preserved, pin selectors corrected, mobile and reduced-motion screenshots verified.

## Final result

Passed. The implementation is visually stronger than the source while preserving its hierarchy, task clarity and Eclipse visual language. No blocking mismatch remains.

---

# Design QA — Animation Lab full cinematic 3D system

- Date: 2026-08-21
- Implementations: all seven `web/animation-*.html` demos
- Desktop contact sheet: `.artifacts/all-3d-desktop-contact.png`
- Mobile contact sheet: `.artifacts/all-3d-mobile-contact.png`
- Browser harness: `.artifacts/all-3d-browser-qa.cjs`
- Viewports: 900 × 760 desktop, 390 × 844 mobile, 900 × 760 reduced motion

## Visual contract

All demos share Eclipse materials, lighting, bounded perspective and state feedback, but retain distinct metaphors: file stack, reactor, code cells, guardian, portal, mechanical vault and translucent glass. Depth communicates hierarchy or operation state; it is not a decorative card tilt applied blindly.

## Functional acceptance

- every demo exposes deterministic `window.__ready` and reproducible query states;
- pointer parallax reacts on desktop with a precise pointer and is removed on touch/mobile;
- reduced motion flattens each root object while preserving status, focus, error and success;
- upload retry, AI cancel, orbit cancel, both OTP confirmations and Guardian submit were exercised;
- desktop and mobile have no horizontal overflow;
- seven desktop and seven mobile captures show no clipped primary action or unreadable state;
- browser run completed with zero console, page and request errors.

## Security and performance

Standalone demos contain no remote scripts, remote origins, secrets, `eval` or `document.write`. Preview remains sandboxed with `allow-scripts` only. Per-frame depth uses transforms; auth and upload scenes remain presentation/state contracts and do not claim backend validation or production authority.

## Final result

Passed. The seven demos form one recognizable cinematic Eclipse collection without sacrificing mobile usability, reduced motion or the 3-second primary path.
---

# Design QA — Animation Lab card containment

- Date: 2026-08-21
- Source references: user captures `626 × 586` (Vault) and `500 × 520` (Guardian)
- Implementations: `web/animation-vault-dial.html`, `web/animation-reactive-login.html`
- Browser harness: `.artifacts/containment-qa.cjs`
- Captures: `.artifacts/containment-*-reference.png`, `.artifacts/containment-*-mobile.png`

## Defect and correction

The short embedded preview exposed two conflicting layout systems: Vault sized its chamber from viewport width, while both demos allowed decorative 3D backplates to extend beyond the owning card. The fix makes the visible card the hard containment boundary, sizes Vault from available `100dvh`, and keeps grid children shrink-safe.

## Functional acceptance

- Vault at `626 × 586`: card `510 × 504.8`, all chamber/control/feedback bounds contained;
- Guardian at `500 × 520`: card `390 × 478`, all form fields/actions/status contained;
- both demos at `390 × 844`: contained with no horizontal or vertical document overflow;
- reduced-motion state used for deterministic geometry; interactive state contracts remain unchanged;
- zero console or page errors in all four runs.

## Comparison result

The source captures showed the lower form edge colliding with or disappearing behind the preview boundary. Final captures retain the same Eclipse dark-tech hierarchy and 3D material language while restoring a complete visible border around the full task path.

## Final result

Passed. No P0/P1/P2 containment mismatch remains.

---

# Design QA — Remaining Animation Lab card containment

- Date: 2026-08-21
- Source references: user captures `690 × 578` (Upload Queue), `783 × 541` (AI Progress), `523 × 455` (dark OTP) and `590 × 455` (glass OTP)
- Implementations: `web/animation-upload-queue.html`, `web/animation-ai-progress.html`, `web/animation-otp-input.html`, `web/animation-otp-light.html`
- Browser harnesses: `.artifacts/containment-qa.cjs`, `.artifacts/containment-qa-motion.cjs`
- Captures: `.artifacts/containment-*-reference.png`, `.artifacts/containment-*-mobile.png`

## Defect and correction

The four remaining demos still used negative decorative backplate insets and fixed viewport assumptions. That let the perceived outer object exceed the visible owner even when the primary controls themselves appeared usable. Every root card now owns and clips its depth layers, uses a capped responsive width, accepts the dynamic viewport height and allows internal grid/flex children to shrink.

## Functional acceptance

- Upload Queue at `690 × 578`: card `610 × 476`; header, drop zone, all file rows and footer are contained;
- AI Progress at `783 × 541`: shell `660 × 459.5`; stage header, reactor, progress panel and cancel action are contained;
- dark OTP at `523 × 455`: card `470 × 413.2`; all six digits, validation status, primary action and resend footer are contained;
- glass OTP at `590 × 455`: card `480 × 367`; mark, title, six digits, primary action and status are contained;
- all four demos at `390 × 844` remain inside the viewport with zero horizontal or vertical document overflow;
- normal motion and reduced-motion runs both pass with zero console or page errors.

## Comparison result

The source hierarchy and unique 3D metaphors remain intact. The correction only removes accidental geometry outside the owning frame and keeps the complete primary task visible at the reference and mobile sizes.

## Final result

Passed. No P0/P1/P2 containment mismatch remains across the four previously omitted demos.

---

# Design QA — Task-first Library navigation

- Date: 2026-08-25
- Scope: `web/index.html`, `web/app.js`, `web/library-v2.css`, `web/library-shell.js`
- Desktop capture: `.artifacts/design-qa/library-v2-desktop-ready.png`
- Mobile capture: `.artifacts/design-qa/library-v2-mobile-final.png`

## Problem and correction

The previous landing page exposed navigation, view modes, categories, filters, health data and
guides at the same hierarchy. The replacement starts with one search, six outcome-oriented tasks
and one short guide. Technical categories remain available in an off-canvas section instead of
occupying the permanent reading path.

## Functional acceptance

- catalog, guides and projects are the only top-level destinations;
- task routes set the existing filters and move focus to the catalog without changing the data contract;
- the guide dialog restores focus, closes on Escape and supports direct search/task actions;
- the guide directory provides topic filters, local search, a useful empty state and progressive disclosure;
- the 390 px probe reports no page-level horizontal scroll; intentional chip rows scroll inside their owners;
- reduced motion removes spatial movement and keeps only a short opacity transition;
- new shell code contains no remote origins, `innerHTML`, `eval`, storage of secrets or external mutation.

## Final result

Passed for the implemented static navigation surface. Production analytics and Web Vitals remain a
post-deploy observation step and are not claimed by local QA.
