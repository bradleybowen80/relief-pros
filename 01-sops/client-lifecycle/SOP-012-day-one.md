# SOP-012: Day One

**Status:** active
**Owner:** Sarah
**Last reviewed:** 2026-07-31

## Purpose

The first 24 hours after a client signs. Everything here is about **access,
control, and expectation setting**. No bookkeeping happens today, deliberately.

Day one has an outsized effect on the next two years. A client who is set up
correctly costs a few hours a month forever. A client set up in a hurry costs
double that forever, and the cost is invisible because it shows up as "this one
is just difficult" rather than as a decision anyone made.

## Trigger

The signed engagement letter and signed ACH debit authorization are both back.
Not one of them. Both.

## Gate: do not start if any of these is false

Check every one. This is the last cheap moment to walk away.

- [ ] **SOP-010 screening scorecard** was completed and the client passed.
- [ ] **SOP-009 pre-flight checklist** was completed and every guardrail cleared.
- [ ] **E&O and cyber insurance are active**, claims-made, with a retroactive date
      earlier than today. No first client before coverage is bound. No exceptions.
- [ ] The engagement letter has been **reviewed by a Texas attorney** at least
      once. This is a one-time gate for the template, not per client.
- [ ] Both documents are **signed by someone with authority to bind the entity**.
- [ ] It is **not between mid-January and mid-February**. The onboarding freeze
      exists so the January crunch does not collide with a new file. Sarah can
      approve an exception; nobody else can.
- [ ] The engagement letter scopes **bookkeeping only** and explicitly excludes
      tax preparation, payroll, accounts payable, accounts receivable, and any
      authority over the client's money.

If a box is unchecked, stop and resolve it. A client who is already excited is
not a reason to skip a control; it is the exact circumstance controls exist for.

---

## The day one sequence

### 1. Archive the executed documents (15 minutes)

1. Signed engagement letter and signed ACH authorization go to the **encrypted
   client archive**. Nowhere else.
2. **Not** in the repo. **Not** in Google Drive. **Not** in the Claude Project.
   **Not** in email. These are executed contracts containing bank details.
3. Record the effective date, the tier, the monthly fee, and the **first close
   month** in the client's record. If signing falls after the 20th, the first
   close month is the following month, not the current one. Say so explicitly in
   the welcome email so the client is not waiting on a close that was never
   scheduled.

### 2. Arm billing before doing any work (15 minutes)

1. Enroll the client in **ACH autodraft on the 1st, in advance**. There is no
   invoicing and no receivable at this firm, ever.
2. If this is a cleanup engagement, the signed ACH authorization covers **both**
   drafts: 50% initiated at signing and 50% initiated on the delivery date, both
   pre-authorized before any work begins. Cleanup is never delivered before the
   second draft is authorized and scheduled. This is the one permitted deviation
   from the 1st-of-month schedule and it creates no receivable, because nothing
   is ever earned against an unauthorized payment.
3. Confirm the **receipt automation** is armed so a receipt emails automatically
   after every draft.
4. Confirm the first draft date and write it into the welcome email.

Billing is armed before work starts because the alternative is discovering in
week three that a payment method never worked, after the work is done.

### 3. Request access at the lowest privilege that works (30 minutes)

1. Request access to the client's QuickBooks Online file **through QuickBooks
   Online Accountant**, as an accountant user. Never by logging in with the
   client's own credentials, and never by having the client share a password.
2. **Bank and credit card feeds are connected by the client, inside their own
   QBO file, using their own banking credentials.** The firm never receives,
   stores, or uses a client's online banking login, read-only or otherwise. Most
   banks' terms forbid sharing it, and holding one is the cleanest way to be
   argued into "power to direct payments" in a Trust Fund Recovery Penalty
   analysis, which is the exact exposure this whole structure exists to avoid.
   If a statement cannot be obtained any other way, the client uploads it to the
   portal.
