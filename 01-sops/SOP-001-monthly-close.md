# SOP-001: Monthly Close, Per Client

**Status:** active
**Owner:** Sarah
**Last reviewed:** 2026-07-28

## Purpose

Close one client's books for one month so that every balance is provable to an outside document, the period is locked, and the client receives a P&L, a balance sheet, and a plain-English summary. This is the single most important artifact in the business. It is what makes the practice trainable, hireable, and salable. Run it identically for every client, every month.

## Trigger

The client's document window has closed and their bank feeds are current. The document window closes on the 10th; the close starts on the 11th (SOP-015). All closes are locked and delivered by the 15th (see the compliance calendar).

## Before you start: the five hard rules that govern this close

1. **Verify beginning balances first.** Nothing else in this checklist is trusted until step 2 passes. A wrong opening balance makes every downstream number wrong.
2. **Never force-balance.** A reconciliation difference is diagnosed or escalated. It is never plugged to an expense account or an "adjustment" account. See step 6 and the escalation path below.
3. **Never auto-accept bank feed matches.** QuickBooks Online only looks back about 90 days and guesses. Every Add-versus-Match decision is verified by a person. (Intuit QBO bank feed behavior.)
4. **Separation of duties.** Sarah makes every bookkeeping judgment call in this SOP. Brad prepares and archives only. Anything ambiguous goes to Sarah's review queue, never guessed.
5. **Provable, not plausible.** Every balance sheet line must tie to an external document (statement, amortization schedule, payroll report, loan portal). "Looks right" is not closed.

## Steps

### 1. Confirm the document set is complete

1. Open the client's folder in the portal. Confirm every bank and credit card statement for the close month is present.
2. Confirm loan statements, merchant/POS reports (Complex tier), and any payroll reports (run by the client or their provider, never by this firm) are present.
3. If anything is missing, do not stop the close. Note the missing item, proceed, and park affected amounts per step 9. Log the client on the document-chase list (SOP-004).

### 2. Verify beginning balances (do this before anything else)

1. In QBO, open **Reports > Balance Sheet** as of the last day of the prior closed month.
2. For each bank and credit card account, confirm the QBO ending balance for the prior month equals the statement's ending balance for that same date.
3. If any account does not match the prior close, stop. The prior period was not truly closed or was reopened. Resolve the prior period before continuing this month. Do not build this month on an unproven opening balance.
4. Confirm **Opening Balance Equity = 0**. If it is not zero, escalate to file-setup review; it means an account was added or an opening balance was entered incorrectly. (This is a file-hygiene rule, checked every close.)

### 3. Categorize the bank and credit card feeds

1. Open **Bank transactions** (Banking / Transactions). Work one account at a time.
2. Categorize every transaction against Sarah's standing rules for this client. Apply the client's chart of accounts exactly.
3. For each fed transaction, decide **Add** versus **Match** deliberately. Never batch-accept. If QBO proposes a match, open it and confirm it is the same transaction, not a same-amount coincidence.
4. Route anything you cannot categorize with certainty to the exceptions queue (step 4). Do not guess a category to clear the queue.

### 4. Work the exceptions queue

1. List every transaction you could not confidently categorize.
2. Resolve each with a source document (receipt, invoice, contract) from the portal.
3. Items that still cannot be resolved after document review go to Sarah's judgment queue with a one-line question. Brad never resolves an accounting judgment.

### 5. Reconcile every account

1. Open **Reconcile** (Accounting > Reconcile). Select the account and enter the statement ending date and ending balance from the actual statement.
2. Clear transactions until the **Difference = 0.00**.
3. Reconcile in order: bank accounts, then credit cards, then any other reconciled accounts. Reconcile oldest open period to newest if more than one month is open.
4. A reconciliation is done only when the difference is exactly zero against the real statement. A difference of any size is a step-6 problem.

### 6. If a reconciliation does not tie: diagnose, never plug

Work this order and stop at the step that explains the difference:

1. **Re-verify the beginning balance** for that account against the prior statement (repeat step 2 for this account).
2. **Run the Reconciliation Discrepancy report** (Reconcile > History by account > the reconciliation > Discrepancy). Look for changed, deleted, or reconciled-then-edited transactions.
3. **Check the audit log** (Settings > Audit log) filtered to that account for edits inside the closed or closing period.
4. If the difference is a real missing or duplicated transaction, correct the transaction and re-reconcile.
5. If the difference cannot be explained, escalate to Sarah with the discrepancy report attached. **Do not create an adjusting entry to force the difference to zero.** A plug buries the error permanently.

### 7. Adjusting entries and tie-outs

