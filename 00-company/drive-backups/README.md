# drive-backups

Local snapshots of every document that lives in Google Drive. Drive holds the
live, editable copy; this folder holds the on-disk backup so nothing about the
business exists only in the cloud.

## Rules

- Every document in [drive-registry.md](../drive-registry.md) has a file here.
- Docs export as markdown. Sheets export as both markdown (readable) and xlsx
  (faithful, keeps formulas and formatting).
- When a Drive document changes meaningfully, re-export its backup and note
  the snapshot date in the registry.
- These are snapshots, not working copies. Edit in Drive, then re-export. Never
  edit a backup directly.

## Contents

| File | Source | Snapshot |
|---|---|---|
| PROJECT-KICKOFF-master-handoff.md | Master Handoff Doc | 2026-07-28 |
| business-plan-14-tabs.md | Business Plan Sheet (text) | 2026-07-28 |
| The-Relief-Pros-Business-Plan.xlsx | Business Plan Sheet (full) | 2026-07-28 |
