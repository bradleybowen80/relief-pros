# SOP-011: Error Prevention Protocol

**Status:** active
**Owner:** Sarah
**Last reviewed:** 2026-07-31

## Purpose

SOP-001 says what to do each month. This says what goes wrong, how to catch it,
and what to do when you catch it. It is the difference between a bookkeeper who
produces numbers and one who produces numbers that hold up.

The premise: **accuracy is not carefulness.** Careful people make every error in
this document. Accuracy is a set of mechanical checks that run whether or not
anyone is paying attention, plus a small number of rules that are never bent
regardless of how reasonable bending them looks at 11pm on the 14th.

Read this once end to end before the first client. After that, Part 3 is the
month-end sweep and the rest is reference.

## Who this protects

The firm, first. A client's bad books are inconvenient for them and existential
for us: our entire offer is that the numbers are right. One client discovering
at tax time that a year of books was wrong costs the review, the referral, the
relationship, and possibly a claim against the E&O policy. There is no version of
this business that survives being sloppy and cheap at the same time.

---

## Part 1: The seven rules that are never bent

These are absolute. Every one of them exists because breaking it feels
reasonable in the moment and is unrecoverable later.

### Rule 1: Never guess a category

If you cannot prove what a transaction is, it does not get a category. It goes to
the **Ask My Client** holding account (Part 2) and it goes on the question list.

A guess is worse than a blank, because a blank is visibly unfinished and a guess
looks finished. Nobody ever goes back and re-examines a transaction that already
has a plausible category on it.

### Rule 2: Never force a reconciliation to balance

A difference is diagnosed or escalated. It is never plugged to an expense
account, an "adjustment" account, Opening Balance Equity, or a journal entry
written to make the number go away.

QBO will offer to do this for you. If you accept, it posts to a special account
called **Reconciliation Discrepancies**. Treat any non-zero balance in that
account as a hard stop and a finding: it means somebody, at some point, let the
software bury an error rather than find it.

### Rule 3: Never journal-entry into a subledger account

A journal entry bypasses the transaction workflow these accounts depend on. It
moves the balance without creating or clearing the underlying invoice, bill,
payment, deposit, or tax record, so the ledger and the report driven by it
(aging, Sales Tax Center, inventory valuation, reconciliation) stop agreeing.

Be precise about the mechanism, because a bookkeeper who tests a wrong
explanation in a live file will discount the whole rule. QBO forces a customer
name on an A/R journal entry line and a vendor name on an A/P line, and the entry
does appear on the aging. The problem is that it lands as a permanently open item
that cannot be applied through Receive Payment or Pay Bills. The journal entry
itself can be reversed. The misstated report cannot be fixed by adding another
one.

**Never JE into:** Accounts Receivable, Accounts Payable, Inventory Asset,
Sales Tax Payable, Undeposited Funds (also labeled "Payments to deposit"),
payroll liabilities, or a bank or credit card account.

Journal entries are correct for depreciation and amortization, accruals and
their reversals, reclassifying between expense or equity accounts, owner draws
and contributions, loan principal and interest splits, and adjusting entries
handed down by the client's CPA.

**The governing question:** before writing any journal entry, ask whether the
real fix is a source transaction or a list item. It usually is. Most cleanup
journal entries are somebody avoiding the work of fixing forty miscategorized
transactions or one wrong item mapping.

### Rule 4: Never let the software post without a person

Bank rules with **"automatically confirm transactions this rule applies to"**
turned on post directly to the books with no human review. Combined with the way
bank feeds re-download transactions, this is the single highest-volume error
generator in QuickBooks Online.

Auto-confirm is permitted only for rigid, fixed-amount, single-payee items:
rent, a specific loan draft, a fixed insurance payment. Not fuel. Not building
supply stores. Not anything a contractor buys.

The same rule covers the bank feed itself: **Add versus Match is decided by a
person, every time.** QBO looks back roughly ninety days and guesses, and a
same-amount coincidence is not a match.

