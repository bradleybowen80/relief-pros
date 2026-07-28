# SOP-002: Client Onboarding

**Status:** active
**Owner:** Sarah
**Last reviewed:** 2026-07-28

## Purpose

Take a signed prospect from "yes" to "first close ready" with every access, authorization, and control in place before any bookkeeping work begins. A clean onboarding is what makes the first monthly close (SOP-001) run without surprises. Run every step. Skipping the boring ones is how scope creep, unbilled work, and Trust Fund Recovery Penalty exposure enter the practice.

## Trigger

A prospect has passed the screening scorecard (SOP-010) and the engagement pre-flight checklist (SOP-009) has been completed and cleared. Onboarding does not start before both are done.

## Before you start: what must already be true

- The client passed screening (2+ years old preferred, accepts ACH autodraft, accepts the portal).
- E&O and cyber insurance are active with a retroactive date preceding this engagement. No onboarding before coverage is bound. (Guardrail 9.)
- The mid-January to mid-February onboarding freeze is not in effect, or Sarah has explicitly approved an exception.

## Steps

### 1. Execute the engagement letter and ACH authorization

1. Send the engagement letter ([04-clients/engagement-letter-template.md](../04-clients/engagement-letter-template.md)) and the ACH debit authorization ([04-clients/ach-debit-authorization.md](../04-clients/ach-debit-authorization.md)) for signature.
2. Confirm the letter scopes services to bookkeeping only and explicitly excludes tax preparation, payroll, AP, AR, and payment authority over the client's accounts. (Guardrails 1, 11; settled decisions.)
3. Do not begin any bookkeeping work until both documents are signed and returned. Signed copies go to the encrypted archive (backup layer 3), never to git, Drive, or the Project.

### 2. Set up payment

1. Enroll the client in ACH autodraft. First draft runs on the 1st, in advance. There is no invoicing and no receivable. (Settled decision 7.)
2. For a cleanup engagement, schedule the 50% deposit draft at signing and the balance on delivery.
3. Confirm the receipt-email automation is armed so a receipt sends automatically after every draft.

### 3. Request access, least privilege

1. Request access to the client's QuickBooks Online file through **QuickBooks Online Accountant** (accountant access, not the client's login).
2. Request read access to bank and credit card feeds as needed for the tier. The firm never holds authority to move money out of client accounts. (Guardrail 1, TFRP.)
3. Set up MFA on every account the firm touches. Credentials are stored only in the password manager, never in a document, email, or this repo. (Guardrail 7.)

### 4. Audit the chart of accounts

1. Review the existing chart of accounts before touching a single transaction.
2. Merge duplicate accounts, standardize naming, and remove or deactivate accounts that will not be used.
3. Fixing the chart of accounts first is non-negotiable. Categorizing before the chart is clean means redoing the work (the most common cleanup mistake, master handoff Section 12).

### 5. Verify opening balances

1. Establish the engagement start date and the opening balances as of that date.
2. Tie every opening bank, credit card, and loan balance to a statement or lender balance for that date.
3. Confirm **Opening Balance Equity nets to zero** once setup is complete. A non-zero balance means a setup error to resolve now, not at the first close.

### 6. Build the bank rules

1. Configure bank rules per Sarah's specifications for this client's recurring transactions.
2. Rules speed categorization; they never auto-post without the Add-versus-Match verification in SOP-001. Rules assist judgment, they do not replace it.

### 7. Collect the W-9s now

1. Collect a W-9 from every subcontractor and 1099-eligible vendor at onboarding. Never in January.
2. This is counter-seasonal by design: it removes the January scramble and prices 1099 prep as a separate, calm fee. (Master handoff Section 10, January crunch.)

### 8. Set up the portal and folder tree

1. Invite the client to the document portal. All statements, receipts, and deliverables move through the portal only, never email. (Guardrail 7.)
2. Create the client's folder tree (one tree per client) in the firm's file structure.
3. Arm the monthly document auto-request with reminders on days 1, 3, and 5 (SOP-004).

### 9. Capture Sarah's standing rules for this client

1. Record this client's categorization conventions, recurring vendors, class/job structure (Complex tier), and anything idiosyncratic, so the monthly close is repeatable by anyone.
2. Store these client rules in the client's working file location, not in this repo.

### 10. Confirm first-close readiness

1. Confirm: signed letter and ACH authorization, active insurance, QBO access with MFA, clean chart of accounts, verified opening balances at zero OBE, bank rules built, W-9s collected, portal live, document automation armed.
2. Add the client to the KPI dashboard (SOP-008) and to the monthly close roster.

## Done when

- Engagement letter and ACH authorization are signed and archived (encrypted, not in the repo).
- ACH autodraft is enrolled and the receipt automation is armed.
- The firm has least-privilege QBO access with MFA, and no payment authority over client accounts.
- The chart of accounts is clean and opening balances tie out with Opening Balance Equity at zero.
- Bank rules are built, W-9s are collected, and the portal is live with document reminders armed.
- The client is on the KPI dashboard and the monthly close roster.

## If something goes wrong

- **The client refuses ACH autodraft or the portal:** stop. This is a decline per the screening rules, even late. Do not build a receivable or an email-based document flow to accommodate them.
- **Insurance is not yet active:** onboarding pauses until coverage with the correct retroactive date is bound. No exceptions.
- **The prior bookkeeper left a mess:** this is a cleanup engagement, not standard onboarding. Quote it and run SOP-003 before starting monthly service.
- **A client asks the firm to handle payroll, pay bills, or move money:** decline and refer. Explain that the engagement excludes payment authority, and why (TFRP). Amending scope to add these is prohibited. (Guardrails 1, 2, 11.)
- **It is mid-January to mid-February:** the onboarding freeze is in effect. Schedule the start for after the freeze unless Sarah approves an exception.

## References

- Screening before onboarding: [SOP-010](SOP-010-client-screening-scorecard.md)
- Pre-flight guardrail gate: [SOP-009](SOP-009-engagement-preflight-checklist.md)
- Templates executed here: [engagement-letter-template.md](../04-clients/engagement-letter-template.md), [ach-debit-authorization.md](../04-clients/ach-debit-authorization.md)
- Cleanup path: [SOP-003](SOP-003-cleanup-12-step.md)
- Document automation: [SOP-004](SOP-004-document-chase.md)
- Security and retention: [SOP-006](SOP-006-security-wisp.md), [SOP-007](SOP-007-records-retention.md)
- Hard rules and settled decisions: [CLAUDE.md](../CLAUDE.md)
