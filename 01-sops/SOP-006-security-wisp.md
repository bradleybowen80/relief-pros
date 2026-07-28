# SOP-006: Data Security and Written Information Security Program (WISP)

**Status:** active
**Owner:** Brad (builds and maintains), Sarah (accountable owner)
**Last reviewed:** 2026-07-28

## Purpose

Protect client credentials and financial data, and satisfy the written information security program (WISP) that any competent prime, insurer, or referral partner will expect. Security is Brad's skill set and a genuine differentiator most solo firms lack. This SOP is the firm's standing WISP.

## Trigger

Standing. Applies before the firm holds any client credential or document, and is reviewed at least annually and whenever the stack changes.

## Scope

Everyone performing services for the firm (Sarah, Brad) and every system that touches client data: QuickBooks Online, the document portal, file storage, email, the password manager, and the encrypted archive.

## Controls

### 1. Access and authentication

1. MFA is enabled everywhere: QBO/QBOA, portal, storage, email, password manager, bank feed connections.
2. Credentials live only in the password manager. Never in a document, spreadsheet, email, chat, or this repo.
3. Least privilege: request only the access a tier needs. The firm never holds authority to move money out of client accounts. (Guardrail 1, TFRP.)
4. Access is reviewed at offboarding and revoked immediately when an engagement ends.

### 2. Document handling

1. All client documents move through the portal only. Never by email, ever. (This is also enforced in SOP-001 and SOP-004.)
2. A dedicated work device is used for client work, kept patched and encrypted at rest.
3. Screens lock when unattended. No client data on personal or shared devices.

### 3. Storage and encryption

1. Client working files and the archive are encrypted at rest.
2. Backups follow the three-layer scheme (see automation-and-backup-scheme). The encrypted cold archive holds workpapers, signed engagement letters, ACH authorizations, and close checklists.
3. No client data ever goes to git, Google Drive, or the Claude Project. Those hold SOPs, templates, and rules only. (Repo rule, CLAUDE.md.)

### 4. Insurance and breach readiness

1. A cyber policy is active before the firm holds any client credential. (Guardrail 7; roughly $47/mo.)
2. A breach response is defined: contain, assess scope, notify affected clients and authorities per applicable law, document the incident and the remediation.
3. E&O is active with a retroactive date preceding the first engagement. (Guardrail 9.)

### 5. Retention and destruction

1. Records are retained seven years, encrypted (SOP-007).
2. At the end of retention, data is destroyed securely (cryptographic erase or equivalent), and the destruction is logged.

## Done when (as an audit, run at least annually)

- MFA is confirmed active on every system.
- No credential exists outside the password manager.
- No client document has moved by email.
- The work device is encrypted and patched.
- Cyber and E&O policies are active with correct dates.
- The archive is encrypted and the retention schedule is current.
- This WISP has been reviewed and dated within the last 12 months.

## If something goes wrong

- **A credential ends up in a document or email:** rotate it immediately, move it to the password manager, and delete the exposed copy from every location.
- **A client insists on emailing documents:** decline and re-send the portal invitation. Email is not an accepted channel. A client who refuses the portal is a decline (screening rule).
- **A suspected breach:** execute the breach response, notify Sarah immediately, preserve logs, and do not delete anything until scope is assessed.

## References

- Records retention detail: [SOP-007](SOP-007-records-retention.md)
- Backup layers and encryption: [automation-and-backup-scheme.md](../00-company/automation-and-backup-scheme.md)
- Insurance guardrails: [SOP-009](SOP-009-engagement-preflight-checklist.md)
- Data-security hard rule: [CLAUDE.md](../CLAUDE.md)