### Rule 5: Provable, not plausible

Every balance sheet line ties to a document produced by somebody outside this
firm: a bank statement, a lender's amortization schedule, a payroll provider's
report, a loan portal balance. "Looks right" is not a tie-out. If you cannot
name the document, the line is not proven.

**The document must come from outside the client's control.** A statement
downloaded from the bank's own site or the lender's portal, arriving under the
bank's file name, is evidence. A retyped, rescanned, or spreadsheet-derived
"statement" is not a tie-out, it is the client's assertion in a different font.
This distinction does not matter against ordinary sloppiness and matters
enormously in the one scenario this protocol exists for, because otherwise the
firm's entire verification rests on evidence supplied by the party under
suspicion. If a client will only supply statements they produced themselves,
that is a screening finding (SOP-010) and a limitation to state in writing.

### Rule 6: The firm never touches the client's money

No signing authority, no wire initiation, no bill paying, no payroll
submission, no moving funds between the client's accounts. The client authorizes
and moves money; we record it.

This is not a preference. Under IRC 6672 the IRS may assert the Trust Fund
Recovery Penalty against a "responsible person" who **willfully** fails to
collect, account for, or pay over withheld payroll taxes. Two elements are
required, and it is worth knowing both. Responsible-person status turns on
having the duty or the power to direct those payments, whether or not it was
ever exercised. Liability additionally requires willfulness, which the IRS
defines as intentional, deliberate, voluntary and knowing, as distinguished from
accidental.

The penalty equals 100% of the unpaid trust fund tax, is not capped, is assessed
against the individual personally, and is not dischargeable in bankruptcy.
Declining the authority is the only step that removes the argument entirely,
which is why we decline it rather than manage it. (IRM 8.25.1. CLAUDE.md hard
rule.)

### Rule 7: Stay in the lane

We do bookkeeping. We do not decide tax positions. The line is not always
obvious, so here it is concretely.

**Ours:** whether a transaction was recorded correctly, whether the balance
ties, whether the category is consistent with how the client's CPA has been
treating that item.

**Theirs:** whether an expense is deductible, whether a purchase should be
capitalized or expensed, whether the client owes Texas sales tax on a job,
whether a bad debt can be written off, whether an owner's truck qualifies,
whether a distribution exceeds basis.

When you hit one of theirs, you document what you found, reclass only what is
unambiguous, and put the judgment in writing to the client and their CPA. You do
not resolve it, and you do not let it silently sit in a category that implies a
decision was made. (Texas Occupations Code 901.453(b) bars a non-CPA from
holding out as an "accountant" or "auditor" or asserting expertise in accounting
or auditing. It does not address tax. Staying out of tax positions is firm policy
driven by the engagement letter, SOP-009 Guardrail 11, and E&O exposure, not by
901.453.)

---

## Part 2: The controls that prevent errors before they exist

### The Ask My Client account

Create one holding account per client file at onboarding: **Ask My Client**,
Other Current Asset. Anything unidentifiable goes here, never into a plausible
expense category.

Rules for it:

- Every item that lands here goes on the client's question list the same day.
- **At close the account is either zero, or every remaining item is named,
  dollar-valued, and disclosed in the monthly summary and logged on the
  document-chase list (SOP-004).** Those are the only two acceptable states. An
  undisclosed balance is an incomplete close.
- If an answer never arrives, the item does not get guessed. It stays parked, it
  is named and dollar-valued in the client's monthly summary, and the client is
  logged on the document chase list (SOP-004).
- Because it is an asset account, a balance sitting here overstates assets. That
  is deliberate. It is supposed to be uncomfortable and visible.

QBO files sometimes already contain an **Ask My Accountant** account from a
prior bookkeeper. Do not use that name. We are not an accounting firm and the
name is a Texas naming problem on a document a client might forward.

### The closing date, and what it actually does

