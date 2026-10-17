# Eclipse Library — product profile

Scope: static HTML/CSS/vanilla JS in [web/](../../../../web/). This is a curated resource and learning library, not a desktop OS imitation. Users find a resource, inspect evidence/limitations and return to their previous search.

## Existing system

- Read [repository guide](../../../../docs/repository-guide.md) and [README](../../../../README.md). Canonical content is separate from presentation; visual polish must not change review, license or agent-eligibility status.
- Reuse [styles.css](../../../../web/styles.css) and the [token snapshot](../../../../web/assets/eclipse-forge.tokens.json). Trace stylesheet order in [index.html](../../../../web/index.html); do not replace established fonts, icons, colors or spacing.
- [app.js](../../../../web/app.js) owns catalog interactions, guide loading and route state; [library-shell.js](../../../../web/library-shell.js) owns shell behavior. Keep search, filters, deep links, scroll and focus coherent.
- Animation Lab examples are isolated demonstrations, not a mandate to animate every catalog card. Do not import demo engines into the core catalog.

## Product invariants

Loading a guide must not block returning to the catalog. Failure must be distinguishable from empty content. Preserve the user's filters and selection on return. Read-only findings and editorial confidence are not installation approval. Local browser persistence is not cloud sync or server confirmation.

## Next small pilot — proposed, not implemented

Guide loading in app.js: inspect openGuide/closeGuide and the guideBack control. Make the pending/error/retry path interruptible so a late response cannot replace a newer selection or reopen a closed reader. Verify Back during slow loading, rapid A-to-B selection, missing guide, keyboard return and reduced motion. Preserve the catalog route and the existing fallback policy; no new renderer or motion library.

This is a code-grounded pilot proposal, not a claim that these failures were reproduced or fixed.

## Verification routing

For this documentation-only package: validate skill frontmatter, links, pinned source/license and diff scope. For a later web pilot: use the relevant checks in [.github/workflows/quality.yml](../../../../.github/workflows/quality.yml), including navigation/guide tests, then real browser paths. Do not trigger [deployment](../../../../.github/workflows/deploy-vps.yml) as a validation shortcut.
