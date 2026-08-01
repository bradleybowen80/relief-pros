# 01-sops

Numbered standard operating procedures. These are the machine: if Sarah or a
future hire follows the SOP exactly, the work comes out right without asking
anyone anything.

## Rules

- Filename: `SOP-001-short-name.md`, numbered in creation order, never reused.
- Every SOP starts from [_template.md](_template.md).
- Reference other SOPs by number (for example "then run SOP-003").
- An SOP that touches money, deadlines, or public copy gets checked against the
  hard rules in [CLAUDE.md](../CLAUDE.md) before it is marked active.
- The master handoff doc in Drive carries the original SOP list. When an SOP
  from that list gets formalized, it moves here and gets a number.

## Index

| SOP | Title | Status |
|---|---|---|
| [SOP-001](SOP-001-monthly-close.md) | Monthly close, per client | active |
| [SOP-002](SOP-002-client-onboarding.md) | Client onboarding | active |
| [SOP-003](SOP-003-cleanup-12-step.md) | Cleanup / catch-up, 12-step order | active |
| [SOP-004](SOP-004-document-chase.md) | Document chase | active |
| [SOP-005](SOP-005-payment-failure-service-pause.md) | Payment failure and service pause | active |
| [SOP-006](SOP-006-security-wisp.md) | Data security and WISP | active |
| [SOP-007](SOP-007-records-retention.md) | Records retention schedule | active |
| [SOP-008](SOP-008-kpi-dashboard.md) | KPI dashboard, reviewed monthly | active |
| [SOP-009](SOP-009-engagement-preflight-checklist.md) | Engagement pre-flight checklist (guardrails) | active |
| [SOP-010](SOP-010-client-screening-scorecard.md) | Client screening scorecard | active |
| [SOP-011](SOP-011-error-prevention-protocol.md) | Error prevention protocol | active |

### Client lifecycle set

Five checklists covering one client from signature to the day the engagement ends. They live
together in [client-lifecycle/](client-lifecycle/README.md) because they are one
arc, and they are numbered as SOPs like everything else.

| SOP | Title | Status |
|---|---|---|
| [SOP-012](client-lifecycle/SOP-012-day-one.md) | Day one, the first 24 hours after signature | active |
| [SOP-013](client-lifecycle/SOP-013-first-30-days.md) | The first 30 days | active |
| [SOP-014](client-lifecycle/SOP-014-first-quarter.md) | The first quarter | active |
| [SOP-015](client-lifecycle/SOP-015-weekly-hour.md) | The weekly hour, steady state | active |
| [SOP-016](client-lifecycle/SOP-016-offboarding.md) | Offboarding | active |

## Related

- Client-facing documents an SOP produces (letters, forms) live in
  [04-clients/](../04-clients/README.md).
- Prompts that automate an SOP step live in [05-prompts/](../05-prompts/README.md).
- The compliance calendar these SOPs run against lives in
  [00-company/compliance-calendar.md](../00-company/compliance-calendar.md).