1. Enter only adjusting entries backed by a document: accrued interest tied to a loan statement, depreciation per a fixed-asset schedule, corrections identified in step 6.
2. **Tie every loan** to its amortization schedule or lender portal balance. The QBO loan balance must match the lender as of month end. (Standard/Complex tiers.)
3. Sweep **Undeposited Funds** to zero unless a deposit is genuinely in transit and documented. A lingering Undeposited Funds balance is a file-hygiene failure.
4. Complex tier only: complete job-costing or POS reconciliation and class tracking for the month.

### 8. Review the balance sheet line by line

1. Open **Reports > Balance Sheet** as of the close date.
2. For every line, name the external document that proves it. Cash ties to statements. Loans tie to lender balances. Payroll liabilities tie to the provider's report. Credit cards tie to statements.
3. Confirm no line is unexplained, negative where it should not be, or aged past when it should have cleared.
4. Run a **trial balance variance scan** against the prior period. Investigate any account that moved materially without a known reason. (This catches the errors reconciliation alone will not.)

### 9. Handle missing documents

1. For any amount you could not prove because a document never arrived, move it to the client's **Ask My Client** account (SOP-011, Part 2). Never to Uncategorized Asset, which is a QBO system account that must stay at zero so it keeps its diagnostic value.
2. List every parked item in the summary note by name and amount. The close proceeds on time. This is firm policy stated in the engagement letter, not a negotiation.
3. Flag chronic offenders for the renewal scorecard (SOP-010).

### 10. Produce the deliverables

1. Generate the **Profit & Loss** and **Balance Sheet** for the close month (and month-over-month or budget-vs-actual per the client's tier).
2. Write the **plain-English summary note**: what the numbers say in one screen, any parked items from step 9, and anything the client must act on. No accounting jargon. No em dashes.
3. Complex tier: schedule or hold the monthly review call.

### 10a. The gap: do not deliver the same day you finish

1. Stop. The close is finished, not delivered.
2. Re-open the P&L, balance sheet, and summary note **the next morning** and read
   them once with fresh eyes before locking and delivering.
3. With one bookkeeper this is a required review control, not a courtesy. It is
   one of the few genuine second looks the firm has (SOP-011, Part 2).
4. If the calendar keeps eating this step, the schedule is wrong, not the control.

### 11. Lock the period

1. Set the **closing date** to the last day of the close month (Settings > Advanced > Accounting > Close the books).
2. Set a **closing-date password**. Any later change to this period must go through the documented reopen (see "If something goes wrong").
3. Confirm the closing date shows correctly before moving on.

### 12. Deliver and archive

1. Deliver the P&L, balance sheet, and summary note through the **portal only**. Never by email. (Data-security rule.)
2. Brad exports the month's **trial balance, P&L, balance sheet, and general ledger** to the encrypted client archive (backup layer 2). This proves the firm's work independently of continued QBO access or the client relationship.
3. Trigger the review request only after a clean close (SOP for review requests; see automation scheme).
4. Update the client's KPI line (SOP-008): close completed, date closed, hours spent, any parked items.

## Done when

- Every bank, credit card, and loan account reconciles to zero difference against a real statement.
- Opening Balance Equity is zero and Undeposited Funds is swept.
- The balance sheet has no line that cannot be tied to an external document.
- The period is locked with a closing-date password.
- P&L, balance sheet, and a plain-English summary are delivered through the portal.
- The month's reports are exported to the encrypted archive.
- The completed close was reviewed on a later day than it was finished.
- The close was delivered on or before the 15th.

## If something goes wrong

- **A reconciliation will not tie:** run step 6 in order. Escalate to Sarah with the discrepancy report. Never plug.
- **A prior period no longer matches:** stop the current close. A closed period was reopened or edited. Diagnose via the audit log before building this month on it.
- **A closed period must be reopened:** document the reason, who authorized it, and what changed, before removing the closing-date password. Re-lock immediately after. An undocumented reopen is a control failure.
- **A document never arrived:** park it (step 9), disclose it in the summary note, proceed on time. Do not delay the close waiting on a client.
- **A transaction needs a judgment call Brad cannot make:** it goes to Sarah's queue. It does not get guessed to keep the queue clean.

## References

- Operations machine and close cadence: master handoff Section 10, [drive-registry.md](../00-company/drive-registry.md)
- Guardrails 3, 4, 5, 6 (no force-balancing, separation of duties, file hygiene): [SOP-009](SOP-009-engagement-preflight-checklist.md), [CLAUDE.md](../CLAUDE.md)
- Document chase for missing items: [SOP-004](SOP-004-document-chase.md)
- Renewal screening for chronic offenders: [SOP-010](SOP-010-client-screening-scorecard.md)
- KPI logging: [SOP-008](SOP-008-kpi-dashboard.md)
- Compliance deadlines (15th close, period lock): [compliance-calendar.md](../00-company/compliance-calendar.md)
