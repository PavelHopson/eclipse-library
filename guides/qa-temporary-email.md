# QA temporary email checklist

Reference: [Internxt Temporary Email](https://internxt.com/temporary-email).

Temporary inboxes are useful for quick registration tests, but they must not become a workaround for identity, bans, KYC or platform abuse.

## Allowed use

- Smoke-test a public signup flow.
- Check email verification copy and layout.
- Test "resend verification" and expired-link UX.
- Keep a personal inbox clean during non-sensitive experiments.
- Capture screenshots for docs when no personal data is involved.

## Not allowed

- KYC bypass.
- Ban evasion.
- Mass account creation.
- Fake customer identities.
- Production customer workflows.
- Any test that needs long-lived mailbox state.

## Prefer controlled test inboxes when

- the test is part of CI/e2e
- the mailbox must persist across days
- the scenario includes password reset
- the account touches payments, legal data, customer data or personal data
- the result must be reproducible

Good alternatives for stable tests:

- MailHog
- Mailpit
- a dedicated test domain
- provider sandbox inboxes
- local fixtures for signup state

## Product UX rule

If a test user needs email verification, the UI should clearly show:

- what email was used
- whether the email was sent
- what to do if it did not arrive
- how to resend
- how to change the email safely

Do not hide the next step behind instructions. The screen itself should guide the tester.

