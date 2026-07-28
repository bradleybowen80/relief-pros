# SOP-005: Payment Failure and Service Pause

**Status:** active
**Owner:** Brad (payment mechanics), Sarah (any client-relationship decision)
**Last reviewed:** 2026-07-28

## Purpose

Handle a failed ACH autodraft on a fixed, automatic schedule so the firm never carries a receivable and never chases an invoice. Payment terms are firm policy, stated in the engagement letter and the ACH authorization, not a negotiation.

## Trigger

An ACH autodraft fails. Monthly retainers draft on the 1st in advance. Cleanup drafts 50% at signing and the balance on delivery.

## Steps

### 1. Day 1: draft runs

1. Retainer drafts on the 1st for every active client. Receipts email automatically on success.
2. The system flags any failed draft the same day for the day-3 retry.

### 2. Day 3: automatic retry

1. The failed draft retries automatically on day 3.
2. On success, the receipt sends and the client returns to normal. Log the recovery.
3. On a second failure, notify the client through the portal that the draft failed and service will pause on day 10 if unresolved.

### 3. Day 10: automatic service pause

1. If the draft is still unresolved on day 10, service pauses automatically.
2. The client is notified through the portal that work is paused pending payment. No new categorization, close, or delivery proceeds while paused.
3. Work already delivered is not clawed back. Access to already-delivered reports is not cut off punitively; the pause is on new work.

### 4. Resolution

1. When payment clears, resume service and confirm the next scheduled draft is intact.
2. A client who repeatedly fails drafts is logged for the renewal scorecard (SOP-010).
3. Any decision to terminate for non-payment is Sarah's, follows the engagement letter's notice terms, and runs the wind-down courtesy of completing committed work through the termination date.

## Done when

- Every failed draft either recovered on the day-3 retry or moved to a day-10 pause on schedule.
- The client was notified through the portal at each step.
- No receivable was created and no invoice was chased.
- Repeat offenders are logged for renewal.

## If something goes wrong

- **A client asks to be invoiced instead of autodrafted:** decline. ACH autodraft is the only payment model. There is no invoicing flow to offer. (Settled decision 7, CLAUDE.md.)
- **A client disputes a draft:** route the relationship question to Sarah; Brad confirms only the mechanical facts (date, amount, authorization on file).
- **A draft fails firm-side (processor issue), not client-side:** do not pause the client. Fix the processor issue and re-run. Confirm before notifying anyone of a failure.

## References

- Payment model and terms: master handoff Sections 6 and 9, [CLAUDE.md](../CLAUDE.md)
- ACH authorization terms: [ach-debit-authorization.md](../04-clients/ach-debit-authorization.md)
- Renewal screening: [SOP-010](SOP-010-client-screening-scorecard.md)