Set the closing date and a closing-date password at the end of every month.
`Settings gear > Account and settings > Advanced > Accounting > Close the books`.
Only a company admin can set or change it.

**The firm holds the password. The client does not get it.**

Understand precisely what this control is, because most people overestimate it:

**It does:** warn or demand a password when someone edits, adds, deletes, or
voids a transaction dated on or before the closing date. It also generates the
**Exceptions to Closing Date** report, which lists every closed-period change
that happened anyway.

**It does not:**

- Prevent anything. With the password, any holder walks through. Without one, it
  is a dismissible warning. It buys evidence and friction, not prevention.
- Stop transactions dated *after* the closing date that change the closed period
  anyway, such as a payment applied to a closed-period invoice.
- Stop list-level changes, which is the largest hole in the control. Merging two
  accounts moves every historical transaction and restates closed periods
  permanently. Deactivating a balance sheet account that still carries a balance
  makes QBO post an automatic adjustment to Opening Balance Equity. Changing the
  account on an **inventory** item restates prior transactions automatically; on a
  service or non-inventory item it does so only if "Also update this account in
  historical transactions" is ticked, which is very easy to tick without reading.
  No closing date interferes with any of these.
- Stop a change to the accounting method or fiscal year, which restates
  everything.
- Restrict by user. There is one date and one password for everybody.
- Stop the primary admin from removing the closing date entirely.

Because of that last list, **Exceptions to Closing Date is the first report you
run every month**, before touching anything. The closing date does not protect
the prior month. It tells you whether the prior month was disturbed.

### Documents attached at the transaction, not filed somewhere

Attach the receipt, invoice, or statement to the transaction in QBO. QuickBooks
Online includes receipt capture; there is no need to buy a separate tool for
this at our size. An attached document means the next person, including a future
auditor or the client's CPA, can prove the entry without asking anyone.

### The capitalization threshold comes from the client's CPA

Do not invent one. Ask the CPA in writing, at onboarding, what threshold the
client uses, and record the answer in the client's standing rules.

Context so the conversation is informed: under the IRS tangible property
regulations, the de minimis safe harbor election lets a taxpayer **without** an
applicable financial statement expense items up to **$2,500 per invoice or per
item**, and a taxpayer **with** one up to **$5,000**. The election is made
annually by attaching a statement to a timely filed return, and a taxpayer
without an applicable financial statement needs a consistent accounting policy
in place at the start of the tax year rather than formal written procedures.

That is the client's election on the client's return. **We do not make it, advise
on it, or assume it.** We apply the number the CPA gives us, consistently, and
we flag purchases above it rather than deciding their treatment.

### Bank rules are audited, not trusted

Once a quarter, export the rule list (`Rules` screen, New rule dropdown, Export
rules) and review every rule for its condition, target account, assigned
customer or project, and above all its auto-confirm flag. Rule priority is
ordered and draggable, and a broad rule sitting above a specific one silently
swallows what the specific rule was written for. A rule list nobody has ever
reordered is effectively random.

### Separation of duties, honestly, in a two-person firm

The textbook control is that one person records and a second reviews. This firm
has one bookkeeper. Pretending otherwise would be the kind of self-flattery that
gets people caught out.

What we actually have, and it is defensible:

1. **Sarah judges, Brad prepares.** Brad moves documents, runs exports, handles
   payment mechanics, and never resolves a categorization question. Anything
   ambiguous goes to Sarah. This is real separation for the tasks it covers, and
   honest about the tasks it does not.
2. **The external document is the second reviewer.** A statement does not care
   who is reading it. This is why Rule 5 carries most of the weight here: an
   independent tie-out to an outside document catches what a second human would.
3. **A cooling gap before delivery.** The close is finished and then reviewed
   again, not delivered in the same sitting it was completed in. Fresh eyes on
   your own work the next morning catch a meaningful share of what a colleague
   would have caught. Build the calendar so this is possible.
