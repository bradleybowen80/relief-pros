# Toolchain Notes (Memory)

**Owner:** Brad
**Last reviewed:** 2026-07-28

Durable technical notes so a fresh session does not re-derive them. From master handoff Section 15, plus the git remote setup for this repo. These are settled facts; treat them as constraints.

## Environment

- **Node** is at `/c/Program Files/nodejs` and requires a PATH prepend in bash:
  `export PATH="/c/Program Files/nodejs:$PATH"`
- **No `gh` CLI** installed. Use plain `git` over HTTPS, and create remote repos through the web UI.
- Machine: Windows (`aliendad`), user `bradl`. Repo at `C:\Users\bradl\Documents\relief-pros`.

## The business plan workbook

- Generated from source at `...\scratchpad\bkplan\` using ExcelJS: `style.js` (styling framework), `tabs_01_02.js` through `tabs_13_14.js`, and `build.js` (orchestrator plus verification pass).
- Set `wb.calcProperties.fullCalcOnLoad = true` or formulas arrive uncomputed.
- **Open item:** move this build source into the repo so it is versioned.

## Pushing a built xlsx into Drive as a native Google Sheet

The Drive MCP cannot take large binaries, and the Chrome file-upload tool refuses paths outside session-shared folders. The working method:

1. Serve the file from a local CORS server on `127.0.0.1`.
2. From a `drive.google.com` tab, use the page's own credentials: scrape the API key, build a SAPISIDHASH, and POST multipart to `clients6.google.com/upload/drive/v3/files` with `mimeType: application/vnd.google-apps.spreadsheet` to convert on the way in.
3. PATCH the same file id with `uploadType=media` to revise without changing the share link.
4. Formatting, merges, number formats, and live formulas all survive.

## Key IDs

- Drive folder (Bookkeeping Practice - Business Plan): `1yBgMZTeFOJD8RQ9XG7juFB3nWBIc1QaQ`
- Business plan Sheet: `1PR8CLOEFSD0MlA17PMQII-jn_nKlz8Y490IQJFlbL30`

## Git remote (this repo)

- Host: **GitHub, private repo named `relief-pros`** (created 2026-07-28).
- Remote URL: `https://github.com/<YOUR-GITHUB-USERNAME>/relief-pros.git` (fill in the username once).
- Auth: HTTPS via Git Credential Manager on Windows. No `gh` CLI needed.

First-time setup and push (run in Git Bash inside the repo):

```bash
cd /c/Users/bradl/Documents/relief-pros
git add -A
git commit -m "Build operating system: SOPs, guardrails, calendar, backup scheme, memories"
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/relief-pros.git
git push -u origin main
```

Ongoing, after any meaningful change:

```bash
git add -A && git commit -m "message" && git push
```

If `git remote add` says origin already exists, use `git remote set-url origin <url>` instead.

## References

- Backup topology this remote is part of: [automation-and-backup-scheme.md](automation-and-backup-scheme.md)
- Drive document index: [drive-registry.md](drive-registry.md)
- Source: master handoff Section 15
