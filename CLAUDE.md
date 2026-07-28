# The Relief Pros, LLC: Claude Project Instructions

DFW small-business bookkeeping practice. Sarah Bowen owns 100% and operates it.
Brad Bowen builds everything non-financial: systems, SOPs, websites, copy, tooling.

## Read this first, every session

1. This file. It carries the hard rules.
2. [README.md](README.md) for the map of the repo.
3. The master handoff doc in Google Drive before doing any bookkeeping-domain
   work: "PROJECT KICKOFF - The Relief Pros Bookkeeping (Master Handoff)" in the
   Drive folder "Bookkeeping Practice - Business Plan". Links are indexed in
   [00-company/drive-registry.md](00-company/drive-registry.md). Do not re-derive
   anything the handoff already settles.
4. [00-company/toolchain-notes.md](00-company/toolchain-notes.md) for settled
   technical facts (Node path, no gh CLI, Drive upload method, git remote) so
   they never get re-derived.

## Hard rules (never violate, never re-litigate)

- **Texas naming rule (legal gate):** non-CPAs may not use "accountant,"
  "accounting," "accounting services," "auditor," or assert accounting
  expertise. Tex. Occ. Code 901.453(b), penalties $1,000-25,000. All copy on
  every surface says **"bookkeeping."** Check every page, doc, and email
  template against this before it ships.
- **Trust Fund Recovery Penalty (personal-liability gate):** nobody at this firm
  ever holds payment authority over a client's payroll, tax, or withholding
  accounts. The IRS holds "responsible persons" personally liable for unpaid
  withheld taxes under IRC 6672; the exposure is unlimited and not
  dischargeable. Every engagement letter and ACH authorization excludes payment
  authority explicitly. This is one of the two reasons payroll is excluded.
- **Sarah owns 100%.** Women-owned path only. The SDVOSB/VetHUB restructure was
  researched and deliberately declined. Do not re-propose it.
- **No DBA.** Everything operates under "The Relief Pros, LLC".
- **Excluded services:** tax preparation, website maintenance for clients, and
  at launch payroll and AP/AR. Payroll stays out for two reasons: Texas taxes
  it as data processing, and payment authority over client withholding creates
  personal Trust Fund Recovery Penalty exposure.
- **ACH autodraft on the 1st** is the only payment model. Zero receivables,
  no invoicing, no chasing. Do not design any flow that creates a receivable.
- **White-label subcontracting is rejected.** Do not resurrect it as a fallback.
- **Brad stays low-profile:** no face, no personal brand, no speaking. The
  business is the brand.
- **No real client data in this repo.** Templates and SOPs only. Client files
  live in their designated systems, never in git, Drive, or the Project.

## How this repo works

- Every folder has a README saying what belongs in it and linking to related
  folders. If you add a document, add it to that folder's README index.
- Documents that live in Google Drive/Docs/Sheets get an entry in
  [00-company/drive-registry.md](00-company/drive-registry.md). One registry,
  no scattered links.
- **Backup rule (standing):** anything created for this business, in Drive or
  anywhere else, gets a document-form backup in this repo the day it is
  created. Drive files snapshot into
  [00-company/drive-backups/](00-company/drive-backups/README.md) (Docs as
  markdown, Sheets as markdown plus xlsx) with the snapshot date recorded in
  the registry. Nothing about the business may exist only in the cloud.
- **Repo redundancy (standing):** this repo lives in four places at once, so no
  single failure loses it: the hard drive working copy, a private GitHub remote
  (off-machine, full history), a Google Drive mirror (browsable), and the Claude
  Project (memory). Client data is the exception and never leaves the encrypted
  archive. See
  [00-company/automation-and-backup-scheme.md](00-company/automation-and-backup-scheme.md).
- SOPs follow the template in [01-sops/](01-sops/README.md) and get numbered
  (SOP-001, SOP-002, ...). Reference other SOPs by number.
- Standing instructions and reusable prompts for Claude live in
  [05-prompts/](05-prompts/README.md). When Brad says "use the onboarding
  prompt," look there.

## Writing style

- No em dashes in prose.
- Plain language a small-business owner reads at a glance.
- Verify before asserting: Sarah reviews adversarially. Cite sources for any
  legal, tax, or compliance claim, and flag anything not independently checked.
- Check every date against today's date before writing about it. A future date
  written in past tense has already cost credibility here. See master handoff
  Section 17.
