# QuickBooks Learning Guide

**For:** a first-time QuickBooks Online user
**Status:** active
**Last reviewed:** 2026-08-01
**Verified against:** Intuit official help articles, August 2026

---

## Read this part first

**The interface changed in May 2026 and most tutorials online are now wrong.**

Intuit made the "modern experience" the default on **May 8, 2026**, and retired
the classic report views a few weeks later. There is no way back. Any guide,
YouTube video, or course that shows a left sidebar reading *Dashboard, Sales,
Expenses, Reports* is describing software that no longer exists.

This matters more than it sounds. A beginner following an outdated tutorial
concludes they are stupid when they are actually just looking at a different
program. **You are not lost. The menu moved.**

**The three-second test for what you are looking at:**

| You see | You are in |
|---|---|
| A slim **icon rail** on the far left with Create, Bookmarks, Home, Feed, Reports, All apps | **Modern.** This is current. Everything in this guide assumes it. |
| A **text list**: Dashboard, Transactions, Sales, Expenses, Reports | **Classic.** Retired mid-2026. If you see this, you are in an old screenshot. |

**Everything is behind one of three controls.** Learn these and you can find
anything:

1. **Create** (the `+`) — the only correct way to start a new transaction
2. **All apps** — hover it, get a flyout with everything grouped
3. **The gear icon, top right** — company-level settings, the audit log, lists

---

## Part 1: The mental model

Before any buttons. Six ideas, and everything else is detail.

**1. QuickBooks is a filing system, not a calculator.** Its whole job is to put
every dollar in the right bucket. The buckets are the **Chart of Accounts**. When
QuickBooks says "Category," it means "which account." Same thing, two words, and
the inconsistency confuses everybody at first.

**2. Every transaction hits two places.** Money left checking and became a fuel
expense. Cash goes down, expense goes up. You will almost never type debits and
credits, because the forms do it for you. That is the entire point of the forms.

**3. The bank feed is not your books.** It is a pile of stuff the bank sent over,
sitting outside your books until a human decides what it is. Nothing in
**Pending** affects a single report.

**4. There are two ways a transaction gets into the books, and confusing them is
the most expensive beginner error.** Either you make a new one (**Post**, formerly
"Add") or you connect the bank line to something already there (**Match**). If
you Post something that was already in the books, it now exists twice.

**5. Forms exist so the subledgers stay intact.** Behind Accounts Receivable and
Accounts Payable are detailed lists of who owes what. Using an Invoice keeps that
list right. Using a journal entry to move A/R breaks it permanently. Use the form
that matches what happened.

**6. Reconciling is the proof.** Everything above is bookkeeping's version of
showing your work. Reconciling is checking the answer against reality: the bank
statement. Until an account is reconciled to zero difference, the number is a
claim, not a fact.

---

## Part 2: Where everything is

Modern navigation. The classic path is shown only where you might meet it in old
material.

| What you want | Where it is |
|---|---|
| **Chart of Accounts** | All apps → Accounting → Chart of accounts |
| **Bank transactions** (the feed) | All apps → Accounting → Bank transactions |
| **Reconcile** | All apps → Accounting → Reconcile |
| **Bank rules** | All apps → Accounting → Rules |
| **Recurring transactions** | All apps → Accounting → Recurring transactions |
| **Products & Services** (items) | All apps → Sales & Get Paid → Products & services |
| **Customers / Invoices** | All apps → Sales & Get Paid |
| **Vendors / Bills** | All apps → Expenses & Bills |
| **Reports** | The Reports icon on the left rail |
| **Audit log** | Gear → Audit log |
| **Settings** | Gear → Account and settings |
| **Close the books** | Gear → Account and settings → Advanced → Accounting → Edit |

**Create (the +)** groups every transaction into four columns:

- **Customers** — Invoice, Receive payment, Estimate, Credit memo, Sales receipt, Refund receipt
- **Vendors** — Expense, Check, Bill, Pay bills, Purchase order, Vendor credit
- **Employees** — Payroll, time activity, timesheets *(not used at this firm)*
- **Other** — Bank deposit, Transfer, Journal entry, Statement, Inventory adjustment

**Bookmarks** sit at the top of the rail. Pin the four or five pages you use
daily and stop navigating. The flyout also has **Open Link in New Tab**, which is
how you get a report open beside a transaction.

**Search** (the magnifier, or `Ctrl+Alt+F`) is far better than beginners expect.
It searches amount, reference number, memo, description, contact, class, and
location, and it accepts plain English like *"invoice over $100 from April Banks
this year."* **Advanced Search** reaches transactions older than two years.
Searching an exact dollar amount is the fastest way to find a duplicate.