3. **Record who holds primary admin on the QBO file**, and confirm it is the
   client. The firm does not accept primary admin; that is custody of the
   client's file and it is not needed for our work. If a prior bookkeeper still
   holds admin, the client removes them today. Whoever holds primary admin can
   delete the closing date, so name them in the client record and re-verify each
   quarter.
4. **MFA on every account the firm touches**, without exception.
5. **Firm credentials, and only firm credentials, live in the password manager.**
   Never in a document, an email, a spreadsheet, or this repo. The firm holds no
   client banking credential of any kind.
6. If the client offers you signing authority, a debit card, or online banking
   with transfer rights, **decline it in writing** and say why. Keep the copy; it
   is evidence later.

### 4. Establish that the account list is complete (20 minutes)

Every other control in every SOP is scoped to accounts that are already in the
QBO file. Nothing else asks whether the file contains every account the business
actually uses, and that is the gap that produces books which reconcile perfectly
to zero and are still materially wrong.

A second credit card nobody mentioned, a Square or PayPal balance, a fuel card, a
line of credit, or the owner's personal card used for job purchases will each do
it. "Provable, not plausible" only proves what you knew to look for.

1. Get from the client, **in writing**, a complete list of every bank account,
   credit card, line of credit, loan, and payment processor the business uses,
   including any personal account used for business purchases.
2. Reconcile that list against three independent things: the accounts in the QBO
   file, the prior-year tax return, and any loan statements.
3. **Any account on the list that is not in the file is a finding before work
   starts.** Any account in the file that is not on the list is also a finding.
4. Keep the written list. It is re-confirmed at each quarterly review (SOP-014)
   and whenever the client's business changes materially (SOP-015).
5. Ask for the written representation annually thereafter: that the account list
   is complete and the documents provided are complete and unmodified.

### 5. Take the file's baseline photograph before touching anything (30 minutes)

This is the step most firms skip and every firm regrets skipping. Before you
change a single thing, capture what the file looked like when you received it.

Export and archive, dated today:

1. **Trial balance**, All Dates
2. **Balance sheet**, All Dates, accrual **and** cash basis
3. **Profit and loss**, current year to date and prior full year
4. **Chart of accounts** list
5. **Reconciliation history** for every bank and credit card account
6. Screenshot or note of the **closing date setting** as you found it

Why this matters: six months from now, if anyone asks whether a problem was
ours or inherited, this is the answer. Without it the question is unanswerable
and the answer defaults to "yours."

### 6. Run the ten-minute damage assessment (15 minutes)

Not a cleanup. A triage, to find out today whether this engagement is what was
quoted. Check exactly these:

| Check | Where | Bad result |
|---|---|---|
| Opening Balance Equity | Balance sheet, All Dates | Any non-zero balance |
| Reconciliation Discrepancies | Balance sheet, All Dates | Any balance at all |
| Undeposited Funds | Balance sheet, All Dates | Anything older than 30 days |
| Uncategorized Asset / Income / Expense | Balance sheet and P&L, All Dates | Any balance |
| Last reconciliation date | Reconcile, History by account | Older than 60 days |
| A/R and A/P on a **cash-basis** balance sheet | Balance sheet, cash | Any balance |
| Journal entries into A/R, A/P, Inventory, Sales Tax Payable | Drill each, filter Transaction Type = Journal Entry | Any hit |
| Bank rules with auto-confirm on | Rules screen | Broad rules posting unsupervised |

**If this assessment finds real damage, stop and re-quote.** That is a cleanup
under SOP-003, priced separately, not something absorbed into a monthly fee out
of politeness. Absorbing it is how a $250 client becomes a 15-hour month, and
the client never even learns their books were broken.

Say it plainly and immediately: the engagement was quoted for clean books,
here is what we found, here is the flat cleanup price, and monthly service
starts when it is current. Clients respect this. What they do not respect is
finding out in March.

### 7. Set up the client's structure (30 minutes)

1. Create the **Ask My Client** account, Other Current Asset. If the file has an
   inherited "Ask My Accountant" account, do not use it. (SOP-011.)
