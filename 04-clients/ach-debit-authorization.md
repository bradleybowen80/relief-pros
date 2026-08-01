# ACH Debit Authorization Template

**Status:** RETIRED 2026-08-01, kept for reference only
**Owner:** Sarah
**Last reviewed:** 2026-08-01

> **RETIRED. Do not send this form to clients.** The firm settled on QuickBooks Payments recurring payments as the rail (2026-08-01). Intuit captures the debit authorization electronically: the client receives an enrollment email, enters bank details directly with Intuit, and accepts the recurring draft. The firm never collects bank numbers, which also removes the encrypted-archive handling this form required. Autodraft terms (drafted the 1st, notice periods, failed-payment handling) live in the engagement letter. This file stays in the repo so the attorney can confirm during the engagement-letter review that no standalone form is needed, and as a fallback if the rail ever changes.
>
> Original template follows, unchanged.

> **ATTORNEY REVIEW REQUIRED BEFORE FIRST USE.** This template is signed alongside the engagement letter. It authorizes the Firm to pull the agreed fee. It grants the Firm no authority to move money out of the Client's accounts for any other purpose. A Texas attorney reviews it once before first use.
>
> Fill every [BRACKET]. Confirm the payment processor's own authorization language is incorporated if the rail (for example QuickBooks Payments) requires a specific form; this template supplements, it does not replace, a processor-required form.
>
> **This is a one-directional debit authorization for the Firm's fees only.** It is not payment authority over the Client's payroll, tax, vendor, or other accounts. That distinction is a hard guardrail (Trust Fund Recovery Penalty).

---

## ACH Debit Authorization

**The Relief Pros, LLC** ("the Firm")

**Client:** [CLIENT LEGAL NAME] ("the Client")
**Date:** [DATE]

### 1. Authorization

The Client authorizes the Firm to initiate ACH debit entries to the Client bank account identified below, solely for the bookkeeping fees agreed in the engagement letter dated [DATE], and to debit that account for those fees on the schedule in Section 2. The Client authorizes the Client's bank to honor those debits.

### 2. Amount and schedule

- **Monthly bookkeeping fee:** $[AMOUNT], drafted on the 1st of each month, in advance.
- [**Cleanup / catch-up:** $[AMOUNT], 50% at signing and the balance on delivery.]
- [**1099 preparation:** $[AMOUNT] per form, drafted in January.]

A failed draft will be retried on day 3. Fee changes will be communicated in writing at least [10] days before the next draft.

### 3. Scope and limits of this authorization

- This authorization permits the Firm to debit **only the Firm's own bookkeeping fees** stated above.
- This authorization grants the Firm **no authority** to withdraw, transfer, disburse, or otherwise move funds from any Client account for any other purpose, including payroll, taxes, vendor payments, or any third party.
- The Firm never holds signature authority or payment authority over the Client's payroll, tax, or withholding accounts.

### 4. Bank account

- **Bank name:** [BANK]
- **Account holder:** [NAME ON ACCOUNT]
- **Routing number:** [ROUTING]
- **Account number:** [ACCOUNT]
- **Account type:** [Checking / Savings]

### 5. Revocation

This authorization remains in effect until the Client revokes it in writing with at least [10] days' notice before the next scheduled draft, or until the engagement ends. Revoking this authorization does not waive fees already earned for the current period.

---

**Authorized and signed:**

[CLIENT LEGAL NAME], by: __________________________
Name and title: [NAME, TITLE]
Date: __________

---

### Drafting and handling notes (delete before sending)

- The completed form contains bank account numbers. It is Client data: it goes to the encrypted archive only, never to git, Drive, the Project, or email. Collect it through the portal or the processor's secure form.
- Confirm the processor's required authorization language is included where applicable.
- Confirm Section 3's limitation language survived attorney review intact. It is the TFRP guardrail in contract form.

## References

- Engagement letter it accompanies: [engagement-letter-template.md](engagement-letter-template.md)
- TFRP and payment-model guardrails: [../01-sops/SOP-009-engagement-preflight-checklist.md](../01-sops/SOP-009-engagement-preflight-checklist.md), [../CLAUDE.md](../CLAUDE.md)
- Payment failure handling: [../01-sops/SOP-005-payment-failure-service-pause.md](../01-sops/SOP-005-payment-failure-service-pause.md)
