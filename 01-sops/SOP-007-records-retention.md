# SOP-007: Records Retention Schedule

**Status:** active
**Owner:** Brad (administers archive), Sarah (accountable owner)
**Last reviewed:** 2026-07-28

## Purpose

Keep the right records for the right length of time, encrypted, so the firm can always prove its work and meet any records request, and dispose of records securely when retention ends.

## Trigger

Standing. A record enters retention when it is created or received. Review the schedule annually.

## Retention period

**Seven years, encrypted.** This exceeds the floors and matches industry standard:

- IRS tax-return preparer record floor: 3 years. (The firm does not prepare taxes, but this is the nearest federal floor.)
- Texas default civil records: 3 years.
- Industry standard for bookkeeping workpapers: 7 years.

The firm keeps seven years. Where a specific client contract or an insurer requires longer, follow the longer period.

## What to retain

Per client, in the encrypted archive:

1. Signed engagement letters and ACH debit authorizations.
2. Monthly close checklists and workpapers.
3. Monthly exports: trial balance, P&L, balance sheet, general ledger (backup layer 2).
4. Reconciliation reports and any discrepancy diagnoses.
5. W-9s collected at onboarding and any 1099s filed.
6. Cleanup "before" and "after" exports and the cleanup summary.
7. Material client correspondence that documents a decision or a referral.

## Where it lives

1. Encrypted cold archive: one encrypted drive plus a cloud copy (backup layer 3). Cost under $100.
2. Client data never goes to git, Google Drive, or the Claude Project. Those hold no client data by rule.

## Destruction

1. At seven years (or the applicable longer period), destroy the record securely: cryptographic erase or equivalent.
2. Log what was destroyed and when.
3. If any litigation, claim, or audit is pending or reasonably anticipated, suspend destruction for the affected records until it resolves (legal hold).

## Post-closure

If the firm ever winds down, retain workpapers seven years encrypted and keep E&O tail coverage one to two years, because claims arrive after the work ends. (Master handoff wind-down mechanics.)

## Done when (annual review)

- The retention schedule has been reviewed and dated within the last 12 months.
- Every client's required records are present in the encrypted archive.
- Records past seven years with no legal hold have been securely destroyed and logged.
- No client data exists in git, Drive, or the Project.

## If something goes wrong

- **A record is missing from the archive:** reconstruct it from QBO or the source and file it. Confirm the monthly export automation is running (an unverified backup is not a backup).
- **A destruction was logged but a legal hold applies:** stop all destruction, notify Sarah, and preserve everything related to the matter.

## References

- Encryption and archive controls: [SOP-006](SOP-006-security-wisp.md)
- Backup layers and the monthly export job: [automation-and-backup-scheme.md](../00-company/automation-and-backup-scheme.md)
- Wind-down retention: master handoff Section 16, [drive-registry.md](../00-company/drive-registry.md)
