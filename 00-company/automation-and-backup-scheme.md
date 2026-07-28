# Automation and Backup Scheme

**Owner:** Brad (builds and maintains)
**Last reviewed:** 2026-07-28

Brad's build list plus the three-layer backup design from master handoff Section 14, and the repo's own redundancy topology. The governing principle: nothing about the business may exist in only one place. An unverified backup is not a backup.

## Part A: What Brad builds

### Client-facing

- Website, bookkeeping language only, one vertical focus. (Naming gate applies to every surface.)
- Google Business Profile, claimed and optimized for the map pack. Category: "Bookkeeping service."
- Local SEO: service pages per niche and suburb.
- A genuinely useful free tool or cleanup diagnostic for the chosen vertical.
- Review request system, triggered after each clean close (SOP-001 step 12).
- Client document upload portal.
- Dropbox (or equivalent) file structure, one folder tree per client.

### Internal

- Receipt collection and processing pipeline.
- ACH autodraft administration and failed-payment handling (SOP-005).
- Onboarding automation: checklists, access requests, W-9 collection (SOP-002).
- Bank rule configuration per Sarah's specifications.
- New-business-filing scraper and drip sequences (Year 2 channel).
- Records archive, encrypted, seven-year retention (SOP-007).

## Part B: The three backup layers

### Layer 1: This git repository (SOPs, templates, rules)

All SOPs, templates, checklists, and the CLAUDE.md constitution live in git. This is version history for how the business operates. It holds NO client data by rule.

Redundancy for this layer, four copies:

1. **Working copy** on the hard drive at `C:\Users\bradl\Documents\relief-pros`. Where Sarah and Brad edit.
2. **Private GitHub remote.** Off-machine, full version history, clone to any computer in one command. This is the copy that survives the computer dying. (See toolchain-notes.md for the remote and push commands.)
3. **Google Drive mirror.** A browsable copy of the markdown, openable from any browser or phone without git. Access-from-anywhere layer. It lives in the Drive folder `relief-pros-repo-mirror` (id `1gkx-TYcJxsHYgqO_f2ssQwidSBLw49rI`) inside "Bookkeeping Practice - Business Plan", and is kept current by an automated rclone sync (Part C), never hand-uploaded, so it cannot silently drift from the repo.
4. **Claude Project.** The rules and memory docs, reloaded into any future Claude session and readable on claude.ai.

Losing this layer would require the hard drive, GitHub, Google, and Anthropic to fail at the same time.

### Layer 2: Client working files (per client, monthly)

QuickBooks Online is cloud-hosted and Intuit retains it, but the firm never depends on continued platform access or a continued client relationship to prove its work. Each month, per client, export to the encrypted archive:

- Trial balance
- Profit & Loss
- Balance Sheet
- General ledger

This is done at close delivery (SOP-001 step 12).

### Layer 3: Encrypted cold archive (long-term, client data)

One encrypted drive plus a cloud copy, seven-year retention, cost under $100. Holds:

- Workpapers and close checklists
- Signed engagement letters and ACH authorizations
- Monthly exports from layer 2
- W-9s and filed 1099s

**Client data lives only here.** It never goes to git, Google Drive, or the Claude Project. Those three hold Layer 1 only.

## Part C: Automate the backup

- A scheduled job exports (layer 2), encrypts, and syncs the archive (layer 3) monthly.
- The job emits a failure alert. If the alert does not fire, treat the backup as failed and verify manually. An unverified backup is not a backup.
- The git remote push (layer 1) happens on every meaningful change; at minimum, whenever an SOP, template, or rule changes.
- The Google Drive mirror is synced by rclone in the same step, so GitHub and Drive update together and neither drifts.

### One command updates all off-machine copies

A `sync.bat` at the repo root commits, pushes to GitHub, and rclone-syncs to the Drive mirror in one run. Run it as `sync "commit message"`.

```bat
@echo off
cd /d C:\Users\bradl\Documents\relief-pros
git add -A
git commit -m "%~1"
git push
rclone sync "C:\Users\bradl\Documents\relief-pros" gdrive: --drive-root-folder-id 1gkx-TYcJxsHYgqO_f2ssQwidSBLw49rI --exclude ".git/**"
```

One-time setup: install rclone (`winget install Rclone.Rclone`), run `rclone config` to create a Drive remote named `gdrive` (type `drive`, browser OAuth), then the `sync.bat` above keeps all four copies aligned. The `--exclude ".git/**"` keeps git internals out of the Drive mirror. No client data is in the repo, so nothing sensitive is synced. Optionally schedule `sync.bat` in Windows Task Scheduler as a safety net.

## Part D: The two-stream rule (never mix these)

| Stream | Contents | Goes to | Never goes to |
|---|---|---|---|
| Operating system | SOPs, templates, rules, calendar | Hard drive, GitHub, Drive, Project | (safe everywhere; no client data) |
| Client data | QBO exports, signed letters, ACH auths, W-9s, bank numbers | Encrypted archive only (layers 2 and 3) | git, GitHub, Drive, Project, email |

If a document has a client's name, books, bank number, or signature on it, it is client data and it goes to the encrypted archive, full stop.

## References

- Retention detail: [../01-sops/SOP-007-records-retention.md](../01-sops/SOP-007-records-retention.md)
- Security controls: [../01-sops/SOP-006-security-wisp.md](../01-sops/SOP-006-security-wisp.md)
- Remote and push commands: [toolchain-notes.md](toolchain-notes.md)
- Source: master handoff Section 14, [drive-registry.md](drive-registry.md)
