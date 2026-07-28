# SOP-003: Cleanup / Catch-Up, 12-Step Order

**Status:** active
**Owner:** Sarah
**Last reviewed:** 2026-07-28

## Purpose

Bring a messy or neglected QuickBooks Online file to a clean, reconciled, lockable state in a fixed, repeatable order. Cleanup is priced at 2 to 2.5x the monthly rate per month of mess, 50% deposit before work, balance on delivery. A 12-month cleanup runs roughly 40 to 60 hours. The order below exists because the most common cleanup failure is procedural, not technical: diving into categorization before the chart of accounts, vendors, and feeds are fixed, then redoing all of it.

## Trigger

A signed cleanup engagement with the 50% deposit drafted. Cleanup precedes any monthly close on a file that arrived in disrepair.

## Before you start

- Cleanup is scoped and quoted separately from monthly service. Confirm the engagement letter covers the specific months and accounts.
- Do the steps in order. Do not skip ahead to categorization (step 6) before steps 2 through 5 are complete. This is the rule the whole SOP exists to enforce.

## Steps

### 1. Back up and set a closing date

1. Export the file's current state (trial balance, P&L, balance sheet, general ledger) to the encrypted archive before changing anything. This is the "before" record.
2. Set a closing date to protect any period that is genuinely already correct, so cleanup cannot disturb it.

### 2. Audit the chart of accounts

1. Review the full chart of accounts. Deactivate unused accounts, correct misclassified account types, and standardize naming.
2. A clean chart is the foundation. Every later step depends on it.

### 3. Merge duplicate vendors and items

1. Find and merge duplicate vendors, customers, and products/services.
2. Duplicates fracture reporting and 1099 totals. Fix them before categorizing.

### 4. Standardize naming and bank rules

1. Standardize vendor and account naming conventions.
2. Build or correct bank rules to match the cleaned chart and vendor list.

### 5. Reconnect or rebuild the bank feeds

1. Reconnect broken bank and credit card feeds, or import historical transactions where the feed cannot reach back far enough.
2. Confirm the transaction set for each account is complete for the cleanup period before categorizing.

### 6. Clear uncategorized income and expense

1. Now categorize. Work Uncategorized Income and Uncategorized Expense to zero against source documents.
2. Never auto-accept feed matches. Verify Add-versus-Match on each. Route anything uncertain to Sarah.

### 7. Investigate negative and aged balances

1. Find negative balances and aged items that should have cleared (aged AR/AP, stale Undeposited Funds, negative asset or liability balances).
2. Diagnose each with a document. Do not write them off without cause.

### 8. Reconcile oldest to newest

1. Reconcile every account, oldest period first, each to a real statement, to a zero difference.
2. Any difference is diagnosed via the discrepancy report and audit log (SOP-001 step 6). Never force-balance.

### 9. Tie loans to amortization schedules

1. Reconcile every loan balance to its amortization schedule or lender portal as of each period end.
2. Correct interest-versus-principal splits that were booked wrong.

### 10. Review sales tax

1. Review sales tax setup and liability for correctness. Flag anything outside bookkeeping scope (nexus questions, filing positions) to Sarah for referral, not resolution. (Guardrail 11.)

### 11. Trial balance variance scan against tax returns

1. Compare the cleaned trial balance to the client's filed tax returns for the affected years.
2. Investigate material variances. Discrepancies between books and filed returns are flagged to the client; the firm does not silently conform books to a return or advise on amending. Refer tax questions out.

### 12. Lock and export

1. Set the closing date with a password on every cleaned period.
2. Export the cleaned trial balance, P&L, balance sheet, and general ledger to the encrypted archive as the "after" record.
3. Deliver a cleanup summary: what was wrong, what was corrected, what remains open, and what was referred out. Draft the balance on delivery.

## Done when

- Chart of accounts, vendors, and items are clean before any categorization was done.
- Uncategorized income and expense are zero.
- Every account reconciles to a real statement with zero difference, oldest to newest.
- Loans tie to amortization schedules.
- The cleaned trial balance has been compared to filed returns and variances are explained or referred.
- Every cleaned period is locked with a password and exported to the archive.
- The balance draft has been collected and the summary delivered.

## If something goes wrong

- **You are tempted to start categorizing before the chart and vendors are clean:** stop. That is the exact mistake this order prevents. Finish steps 2 through 5 first.
- **A reconciliation will not tie:** diagnose (SOP-001 step 6). Never plug.
- **Books disagree with a filed tax return:** flag it to the client and refer the tax question out. The firm does not amend returns, advise on positions, or conform books to a return without the client's tax preparer directing it.
- **The mess is larger than quoted:** stop and re-quote before continuing. Do not absorb out-of-scope months. Scope creep is the number one failure mode of fixed-fee work. (Guardrail 8.)

## References

- Reconciliation diagnosis, no force-balancing: [SOP-001](SOP-001-monthly-close.md)
- Scope armor and referrals: [SOP-009](SOP-009-engagement-preflight-checklist.md), [CLAUDE.md](../CLAUDE.md)
- Records archive: [SOP-007](SOP-007-records-retention.md)
- Service and pricing definitions: master handoff Section 6, [drive-registry.md](../00-company/drive-registry.md)
