# 04-clients

Client-facing templates only: the documents every client touches, kept
generic and reusable.

**Never put real client data in this repo.** No names, books, statements, or
identifying details. Client files live in their designated systems. This
folder holds the blank forms, not the filled ones.

## What belongs here

- Onboarding checklist and welcome packet templates
- Engagement letter template
- ACH autodraft authorization template
- Offboarding is a procedure, not a template: see [SOP-016](../01-sops/client-lifecycle/SOP-016-offboarding.md)

## Rules that apply here

- Engagement letters must scope services to bookkeeping only and explicitly
  exclude tax preparation, payroll, and AP/AR (see [CLAUDE.md](../CLAUDE.md)).
- Payment terms in every template: ACH autodraft on the 1st. No invoicing
  language anywhere.
- Every template says "bookkeeping," never "accounting" (Texas naming gate).
- Templates are drafts until a Texas attorney reviews them once. Filled-in
  copies contain client data and go to the encrypted archive only.

## Index

| Document | Status |
|---|---|
| [engagement-letter-template.md](engagement-letter-template.md) | draft, needs attorney review |
| [ach-debit-authorization.md](ach-debit-authorization.md) | draft, needs attorney review |
| [welcome-email-template.md](welcome-email-template.md) | active. Sent at SOP-002 step 8. Carries the client's private upload link, which the website promises |
| [review-request-template.md](review-request-template.md) | active. Fires at SOP-001 step 12. Blocked on the Google review link until profile verification clears |

## Related

- The procedures that use these templates live in [01-sops/](../01-sops/README.md),
  chiefly [SOP-002 onboarding](../01-sops/SOP-002-client-onboarding.md) and the
  [SOP-009 pre-flight checklist](../01-sops/SOP-009-engagement-preflight-checklist.md).