---

## Part 3: The vocabulary, in plain words

The words that trip up every beginner, defined the way QuickBooks actually uses
them.

### The bank feed

The banking page was rewritten in May 2026 and **the tab names changed.** Older
material uses the old names, so both are given here.

| Now | Formerly | What it means |
|---|---|---|
| **Pending** | For review | Downloaded from the bank. Not in your books. Affects nothing. |
| **Posted** | Categorized | Accepted into the books. It is now real. |
| **Excluded** | Excluded | Deliberately ignored. Never hits the books. |
| **Post** | Add | Creates a **brand new** transaction from the bank line. |
| **Match** | Match | Links the bank line to something **already in QuickBooks**. Creates nothing. |

- **Match** means "I already entered this, connect them."
- **Post/Add** means "this doesn't exist yet, make it."
- **Record as transfer** means money moved between two accounts you own. Not
  income, not expense. If both accounts are connected, the same movement
  downloads twice and you match the second to the first.
- **Split** divides one bank line across several categories until the difference
  reads $0.00.

### The structure

- **Chart of Accounts** — the master list of buckets. Everything lands in one.
- **Category** — QuickBooks' word for "which account." Same thing.
- **Account Type vs Detail Type** — **Account Type** is structural (Bank,
  Expense, Fixed Asset, Income, and so on) and decides which statement the account
  appears on and where. **Detail Type** is a sub-label mostly used for tax mapping.
  **Get Account Type right. Do not agonize over Detail Type.**
- **Item / Product & Service** — the line you put on a sales form. It points at
  an income account behind the scenes. Four kinds: Inventory, Non-inventory,
  Service, Bundle.
- **Customer** = who paid. **Project** = which job. **Class** = which part of the
  business. **Location** = which site. You will use Customer and possibly Project.
  Do not turn on all four.

### Money out: three forms, one difference

Intuit's own framing: the only real difference is **the timing of the payment.**

| Form | Use when |
|---|---|
| **Bill** | You owe it and will pay later. Creates Accounts Payable. |
| **Check** | Paid now, and you intend to print a physical check. |
| **Expense** | Paid now by card, ACH, debit, or auto-draft. |
| **Pay bills** | The **only** correct way to settle a Bill you already entered. |

Intuit states it flatly: **do not use a Check or Expense to pay an existing
bill.** Doing so records the expense twice and leaves the bill open forever.

### Money in

- **Invoice** — customer will pay later. Creates Accounts Receivable.
- **Sales Receipt** — sale and payment at the same moment. No A/R.
- **Receive Payment** — applies a payment **against an existing invoice**.
  Skip it and the invoice stays open forever even though the money is in the bank.
- **Bank Deposit** — groups several received payments into the one lump sum the
  bank actually shows.
- **Undeposited Funds** (also labeled **"Payments to deposit"**) — Intuit's own
  metaphor is a temporary lockbox holding payments until you record a formal
  deposit. The flow is: Receive payment → Undeposited Funds → Bank deposit →
  match the feed. If payments hit the bank individually, you do not need it.

### The controls

- **Journal Entry** — raw debits and credits with no form behind it. **A last
  resort, not a default.** It bypasses the A/R and A/P subledgers, cannot carry
  items, and cannot be matched in the bank feed.
- **Reconcile** — tick your records against the statement until **Difference =
  $0.00**. Produces a permanent Reconciliation Report at Reconcile → History by
  account.
- **Closing date** — a lock date with two levels: warning only, or warning plus
  password. Use the password.
- **Audit log** — who did what. Sign-ins, settings changes, deleted transactions.
  **Two years of retention**, 150 rows at a time, cannot be turned off.
- **Bank rule** — an if/then that pre-fills a bank line. Up to 5 conditions,
  drag to set priority, highest priority wins. Rules act on Pending only; they
  are **not** retroactive.
- **Recurring transaction** — a saved template. Three types: **Scheduled**
  (creates itself), **Reminder** (nudges you), **Unscheduled** (a stored skeleton
  you invoke manually). The unscheduled one is underrated.
- **Accrual vs Cash** — accrual records income when you send the invoice; cash
  records it when the money moves. Any report can be flipped with the
  **Accounting method** toggle, which is why you check it before believing a
  number.

### If you learned QuickBooks Desktop