4. **The client is the third pass.** The plain-words summary is not only a
   deliverable, it is a control. Owners spot "that vendor is wrong" and "we never
   bought that" faster than any reviewer, which is exactly why the summary names
   parked items and unusual movements rather than smoothing them over.
5. **Never both prepare and authorize anything involving money.** Guaranteed by
   Rule 6.

When there is a second bookkeeper, the first real review gate is a second person
signing the close checklist. Until then, the five controls above are the system,
and the honest statement is that they are strong on mechanics and weaker on
judgment. That is the argument for escalating judgment calls early rather than
resolving them alone.

---

## Part 3: The month-end detection sweep

Run this in order, every client, every month, as part of SOP-001. It takes
roughly twenty minutes on a clean file and finds nearly everything that
reconciliation alone will not.

**Navigation note.** Intuit made the modern interface the default on 8 May 2026
and retired the classic report views weeks later, so the `All apps > Accounting
> ...` paths below are the current ones. Older material showing a `Dashboard /
Sales / Expenses / Reports` sidebar is describing software that no longer exists.
Settings-gear paths are unchanged.

**The bank feed was also renamed in the same release.** Older material, and some
of the language bookkeepers still use out loud, uses the old tab names:

| Now | Formerly |
|---|---|
| Pending | For review |
| Posted | Categorized |
| Post | Add |

"Add versus Match" in this document means "Post versus Match" on screen. The
decision is identical. See the QuickBooks Learning Guide in `06-training/`.

| # | Check | Where | What a failure looks like |
|---|---|---|---|
| 1 | **Exceptions to Closing Date** | `Reports`, search the report name | Any row. Somebody changed a closed period. Investigate before doing anything else. |
| 2 | **Audit log, deleted and voided** | `Settings gear > Audit log`, Events = Deleted/Voided, since last close | Anything deleted after the close. QBO has no "voided/deleted transactions" report; this filter is the equivalent. |
| 3 | **Reconcile every bank and card** | `Accounting > Reconcile` | Do not proceed past a beginning-balance banner. Open the **Reconcile Discrepancy Report** and drive Total Discrepancy Difference to $0.00. |
| 4 | **Balance sheet, All Dates, accrual** | `Reports > Balance Sheet` | Opening Balance Equity, Reconciliation Discrepancies and Uncategorized Asset must all be 0. Ask My Client is 0, or every item in it is disclosed in this month's summary. Undeposited Funds should contain only genuinely in-transit current items. |
| 5 | **Balance sheet, All Dates, cash basis** | Same report, Customize, Accounting method = Cash | A/R and A/P should both be zero on a cash-basis balance sheet. Any balance means unapplied payments or a receivable/payable transaction hitting a balance sheet account. |
| 6 | **Cash-basis P&L** | `Reports > Profit and Loss`, cash | Investigate any balance in **Unapplied Cash Payment Income** or **Unapplied Cash Bill Payment Expense**. The common legitimate cause is a payment received before the invoice it applies to, straddling the period end, which is exactly the contractor deposit pattern. Confirm that is what you are seeing and leave it. Error causes: an item mapped to a bank-type account, a bill paid against a credit card balance, or a payment never applied to a sales form. **Never backdate an invoice or journal-entry these accounts to clear them.** |
| 7 | **Journal entry scan** | `Reports > Journal` for the period | Read every one. Then drill A/R, A/P, Inventory Asset, Sales Tax Payable and Undeposited Funds from the balance sheet, filtered to Transaction Type = Journal Entry. **Any hit is a finding** (Rule 3). |
| 8 | **Duplicate scan** | `Reports > Transaction Detail by Account`, export, sort by account then amount then date | Exact duplicates land adjacent. A reconciliation out by exactly one transaction, or by exactly twice one, is a duplicate until proven otherwise. |
| 9 | **Sales tax tie-out** | `Taxes > Sales tax` summary versus Sales Tax Payable on the balance sheet, same period and same basis | A gap means a journal entry, a payment made outside the Sales Tax Center, or a basis mismatch. Never journal-entry this account. |
| 10 | **Job costing gaps** | `Reports > Profit and Loss by Customer` | Look at the **Not Specified** column. That column is where miscoded job costs and personal spending both hide. |
| 11 | **Negative balance scan** | Full balance sheet and P&L | Against the table in Part 4. Negative expense accounts and negative bank balances are the highest-yield. |
| 12 | **Bank rules changed** | `Accounting > Rules` | Any new rule the client added, and any rule with auto-confirm on that should not have it. |
| 13 | **Trial balance variance** | Prior period versus this period | Any account that moved materially without a known reason. This catches what reconciliation cannot: correctly-reconciled money in the wrong category. |
| 14 | **Set the closing date, save the reconciliation reports** | | Save each reconciliation report to the client folder. It is the proof the month tied. |

