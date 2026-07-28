# The Relief Pros, LLC

Operating system for a DFW small-business bookkeeping practice. This repo is
the single source of truth for how the company runs: rules, SOPs, marketing
surfaces, client-facing templates, and the prompts that drive the work.

Claude: read [CLAUDE.md](CLAUDE.md) first. It carries the hard rules.

## Map

| Folder | What lives there |
|---|---|
| [00-company/](00-company/README.md) | Formation facts, hard rules, compliance calendar, Drive link registry |
| [01-sops/](01-sops/README.md) | Numbered standard operating procedures (SOP-001, SOP-002, ...) |
| [02-website/](02-website/README.md) | The site and landing pages: code, copy, deploy notes |
| [03-marketing/](03-marketing/README.md) | Outreach copy, email sequences, positioning |
| [04-clients/](04-clients/README.md) | Client-facing templates only: onboarding, engagement letters. Never real client data |
| [05-prompts/](05-prompts/README.md) | Standing instructions and reusable prompts for Claude |

## Conventions

- Every document gets indexed in its folder's README when added.
- Anything living in Google Drive gets one entry in
  [00-company/drive-registry.md](00-company/drive-registry.md), not scattered links.
- SOPs are numbered and cross-reference each other by number.
- All public copy says "bookkeeping," never "accounting." See CLAUDE.md for why
  this is a legal requirement, not a style choice.
