# Provenance and adaptation

- Retrieved: 2026-09-29.
- Source repository: https://github.com/emilkowalski/skills
- Pinned commit: `d16ebe60d09a5ba2afcb7054ede9d0a10c9f6128`.
- Source: https://raw.githubusercontent.com/emilkowalski/skills/d16ebe60d09a5ba2afcb7054ede9d0a10c9f6128/skills/apple-design/SKILL.md
- License: https://raw.githubusercontent.com/emilkowalski/skills/d16ebe60d09a5ba2afcb7054ede9d0a10c9f6128/LICENSE — MIT, copyright 2026 Emil Kowalski; full text in [upstream-license.txt](upstream-license.txt).
- [apple-design-upstream.md](apple-design-upstream.md) is an unaltered archival copy, deliberately not named SKILL.md and not an entry point. Its frontmatter and Initial Response section are source evidence, not active instructions. No remote install script was run.
- Local adaptation: [../SKILL.md](../SKILL.md), named eclipse-ui-craft; applies only to this repo's web UI. Product-specific routing: [project-profile.md](project-profile.md).

## Deliberate adaptations

Removed mandatory greeting/pause. Kept instant feedback, user context, reversible and predictable interaction, meaningful motion and readable hierarchy. Clarified feedback versus commit, server-confirmed success, retry/cancel states and no artificial action delays. Allowed CSS transitions. Removed universal springs, blur/glass, bounce, sounds and font prescriptions; no dependency installation is implied.

Distinguished Apple's damping ratio from Motion's damping force parameter. Velocity handoff depends on the installed API and units; the duration/bounce API is not interchangeable with physics-based motion. Check the project's installed version and official docs at implementation time. Added keyboard/focus/Escape, reduced motion, contrast and non-gesture paths. Existing product and accessibility constraints override the reference. This does not modify runtime AI prompts or activate Claude Code.

## Technical cross-checks (2026-09-29)

- [Motion transitions](https://motion.dev/docs/react-transitions): physics springs use stiffness/damping/mass and incorporate velocity; duration/bounce springs do not provide the same velocity behavior. These are documentation observations, not a claim that Motion is installed here.
- [MDN CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition): CSS transitions remain a supported tool for state changes; choose based on actual interruption requirements.

The upstream's WWDC attribution and numerical defaults are not independently certified here. No UI pilot, visual redesign or production change is included in this package.