**QuickBooks Online Accountant's Books Review** (Setup/Cleanup, Transaction
review, Account reconciliation, Final review, Wrap-up) flags uncategorized
transactions, transactions with no payee, and unapplied payments. Use it as a
fast first pass. It is not a substitute for the sweep above and it does not look
for most of what is on this list.

---

## Part 4: The trap list

### Opening Balance Equity

Any non-zero balance is an error, full stop. It means the file was never properly
opened, and every downstream period inherits the problem. It is also the loudest
possible signal to a reviewing CPA that the books were never right.

Causes: an opening balance entered when an account was created and never
reclassed; a second opening balance on an account that already had one; an
inventory item created with a quantity on hand; a customer or vendor opening
balance entered on the contact record; transactions dated before the account's
opening balance date; **a balance sheet account deactivated while it still
carried a balance, which makes QBO post an automatic adjustment to Opening
Balance Equity**; a conversion from Desktop; or somebody using it as a plug.

Find it: chart of accounts, Opening Balance Equity, Run report, All Dates. The
transaction types tell you the cause. Then check the audit log for who created
them, which distinguishes a setup error from a plug.

**Do not journal Opening Balance Equity to Retained Earnings to zero it.** That
is the same plug wearing a different suit. Reclass each component only after
proving what it is. Escalate to the CPA before touching it if the balance
predates the earliest open tax year, if the amount is material, or if the entity
is an S-corp or partnership, where equity movements have basis and capital
account consequences.

### Undeposited Funds (Payments to deposit)

An asset account that silently accumulates. The classic pattern: a payment is
received into Undeposited Funds, then the matching bank deposit is **Added** as
new income instead of **Matched** to a bank deposit. Income is counted twice and
the original payment never clears.

Also caused by: never using the Bank Deposit screen at all; merchant processors
depositing net of fees while the payments total gross; selecting four of five
payments on a deposit; and duplicate payment records.

Find it: drill into it from the balance sheet, group by customer, sort by date.
Anything older than the last deposit date is suspect; anything older than about
thirty days is almost certainly wrong.

**Never journal it to zero.** That hides the money while leaving the underlying
payments still sitting undeposited, so the next deposit recreates the problem.

### Bank feed duplicates

Eight mechanisms, and they compound: manual entry plus feed with Add clicked
instead of Match; a CSV or QFX upload overlapping the feed's date range where
rows differ by a day or a cent; disconnecting and reconnecting a feed, which
re-pulls a trailing window; the same account connected twice; a pending item
added and then reposting as posted with a different date or amount, which is
constant on credit cards; transfers added on both sides as an expense and an
income rather than as one transfer; auto-confirm rules firing on re-downloaded
items; and third-party job-management apps posting what the feed also creates.

If the duplicate is still in **For review**, exclude it. If it was already added
and the date sits in an **open** period, delete it from the register; excluding
does nothing to a posted transaction.

**If the transaction is reconciled, dated on or before the closing date, or falls
inside a filed tax year, stop. Do not delete it.** That is a Level 3 escalation,
and a filed year is Level 4. A closed period is reopened only through the
documented reopen in SOP-001, with the reason and the authorization recorded
before anything changes.