| Desktop | Online |
|---|---|
| Memorized transaction | **Recurring transaction** |
| Memorized report | **Custom report** (Save as) |
| Write Checks | **Check** |
| Enter Bills / Pay Bills | **Bill** / **Pay bills** |
| Items list | **Products and services** |
| Renaming rules | **Bank rules** |
| Edit → Preferences | **Gear → Account and settings** |
| Accountant's Copy | **Does not exist.** Live accountant access instead. |
| Voided/Deleted Transactions report | **Does not exist.** Use the Audit log filtered to Deleted/Voided. |
| Undo Last Reconciliation | **Not available to regular users.** Only QuickBooks Online Accountant can reset one. |

---

## Part 4: Keyboard shortcuts

Verified against Intuit's own documentation. **The modifier is `Ctrl+Alt`** on
Windows and `Ctrl+Option` on Mac. It is not Ctrl+Shift, which is what most people
guess.

One rule covers the platform difference: **wherever Windows says Alt, Mac says
Option.**

### Open the shortcut list

`Ctrl+Alt+/` (add Shift if nothing happens; Intuit's own pages disagree on
whether it is `/` or `?`). The panel also shows your Company ID, which support
will ask for.

### From any main page

| Keys | Does |
|---|---|
| `Ctrl+Alt+A` | Chart of Accounts |
| `Ctrl+Alt+F` | Search |
| `Ctrl+Alt+C` | Customers |
| `Ctrl+Alt+V` | Vendors |
| `Ctrl+Alt+L` | Lists |
| `Ctrl+Alt+I` | New Invoice |
| `Ctrl+Alt+X` | New Expense |
| `Ctrl+Alt+W` | New Check |
| `Ctrl+Alt+E` | New Estimate |
| `Ctrl+Alt+R` | Receive Payment |
| `Ctrl+Alt+H` | Help |

### Inside an open transaction

**Careful: the same key can mean something different here.** `Ctrl+Alt+X` opens a
new expense from a main page and *exits the transaction* from inside one.

| Keys | Does |
|---|---|
| `Ctrl+Alt+S` | Save and New |
| `Ctrl+Alt+M` | Save and Send |
| `Ctrl+Alt+X` | Exit transaction |
| `Ctrl+Alt+C` | Cancel |
| `Alt+S` | Save (use `Alt+Shift+S` in Chrome and Firefox) |
| `Alt+E` | Edit a saved transaction |

### Moving around a form

| Keys | Does |
|---|---|
| `Tab` / `Shift+Tab` | Next / previous field |
| `Space` | Toggle a checkbox |
| `Alt + ↓` | Open a dropdown or the calendar |
| Type letters in a dropdown | Filters the list. Then `Tab` to accept. |

### Date fields, the single biggest time save

Put the cursor in any date field and press one letter. Identical to Desktop.

| Key | Jumps to |
|---|---|
| `T` | **T**oday |
| `+` / `-` | Next / previous day. Press repeatedly to step. |
| `W` | First day of the **w**eek |
| `K` | Last day of the wee**k** |
| `M` | First day of the **m**onth |
| `H` | Last day of the mont**h** |
| `Y` | First day of the **y**ear |
| `R` | Last day of the yea**r** |

The mnemonic: the **outer letters** of wee**K**, mont**H**, yea**R** are the
"last day" keys.

You can also skip the slashes when typing: `101526` becomes 10/15/2026, and
`1015` becomes Oct 15 of the current year.

### The calculator nobody knows about

**Quantity, Rate, and Amount fields are calculators.** Type `+ - * /` and
parentheses, then press `Tab` to evaluate.

- `1256.94+356.50`
- `108*1.085`
- `13.95+(25.95*.75)`

**Do not type a leading `=`.** This is not Excel. Also note the formula is not
stored, only the answer.

### Reference number field

`+` and `-` step the number up and down. Typing `T` enters "To Print."

---

## Part 5: The reports that matter

All under the **Reports** icon. Click any number in any report to drill into the
transactions behind it. That single habit teaches you more about a file than
anything else.

| Report | What it is actually for |
|---|---|
| **Profit and Loss** | Income minus expenses over a period. What clients ask about. |
| **Balance Sheet** | Assets, liabilities, equity at a moment. Where junk balances show up. |
| **Trial Balance** | Every account with its balance. The fastest full scan, and the handoff to the CPA. |
| **General Ledger** | Every transaction by account, with running balances. Where you go when the balance sheet is wrong. |
| **Transaction Detail by Account** | Same data, easier to read and export. The workhorse for finding duplicates. |
| **Transaction List by Date** | Everything chronologically. Best for "what happened around this date." |
| **Reconciliation Report** | Proof a month tied. Auto-saved at Reconcile → History by account. Save a PDF every month. |
| **A/R Aging** | Who owes you. Fake balances mean payments were not applied with Receive Payment. |
| **A/P Aging** | What you owe. Fake balances mean bills were paid with a Check or Expense instead of Pay bills. |
| **Profit and Loss by Customer** | Profit per customer or job. Only meaningful if costs are tagged. |

