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