Also check the **Excluded** tab. Over-exclusion is the mirror-image error and
quietly under-reports activity.

### Reconciliations that were fine and now are not

Four causes, per Intuit: a reconciled transaction was edited, deleted, moved to
another account, or un-reconciled; a transaction was marked reconciled directly
in the register instead of through the reconcile workflow; transactions were
added dated before the account's opening balance; or the original opening balance
was wrong.

The **Reconcile Discrepancy Report** has a Change Type column that names exactly
what happened to each transaction. Work it to zero. The report tells you what
changed; the audit log tells you who.

Note a real limitation: **do not rely on the audit log to prove who un-reconciled
an account.** Whether QBO logs reconciliation actions as discrete events is not
reliably documented and practitioner reports conflict. Use the discrepancy report
for that question. If this matters for a specific client, test it in their file
rather than assuming.

### The audit log's limits

Know these before you promise anyone a forensic answer.

- **Two years of retention.** Older events are gone. That is a hard ceiling.
- Displays 150 records at a time. Anything larger needs paging or export.
- Sign-outs are not recorded when a browser closes or a session times out, so
  session length cannot be proven.
- **The date filter is the date the change was entered, not the transaction
  date.** You cannot natively ask "what touched March?" This is the single
  biggest practical limitation.
- Change detail is inconsistent. It reliably tells you who and when. It does not
  always give a complete before-and-after.
- App and integration activity appears under an app name, which tells you the
  integration did it and not which human triggered it.

### Negative balances

| Account | Negative means |
|---|---|
| Bank or cash | Investigate always. Usually missing deposits, duplicate expenses, or a transfer recorded twice. |
| Undeposited Funds | Always an error. |
| Accounts Receivable | Almost always an error. A genuine customer prepayment belongs in a liability account, not in A/R. |
| Accounts Payable | Same. A genuine vendor prepayment belongs in a prepaid asset. |
| Inventory | Always an error, and it corrupts average cost, which inflates cost of goods sold. |
| Accumulated depreciation | Correct and expected. Do not "fix" it. |
| Fixed assets | Error, unless you are looking at the accumulated depreciation sub-account. |
| Credit card | Sometimes a real overpayment, usually duplicate payments or payments recorded without the charges. |
| Loan or note payable | Almost always an error. Often principal and interest both coded to principal. |
| Sales Tax Payable | Sometimes legitimate on cash basis as a timing artifact. Usually an error on accrual. Check the basis first. |
| Income account | Investigate. Legitimate only for contra-revenue in its own account. Otherwise an expense was coded to income or an item is mapped backwards. |
| Expense account | Almost always an error. The common contractor case is a supply-house refund landing in a materials account in a month with no purchases. |
| Equity | Frequently legitimate. Escalate to the CPA for an S-corp or partnership, because distributions in excess of basis are a tax event. |

### Contractor-specific traps

Our target vertical is home-services and construction contractors, which means
these are not edge cases.

**Retainage.** QuickBooks Online has no native retainage feature. The
practitioner convention is a **Retention Receivable** (other current asset) and
**Retention Payable** (other current liability) with service items mapped to
them, and a negative line on the invoice for the withheld percentage. When
retention is not broken out, it sits in A/R and the aging report shows every
customer as 120+ days delinquent when nothing is actually late. Confirm the
client's actual contract retention terms rather than assuming a percentage.

**Customer deposits recorded as income.** A deposit taken before work starts is a
liability, not revenue and not negative A/R. Recorded as a sales receipt it
recognizes revenue before the work exists and can trigger Texas sales tax early.
Intuit's documented method is an other-current-liability account with a service
item mapped to it, applied as a negative line on the final invoice.

**Progress billing with no WIP schedule.** QBO does not compute over-billings and
under-billings. A job billed ahead of cost looks enormously profitable mid-job
and collapses at the end. A percentage-of-completion or WIP schedule is a CPA
deliverable, not ours. Our job is to make the underlying job costs clean and
complete and hand them over.