**Two habits worth building on day one:**

1. **Check the Accounting method toggle and the date range before you believe any
   number.** A cash-basis P&L shown to a client on accrual books is a wrong answer
   delivered confidently.
2. **Save the reports you run repeatedly.** Customize → Save as → name it. They
   land on the Custom reports tab. One gotcha: sharing a saved report only reaches
   users who exist at the time you share, so re-share after adding staff.

---

## Part 6: Tricks worth learning early

| Trick | Why it matters |
|---|---|
| **Date-field letters** (`T`, `M`, `H`, `Y`, `R`) | Saves a few seconds per transaction, thousands of times a year. |
| **Calculator in amount fields** | Stop alt-tabbing to a calculator. |
| **Split a bank line** | One Home Depot charge across three jobs, in one screen. |
| **Find match** | QuickBooks can suggest **partial and combined** matches, so one $2,400 deposit can match three invoices. Most beginners never open this screen. |
| **Create a rule from a bank line** | The rule window opens pre-filled from the transaction you are looking at. |
| **Undo a posted transaction** | Posted tab → click the blue link in the "Added or Matched" column → Undo. It goes back to Pending. **Check first whether it was reconciled**, because undoing a reconciled item breaks the reconciliation. |
| **Search by exact amount** | The single fastest way to find a duplicate. |
| **Unscheduled recurring templates** | A stored skeleton for anything you enter often but not on a schedule. |
| **Drill into any number** | Click it. Modern reports keep your customizations when you come back. |
| **Bookmarks → Open Link in New Tab** | Report open beside the transaction you are fixing. |

### Accountant-only tools, free with QuickBooks Online Accountant

These do not exist for regular users and are a large part of why a bookkeeper
works from a QBOA login.

- **Reclassify transactions** — bulk-change account, class, or location across
  many transactions at once. Real limits: it cannot change the bank or credit card
  account on expenses, cannot touch inventory adjustments, cannot change payroll,
  and on transactions using products or services it can only change the class.
- **Write off invoices** — the correct way to clear a bad invoice. Not deletion.
- **Books review** — a five-stage month-end walkthrough (Setup/Cleanup,
  Transaction review, Account reconciliation, Final review, Wrap-up) that flags
  uncategorized transactions, missing payees, and unapplied payments.
- **Reconcile → reset** — the only way to undo a full reconciliation. A regular
  user simply cannot do this.
- **Prep for taxes** — year-end trial balance review with adjusting entries.

---

## Part 7: The traps

The specific things a new user does in month one that cause real damage.

| The trap | What breaks | Do this instead |
|---|---|---|
| **Clicking Post/Add on a payment for an invoice you already entered** | Income doubles, invoice stays open forever, A/R becomes fiction | Look for **Match** first, every time |
| **Paying a bill with Check or Expense** | Expense counted twice, A/P never clears | **Create → Pay bills**. Always. |
| **Deleting a transaction to fix it** | It is gone from reports but permanent in the audit log, and if it was reconciled the reconciliation breaks | Edit it, or void it. Never delete a reconciled transaction. |
| **Deleting or renaming accounts to tidy up** | Historical transactions get remapped and prior-period reports change. Deactivating an account that still holds a balance makes QuickBooks dump that balance into Opening Balance Equity. | Make it **inactive**, and only after its balance is zero |
| **Ignoring Undeposited Funds** | The balance grows forever, deposits stop matching, the balance sheet inflates | Check it monthly. It should be near zero. |
| **Batch-accepting the AI suggestions** | Months of misclassified expenses, and the AI learns your errors and repeats them | Use the review signals: green check means strong history, orange means thin data. Only batch the greens, and only after you have hand-categorized a full month. |
| **Turning on auto-post bank rules on day one** | Rules fire silently on sign-in and on upload. A bad rule is hundreds of bad entries before anyone looks. | Leave auto-post off until a rule has proven itself over a full month |
| **Turning on Classes, Locations, and Projects at once** | Half-tagged data is worse than untagged data | Turn on **one**, and only when there is a question it answers |
| **Never setting a closing date** | Last year's P&L quietly changes after the return was filed | Set it with a password as soon as a month is reconciled and delivered |
| **Forcing a reconciliation to zero** | QuickBooks posts the plug to **Reconciliation Discrepancies** and the real error is buried forever | Find the difference. Never accept the auto-adjustment. |
| **Uploading a CSV while the live feed is on** | Every transaction imports twice | One channel per account |
| **Journal entries to fix A/R or A/P** | The aging report and the balance sheet disagree permanently | Fix with the real forms |
| **Not attaching source documents** | Every question becomes a client email, and there is nothing to defend later | Attach as you go. Receipt capture is built in. |
| **Practicing on a live client file** | Real damage to a real business | Use the test drive. See below. |

