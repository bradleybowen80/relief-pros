# SOP-009: Engagement Pre-Flight Checklist (Guardrails)

**Status:** active
**Owner:** Sarah
**Last reviewed:** 2026-07-28

## Purpose

Run every non-negotiable guardrail as a yes/no gate before any client engagement is signed. These are the rules that prevent catastrophic outcomes, not merely bad ones. Every item must be a clear YES (or a justified N/A) before the engagement letter goes out. A single NO stops the engagement until it is resolved. This is the encoded version of master handoff Section 9.

## Trigger

A prospect has passed the screening scorecard (SOP-010) and is about to be sent an engagement letter. Do not skip because a client seems eager.

## The gate: every item must pass before signing

### 1. Trust Fund Recovery Penalty (TFRP)

- [ ] The engagement grants the firm NO payment authority over the client's payroll, tax, or any withholding accounts.
- [ ] The engagement letter states this exclusion explicitly.

Why: the IRS holds "responsible persons" personally liable for unpaid trust-fund (withheld) taxes under IRC 6672. The exposure is unlimited and not dischargeable in bankruptcy. This is one of the two reasons payroll is excluded at launch. Nobody at this firm ever holds payment authority over a client's payroll or tax accounts.

### 2. Texas data-processing sales tax

- [ ] The engagement is bookkeeping, reconciliation, and financial statements only. No payroll processing, AP, or AR.
- [ ] Services are invoiced as separate line items so a taxable service can never contaminate the whole contract.

Why: payroll processing, AP, and AR are taxable data processing in Texas at 6.25% plus local on 80% of the charge. Bookkeeping, reconciliation, and financial statements are not. Mixed contracts fall under the 5% incidental rule, so services are always separately stated. The Comptroller updated the data-processing rule in 2025; review the boundary annually with the CPA.

### 3. No force-balancing (operational rule, confirmed at engagement)

- [ ] The team confirms the standing rule: reconciliation differences are diagnosed or escalated, never plugged. (Enforced in every close, SOP-001 step 6.)

### 4. Period locking (operational rule, confirmed at engagement)

- [ ] Closing date plus password after every close; documented reopen for any change to a closed period. (SOP-001 step 11.)

### 5. Separation of duties

- [ ] Brad moves documents and administers payment mechanics. Sarah makes every accounting judgment. The engagement and workflow reflect this split. Ambiguity goes to Sarah's review queue.

### 6. File hygiene (operational rule, confirmed at engagement)

- [ ] The team confirms the standing checks run every close: Opening Balance Equity zero after setup, Undeposited Funds swept, bank-feed Add-versus-Match verified and never auto-accepted.

### 7. Data security

- [ ] MFA everywhere. Client documents through the portal only, never email. Encrypted archive, seven-year retention.
- [ ] A cyber policy is active before the firm holds any client credential.
- [ ] The WISP (SOP-006) is current.

### 8. Scope armor

- [ ] The engagement letter defines scope, deliverables, document deadlines, what happens when documents do not arrive, and out-of-scope referrals (tax advice, Form 3115, reasonable compensation, sales tax nexus).

Why: scope creep is the number one failure mode of fixed-fee engagements.

### 9. E&O before client one

- [ ] $1M/$1M professional liability is active, naming the LLC and covering both individuals performing services.
- [ ] It is a claims-made policy and the retroactive date precedes this engagement.
- [ ] The full service scope was declared on the application. Cyber is added.

### 10. Client screening scorecard

- [ ] SOP-010 was run and passed: 2+ year old business preferred, restaurants under the 25% roster cap, client accepts ACH autodraft and the portal.

### 11. No tax or legal advice

- [ ] The engagement flags-and-refers all tax and legal questions. Sarah is not a CPA, EA, or attorney.
- [ ] The relevant disclosure rules (IRC 7216 and 6713, AICPA Code) are understood; Circular 230 does not bind a non-practitioner but the confidentiality rules do.

## Done when

- Every item above is YES or a documented N/A.
- Any NO has been resolved (not waived) before the engagement letter is sent.
- The completed checklist is saved to the client's workpapers in the encrypted archive.

## If something goes wrong

- **A client wants a service on the excluded list (payroll, AP, AR, tax prep, payment authority):** decline and refer. These are not addable by amendment. Guardrails 1 and 2 and the settled decisions govern.
- **Insurance is not yet active:** the engagement cannot be signed. Bind coverage with the correct retroactive date first.
- **An item is "probably fine":** it is not passed until it is a clear YES. This checklist has no soft passes.

## References

- Every guardrail's source: master handoff Section 9, [drive-registry.md](../00-company/drive-registry.md)
- Operational enforcement: [SOP-001](SOP-001-monthly-close.md), [SOP-006](SOP-006-security-wisp.md), [SOP-007](SOP-007-records-retention.md)
- Screening: [SOP-010](SOP-010-client-screening-scorecard.md)
- Hard rules: [CLAUDE.md](../CLAUDE.md)
