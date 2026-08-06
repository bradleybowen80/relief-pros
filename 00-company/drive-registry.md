# Drive Registry

Single index of every business document that lives in Google Drive, Docs, or
Sheets. If a doc lives in Drive, its link goes here and nowhere else. Keep one
line per document, grouped by Drive folder.

## Bookkeeping Practice - Business Plan

Drive folder: https://drive.google.com/drive/folders/1yBgMZTeFOJD8RQ9XG7juFB3nWBIc1QaQ

| Document | Type | Link | Local backup | Notes |
|---|---|---|---|---|
| PROJECT KICKOFF - The Relief Pros Bookkeeping (Master Handoff) | Doc | [open](https://docs.google.com/document/d/1IoZYGdMdTyo2i901Gg92wWKKp3E2emkLSiypdnH6m1o/edit) | [md](drive-backups/PROJECT-KICKOFF-master-handoff.md) | Read before any bookkeeping-domain work. Knowledge base, SOP list, guardrails, compliance calendar, failure log |
| The Relief Pros - Bookkeeping Business Plan (14 tabs) | Sheet | [open](https://docs.google.com/spreadsheets/d/1PR8CLOEFSD0MlA17PMQII-jn_nKlz8Y490IQJFlbL30/edit) | [md](drive-backups/business-plan-14-tabs.md), [xlsx](drive-backups/The-Relief-Pros-Business-Plan.xlsx) | Full business plan workbook. Drive is the live copy. **Tab 4 pricing was reconciled to the live website on 2026-07-31. The local backups are now a snapshot behind and need re-exporting.** |
| Relief Pros CRM - Database | Sheet | [open](https://docs.google.com/spreadsheets/d/1OqBIT1vAaVIYIY3X_LrvoVjP-781KXgqxyD9LVxP56k/edit) | code in [07-crm/](../07-crm/README.md) | Live database behind Relief Pros HQ (client workflow app). Tabs are built and seeded by Code.gs setup(). Operating metadata only, never client financial records. Added 2026-08-06 |

## relief-pros-repo-mirror

Readable Google Docs copies of the repo, for Sarah and for reading on any
device. Drive folder: https://drive.google.com/drive/folders/1gkx-TYcJxsHYgqO_f2ssQwidSBLw49rI

These are mirrors, not the source. The repo is authoritative. When a repo file
changes meaningfully, refresh its Doc here.

| Document | Type | Repo source | Notes |
|---|---|---|---|
| CLAUDE.md | File | [CLAUDE.md](../CLAUDE.md) | The constitution and hard rules |
| SOP-001 Monthly Close | Doc | [01-sops/SOP-001](../01-sops/SOP-001-monthly-close.md) | The core production artifact |
| SOP-002 Client Onboarding | Doc | [01-sops/SOP-002](../01-sops/SOP-002-client-onboarding.md) | |
| SOP-003 Cleanup 12-Step | Doc | [01-sops/SOP-003](../01-sops/SOP-003-cleanup-12-step.md) | |
| SOP-004 Document Chase | Doc | [01-sops/SOP-004](../01-sops/SOP-004-document-chase.md) | |
| SOP-005 Payment Failure and Service Pause | Doc | [01-sops/SOP-005](../01-sops/SOP-005-payment-failure-service-pause.md) | |
| SOP-006 Data Security and WISP | Doc | [01-sops/SOP-006](../01-sops/SOP-006-security-wisp.md) | |
| SOP-007 Records Retention | Doc | [01-sops/SOP-007](../01-sops/SOP-007-records-retention.md) | |
| SOP-008 KPI Dashboard | Doc | [01-sops/SOP-008](../01-sops/SOP-008-kpi-dashboard.md) | |
| SOP-009 Engagement Pre-Flight Checklist | Doc | [01-sops/SOP-009](../01-sops/SOP-009-engagement-preflight-checklist.md) | Run before every engagement |
| SOP-010 Client Screening Scorecard | Doc | [01-sops/SOP-010](../01-sops/SOP-010-client-screening-scorecard.md) | |
| [QuickBooks Learning Guide](https://docs.google.com/document/d/1VwPo2_gswfSaFv7f4hfBEls5KKGMvpnzLv-jQA3xZz0/edit) | Doc | [06-training](../06-training/quickbooks-learning-guide.md) | First-time QBO user cheat sheet. Verified against Intuit help Aug 2026. Also exists as a styled HTML in the repo and as a desktop artifact |
| [SOP-011 Error Prevention Protocol](https://docs.google.com/document/d/1d9Eh26dshyrgS75EiGQXdRlVmEbXzuiqhQ5O2AoLdbU/edit) | Doc | [01-sops/SOP-011](../01-sops/SOP-011-error-prevention-protocol.md) | The seven rules, the 14-check month-end sweep, the trap list, the escalation ladder. Read once end to end before the first client |

### client-lifecycle subfolder

Drive folder: https://drive.google.com/drive/folders/1fas_y7u7DeU3HqXeeahhm8ihmrrOfAK9

| Document | Type | Repo source | Notes |
|---|---|---|---|
| [Client Lifecycle - READ ME FIRST](https://docs.google.com/document/d/1I3qt-30vkVsLOLJYIQAiNW6kClNlzoiit8747joZUmg/edit) | Doc | [client-lifecycle/README](../01-sops/client-lifecycle/README.md) | The arc, the monthly calendar, the hours budget |
| [SOP-012 Day One](https://docs.google.com/document/d/1gdgXIHut7JSdD5cHoavoXgf0-CVEqMy7nwlPQvXlWwg/edit) | Doc | [SOP-012](../01-sops/client-lifecycle/SOP-012-day-one.md) | First 24 hours after signature. Access, control, baseline, damage assessment |
| [SOP-013 The First 30 Days](https://docs.google.com/document/d/1MYbR7OzOUk3yWeAFnLcgn8l33mAzXoPpd5hMIt_D15E/edit) | Doc | [SOP-013](../01-sops/client-lifecycle/SOP-013-first-30-days.md) | Foundation, first close |
| [SOP-014 The First Quarter](https://docs.google.com/document/d/1OFfvKD2dgsnb7-rOqbkSFh5xzk8dvzIhPHkMO4BHvPE/edit) | Doc | [SOP-014](../01-sops/client-lifecycle/SOP-014-first-quarter.md) | Three closes, file health audit, tier and pricing review |
| [SOP-015 The Weekly Hour](https://docs.google.com/document/d/1j-9Kv2IZQ_l752oDWW-SO-w3Or0UB1jA4F6_A-VddP0/edit) | Doc | [SOP-015](../01-sops/client-lifecycle/SOP-015-weekly-hour.md) | Steady state. Carries the canonical hours budget |
| [SOP-016 Offboarding](https://docs.google.com/document/d/1hDk_2h4Ihzw8xnbztoQMy_G3anesDHiPyFt8K8IXEQg/edit) | Doc | [SOP-016](../01-sops/client-lifecycle/SOP-016-offboarding.md) | Ending an engagement, including for cause |
| Engagement Letter Template (DRAFT) | Doc | [04-clients](../04-clients/engagement-letter-template.md) | Needs attorney review before first use |
| ACH Debit Authorization (DRAFT) | Doc | [04-clients](../04-clients/ach-debit-authorization.md) | Needs attorney review before first use |
| Compliance Calendar | Doc | [00-company](compliance-calendar.md) | |
| Local SEO and Market Strategy - Decision Memo | Doc | [03-marketing](../03-marketing/local-seo-and-market-strategy.md) | Geography and vertical strategy |
| Citation Pack - The Relief Pros | Doc | [03-marketing](../03-marketing/citation-pack.md) | Canonical listing data, copy-paste ready |
| [Client Welcome Email Template](https://docs.google.com/document/d/1b1nsXu6FEoYM-2JBexqx2j2OUgibU6s3QDqlDkbbUWI/edit) | Doc | [04-clients](../04-clients/welcome-email-template.md) | Sent at SOP-002 step 8. Carries the private upload link the website promises |
| [Review Request Template](https://docs.google.com/document/d/1HGJWNPN385FQCxkAVxpKFbf1rRqIY1RjD_4cYzPgux8/edit) | Doc | [04-clients](../04-clients/review-request-template.md) | Fires at SOP-001 step 12. Read the compliance rules before using |

## Pricing reconciliation: closed 2026-07-31

The workbook's service menu (Tab 4, "Services & Pricing") and the live website
had drifted apart. The workbook was updated to match the website, which is the
authoritative price card because it is the one customers can see.

| | Was, in the workbook | Now, both places |
|---|---|---|
| Entry tier | $350/mo (Starter) | **$250/mo (Essentials)** |
| Mid tier | $450 to $550 (Standard) | **$450/mo (Standard)** |
| Top tier | $650 to $950 (Complex) | **$999/mo (Growing)** |
| Cleanup | 2 to 2.5x monthly rate per month of mess | **$1,000 flat, up to 6 months behind** |
| Year-end 1099s | "per-form January fee" | **$25 per form** |
| Owner's Briefing add-on | not in the workbook | **$199/mo**, added as a menu line |
| Referral bonus | not in the workbook | **$250 per referred client**, added as a cost line |

Two content corrections went in with the prices, because the old descriptions
described services the firm does not sell: job costing and POS reconciliation
came out of the top tier, and A/R-A/P aging review came out of the mid tier.
The diagnostic review row was kept but flagged as not currently published.

**The $400 blended average fee in Tab 7 was left at $400 and is still valid.**
It is a mix outcome rather than a price-card outcome, and the guidance cell on
Tab 7 now says so explicitly: two Growing clients in a book of ten blends to
$440 to $480; with no Growing clients it takes roughly 75% Standard; an
all-Essentials book blends at $250. SOP-010 client screening is the control
that keeps the book off the floor. Cleanup revenue and the Owner's Briefing
add-on sit on top of that number and are not in the input.

**Still open:** the local backups of the workbook (md and xlsx) are now a
snapshot behind the Drive copy and need re-exporting.

## How to add an entry

One row: document name, type (Doc/Sheet/Slides/Folder), the share link, the
local backup path under [drive-backups/](drive-backups/README.md), and a
one-line note on when someone would need it. Every Drive document gets a local
backup, no exceptions. Re-export the backup whenever the Drive copy changes
meaningfully.