---

## Part 8: Where to practice, free

### The sample company

**`qbo.intuit.com/redir/testdrive`** — no account, no login, no credit card.

It opens **Craig's Design and Landscaping Services**, a fictional business
pre-loaded with customers, vendors, items, invoices, bills, and history, running
at the **Plus** level so Classes, Locations, Projects, and Inventory are all
available to explore.

There is an Advanced version at `qbo.intuit.com/redir/testdrive_us_advanced`.

**What does not work, and this matters:**

- **No bank connection.** You cannot practice connecting a live feed. The
  pre-loaded queue does let you practice categorizing and matching, which is the
  part that matters most.
- **Nothing saves.** Intuit's words: the demo does not save changes, so
  experiment freely. It resets when you leave.
- No real payments, payroll, or app integrations.

Because nothing persists, it is perfect for drilling menus, shortcuts, and
reports, and useless for a multi-day exercise.

There is one gate: the test drive sits behind a security verification screen you
have to click through yourself.

### QuickBooks Online Accountant, free

Free to create, and it comes with free ProAdvisor Program membership.

- **"Your Books"** — the firm's own file, with all the features of QuickBooks
  Online **Advanced** at no cost
- The **accountant toolset** above, at every level
- **Free training and certification** through ProAdvisor Academy
- Discounted client subscriptions through ProAdvisor Preferred Pricing

**Best free practice setup:** create the QBOA login first, then open the test
drive from inside it, which exposes the accountant tools on the sample company.

---

## Part 9: The first week, in order

If you do nothing else, do these in this sequence. Each one is ten to twenty
minutes in the sample company.

1. **Get oriented.** Open the test drive. Find Chart of Accounts, Bank
   transactions, Reconcile, and Reports. Do not do anything yet. Just find them.
2. **Read the Chart of Accounts.** Look at Account Type on each one. Notice how
   the types group into the balance sheet and the P&L.
3. **Run a Profit and Loss and a Balance Sheet.** Flip the Accounting method
   toggle and watch the numbers change. Understand why.
4. **Click a number.** Drill from a report into the transactions behind it. Then
   drill into one transaction. This is the single most useful habit in the
   software.
5. **Categorize ten bank lines by hand.** For each one, deliberately decide Post
   or Match. Do not batch anything.
6. **Split one transaction** across two categories until the difference is zero.
7. **Practice the date keys.** Open any form and press `T`, `M`, `H`, `Y`. Use
   the calculator in an amount field.
8. **Reconcile one account** against the statement balance. Get it to $0.00.
9. **Open the Audit log.** See what it records about everything you just did.
10. **Set a closing date** with a password. Then try to edit something before it
    and watch what happens.

At the end of that, you know more about QuickBooks than most people who have used
it for a year, because you know *why* it does what it does.

---

## What is not settled, and should be tested rather than trusted

Written down deliberately, because a guide that pretends to be complete is worse
than one that names its gaps.

- Whether the in-app shortcut panel survived the May 2026 redesign.
- Whether the correct combination is `Ctrl+Alt+/` or `Ctrl+Alt+?`. Intuit's own
  pages disagree.
- `Ctrl+Alt+J` (journal entry) and a few others appear in one Intuit publication
  and not in the primary help article. Try them; do not rely on them.
- Whether you can duplicate a transaction. Widely used, not currently documented.
  Check the **More** menu at the bottom of a form.
- Whether multiple posted bank transactions can be undone in a batch.
- Report availability by subscription tier. Intuit has added lower tiers; check
  the live matrix.

---

## References

- Firm procedure this supports: [SOP-011 Error Prevention Protocol](../01-sops/SOP-011-error-prevention-protocol.md)
- The monthly close: [SOP-001](../01-sops/SOP-001-monthly-close.md)
- The weekly rhythm: [SOP-015](../01-sops/client-lifecycle/SOP-015-weekly-hour.md)

Everything in this guide was checked against Intuit's official help articles in
August 2026. Intuit changes this software constantly. When a path here is wrong,
fix it here rather than working around it, and note the date.