**Materials and subcontractors coded to overhead.** Direct job costs belong in
cost of goods sold, not in "Supplies" or "Office Supplies." Put PVC pipe in
office supplies and the gross margin looks wonderful while the bottom line is a
disaster, and neither number tells the owner anything true.

**1099 coding, which is ours even though the filing is not.** A subcontractor
paid from an account not mapped for 1099s, or paid to a vendor without **Track
payments for 1099** checked, vanishes from the 1099 report. We do not file the
returns, but the coding decides whether anyone can. Check the flag on every
vendor with recurring payments and report any vendor over the threshold whose
flag is off. Note the threshold moved: **$600 for tax year 2025, $2,000 for tax
year 2026**, filed the following January.

**Personal and business commingling.** The same card at the same building supply
store on Saturday and Monday, with no transaction-level signal telling them
apart. The highest-yield filter is **weekend and holiday transactions at fuel and
building-supply vendors**. Also: any job-cost transaction with a blank
customer or project field, and an owner's draw account with no activity in a
profitable owner-operated business, which means personal spending is being
expensed somewhere.

Reclass the unambiguous items to owner's draw or shareholder distributions.
**Then stop.** Whether the truck is deductible, whether an S-corp needs an
accountable plan, whether mileage or actual expense applies, and how to treat
shareholder loans are all tax positions. Document, reclass what is obvious, and
hand the judgment to the CPA in writing.

**Job-management app syncs.** ServiceTitan, Housecall Pro, Jobber, Buildertrend
and similar push invoices and payments into QBO. Turned on before the cost codes
are mapped, they produce duplicate invoices, duplicate deposits, and everything
landing in one uncategorized bucket. Identify the app's activity in the audit log
by its actor name.

### Sales tax, and where we stop

The Sales Tax Payable account is system-managed. The Sales Tax Center computes
what is owed from the tax codes on transactions, not from the general ledger
balance. They are two separate calculations that only agree if nothing has
manually touched the account.

A journal entry to the account changes the balance without changing the return.
A sales tax adjustment that uses the sales tax liability account as its own
offset does nothing at all. Paying sales tax with a check or expense instead of
through the Sales Tax Center reduces the ledger while the Sales Tax Center still
shows the return unpaid.

Corrections go through the Sales Tax Center adjustment, offset to an account that
is not the sales tax liability account.

**Texas taxability is a tax position, not a bookkeeping entry.** For contractors
specifically, new construction versus residential repair and remodel versus
nonresidential repair and remodel are taxed differently, and lump-sum versus
separated contracts change who owes tax on materials. Route these to the client's
CPA, in writing, every time. Do not derive the answer.

---

## Part 5: The escalation ladder

Four levels. Getting the level right is most of the skill.

**Level 1: Fix it.** Unambiguous mechanical errors in an open period. A
duplicate, an obvious miscategorization against the client's standing rules, an
unapplied payment. Fix, note it, move on.

**Level 2: Ask the client.** Anything about what a transaction *was*. Only the
client knows whether the Home Depot run was for the Miller job or their own
fence. Ask My Client account, question list, monthly.

**Level 3: Sarah decides.** Any bookkeeping judgment call. How something is classified,
whether a correction requires a prior-period adjustment, whether a finding is
material. Brad never resolves these, no matter how obvious they look.

**Level 4: The CPA, in writing.** Anything with a tax consequence, anything
touching a filed period, anything about deductibility, capitalization,
taxability, basis, or write-offs. Also: a material error inside a year that has
already been filed. Put it in writing, keep the copy, and do not proceed on the
tax question until they answer.

**Stop the close entirely and escalate immediately when:**

