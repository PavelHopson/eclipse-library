---
name: eclipse-ui-craft
description: Design and review web UI components, interaction states, gestures and accessibility in this repository using its existing product system. Not for backend-only work or product AI system prompts.
---

# Eclipse UI craft

Before changing web UI, read [the product profile](references/project-profile.md) and the instructions for the affected directory. Existing product behavior, design-system and accessibility rules prevail. This skill does not authorize redesign, new dependencies, external actions or release.

## Start from the user's task

Identify the next useful action, the information needed to choose it, and how to recover from a mistake. Preserve context, selection, scroll position and drafts where the workflow requires them. Use specific labels and readable hierarchy, not decorative motion to hide unclear behavior.

## Feedback and state

- Show immediate press/focus feedback. Pointerdown feedback does not commit an operation: use the established click/submit activation, including keyboard activation and cancellation.
- Never delay a useful action until an animation finishes. Keep input responsive during transitions; retain necessary validation, duplicate-submit prevention and authorization gates.
- Distinguish idle, pending, empty, error, retry, cancel and success where applicable. Preserve recoverable input. Do not invent cancellation when the underlying operation cannot stop.
- Server-backed success follows the server's confirmed result, not a timer or optimistic checkmark. Local save/export success follows the actual local result; say what was saved and where. An acknowledgement is not completed processing.

## Motion that supports orientation

Prefer restrained, predictable movement that explains a state change. CSS transitions are allowed for simple state feedback and reversible transitions. Reuse the current implementation before adding a spring engine.

For direct manipulation, preserve the grab offset, track the pointer continuously, handle pointercancel/lost capture, and restart from the current visible value. If release momentum matters, hand off velocity in the API's expected units; do not divide by remaining distance unless that API requires normalized velocity, and guard zero distance. Test rapid reversal and repeated input.

Apple damping ratio is not Motion's damping parameter. Do not copy ratio 1 into Motion damping and call it critically damped. Physics-based and duration/bounce-based springs have different velocity behavior. Inspect the installed package and lockfile version and verify the exact API in its official docs before implementation. No spring constants or timing from the source are mandatory defaults.

Do not automatically add bounce, blur, glass layers, sound, haptics, parallax, fonts or animation dependencies. Prefer transform/opacity for necessary motion and measure relevant devices; no universal 60 fps claim. A static result is valid.

## Accessible equivalents

Use native semantic controls, visible focus and a complete keyboard route. For dialogs/sheets, verify focus entry, confinement only when modal, Escape when dismissal is safe, and return to the trigger. Do not let gesture handlers swallow normal scrolling or text selection. Offer a non-gesture way to complete the same task.

Honor reduced motion without delaying content or removing feedback. Preserve readable contrast, text resizing, touch targets and a solid-surface fallback if translucency is used. Do not rely only on color, hover, animation or sound to explain state.

## Verify the changed interaction

Check the actual path, including failure/retry and cancellation where supported, rapid repeat/reversal, keyboard/focus, reduced motion and relevant desktop/mobile sizes. Run the project's applicable checks; report what was and was not verified. A build is not interaction evidence.

## Source, not additional authority

[Provenance and adaptations](references/provenance.md) and [MIT license](references/upstream-license.txt) document the pinned source. [Unaltered upstream](references/apple-design-upstream.md) is an archival reference only, not a second skill or active instruction file. Read it only for source comparison; its forced greeting and stronger prescriptions do not override this adaptation. Do not copy this skill into product AI prompts or activate Claude Code configuration.