2. Create the client's **folder tree** in the firm's file structure.
3. Create the client's **private Dropbox File Request**. One per client, never
   shared, never a public link. Test it by uploading a file and deleting it.
4. Arm the **monthly document auto-request** with reminders on the 1st, 3rd,
   and 5th (SOP-004).
5. Open the client's **standing rules document**: their categorization
   conventions, recurring vendors, and anything idiosyncratic. It starts today
   and grows every month. This document is what makes the work transferable to
   a future hire.

### 8. Send the welcome email (15 minutes)

Use [04-clients/welcome-email-template.md](../../04-clients/welcome-email-template.md).

It must go out **today**, and it must contain the private upload link, because
the website tells clients the link comes from this email and nowhere else.

Do not send it before the upload link is live and tested. A welcome email
pointing at a link that does not work is worse than a late welcome email.

### 9. Write to the client's CPA (15 minutes)

An introduction and three questions. This email is the single highest-return
fifteen minutes in the whole engagement, and almost nobody sends it.

Ask:

1. **What capitalization threshold does this client use?** (Context in SOP-011.
   Their election, on their return. We apply it, we do not choose it.)
2. **Are there prior-year adjusting entries we should expect or preserve?**
3. **How do you want the books delivered at year end, and when?**

Then state our lane in one sentence: bookkeeping only, no tax preparation, no
payroll, no authority over client funds, and we refer tax questions to you.

Two things happen. The books come out the way the CPA wants them, which
eliminates most year-end rework. And a CPA who has had a good experience with
your work refers other clients, which the business plan identifies as the
dominant client-acquisition channel by a wide margin.

---

## Done when

- Signed documents are in the encrypted archive and nowhere else.
- ACH autodraft is enrolled and receipt automation is armed.
- Accountant-level QBO access is granted, with MFA, and no payment authority.
- The written account list is complete, reconciled against the file, the prior-year return, and loan statements, with any gap raised before work started.
- The baseline file export is archived and dated.
- The damage assessment is complete, and if it found damage, the client has been
  told and re-quoted before any work started.
- Ask My Client account, folder tree, private upload link, and document
  automation all exist and the upload link has been tested.
- The welcome email went out today with a working link.
- The CPA introduction went out with the three questions.
- The client's standing rules document exists, even if it is nearly empty.

## If something goes wrong

- **The client will not do ACH autodraft or will not use the portal.** This is a
  decline, even now. Do not build a receivable or an email-based document flow
  to accommodate one client. The whole operating model depends on neither
  existing. (SOP-010.)
- **The client wants us to pay bills, run payroll, or move money.** Decline and
  explain why: the engagement excludes payment authority, and the reason is
  personal liability that does not go away with a signature. Scope cannot be
  amended to add it. (SOP-009, Guardrails 1, 2 and 11; CLAUDE.md excluded services.)
- **Insurance is not bound yet.** Onboarding pauses. Not "starts carefully."
  Pauses.
- **The file is a disaster.** SOP-003, quoted separately, before monthly service
  begins.
- **The client cannot produce a prior-year tax return or balance sheet.** Note
  it, proceed, and flag the opening balances as unverified until the CPA
  confirms. Never invent an opening balance to make a file look finished.
- **It is the January to February freeze.** Schedule the start for after it,
  unless Sarah approves an exception in writing.

## References

- Full onboarding procedure: [SOP-002](../SOP-002-client-onboarding.md)
- Screening and pre-flight gates: [SOP-010](../SOP-010-client-screening-scorecard.md), [SOP-009](../SOP-009-engagement-preflight-checklist.md)
- Cleanup if the assessment finds damage: [SOP-003](../SOP-003-cleanup-12-step.md)
- Error prevention rules referenced throughout: [SOP-011](../SOP-011-error-prevention-protocol.md)
- Security, access, credentials: [SOP-006](../SOP-006-security-wisp.md)
- Welcome email: [04-clients/welcome-email-template.md](../../04-clients/welcome-email-template.md)
- What happens next: [SOP-013](SOP-013-first-30-days.md)