- A reconciliation will not tie and the discrepancy report does not explain it.
- Opening Balance Equity is non-zero on a file we have been running.
- Prior-period balances no longer match a prior close.
- Reconciliation Discrepancies has any balance.
- You find an error inside a filed tax year.
- You find something that looks like it might not be an error, meaning
  potential fraud, misappropriation, or a client asking for something to be
  recorded a way you know is wrong.

That last one has its own rule: **document it, do not confront it, and get advice
before acting.** Client pressure to record something incorrectly is grounds to
resign the engagement, and it is far better to resign than to hold the pen.

---

## Part 6: The error log, which is what makes this improve

Every error caught gets one line in the client's file and, if it is a pattern, a
line in the firm's failure log.

Record: what the error was, how it got in, how it was caught, what it would have
cost undetected, and what change stops it recurring.

The point is not record-keeping. The point is that **every recurring error
becomes a checklist item.** A protocol that never changes is a protocol nobody
is learning from. Review the log quarterly with the KPI dashboard (SOP-008) and
promote anything that has happened twice into Part 3.

Errors caught internally are wins and are logged without blame. The only
punishable version is the one that was noticed and not written down.

---

## Done when

- The month-end sweep in Part 3 ran in full, in order, and every check is clean
  or has a documented finding.
- Ask My Client, Opening Balance Equity, Reconciliation Discrepancies,
  Uncategorized Asset, Unapplied Cash Payment Income and Unapplied Cash Bill
  Payment Expense are all zero.
- Every reconciliation ties to zero against a real statement, with the
  reconciliation report saved to the client folder.
- Every balance sheet line has a named external document behind it.
- No journal entry exists in a subledger account.
- Every open question is on the client's list, and every parked item is named
  and dollar-valued in the summary.
- The closing date is set and the password is held by the firm.
- Findings are escalated to the right level, in writing where Level 4.

## If something goes wrong

- **You already delivered a month that turns out to be wrong.** Tell the client
  the same day you know, in plain words, with what was wrong, what it changes,
  and what you are doing about it. Correct it, re-deliver, log it. Do not let a
  client discover it from their CPA. Our published promise is that we fix our
  own mistakes at no charge; honor it before anyone has to ask.
- **The error is inside a filed tax year.** Stop. Level 4. The return was filed
  from a balance sheet that is about to change.
- **You cannot tell whether something is an error.** It is Level 3 until Sarah
  says otherwise. Ambiguity resolves upward, never downward.
- **The file is worse than the engagement assumed.** That is a cleanup
  (SOP-003), quoted separately, not absorbed silently into a monthly fee.

## References

- The monthly procedure this protects: [SOP-001](SOP-001-monthly-close.md)
- Setup that prevents most of this: [SOP-002](SOP-002-client-onboarding.md), [SOP-012](client-lifecycle/SOP-012-day-one.md)
- Cleanup order when a file arrives broken: [SOP-003](SOP-003-cleanup-12-step.md)
- Missing documents: [SOP-004](SOP-004-document-chase.md)
- Access, MFA, retention: [SOP-006](SOP-006-security-wisp.md), [SOP-007](SOP-007-records-retention.md)
- Error-log review cadence: [SOP-008](SOP-008-kpi-dashboard.md)
- Guardrail gate before any engagement: [SOP-009](SOP-009-engagement-preflight-checklist.md)
- Hard rules, naming gate, TFRP: [CLAUDE.md](../CLAUDE.md)

**Primary sources behind the tax and threshold figures in this document:** IRS
Tangible Property Final Regulations (de minimis safe harbor, $2,500 without an
applicable financial statement and $5,000 with one, annual election under
Treas. Reg. 1.263(a)-1(f)); IRC 6672 (Trust Fund Recovery Penalty); Texas
Occupations Code 901.453(b) (naming restriction); IRS 1099-NEC instructions for
the $600 to $2,000 threshold change between tax years 2025 and 2026. QuickBooks
Online behavior is drawn from Intuit official help articles; the items flagged in
this document as not independently verifiable should be tested in a live client
file before they are relied on.
