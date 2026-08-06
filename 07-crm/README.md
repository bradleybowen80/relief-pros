# 07-crm

Relief Pros HQ: the client workflow app. One screen for the lead pipeline,
onboarding checklists, the monthly close board, the compliance calendar, and
the hard rules. Built 2026-08-06.

## How it fits together

- **Database:** the Google Sheet "Relief Pros CRM - Database" in the Drive
  folder "Bookkeeping Practice - Business Plan". The Sheet is the live copy
  and is editable by hand as a fallback. Indexed in
  [00-company/drive-registry.md](../00-company/drive-registry.md).
- **App:** [app.html](app.html), a single file served by Google Apps Script
  from inside that Sheet. Google sign-in required; only the two addresses in
  the Settings tab may enter. Opened directly (double-click), the same file
  runs in demo mode with fake data and saves nothing.
- **Backend:** [Code.gs](Code.gs), the Apps Script bound to the Sheet.
  `setup()` builds and seeds every tab and is safe to rerun.
- **Website door:** `02-website/crm/index.html` publishes the private page
  `reliefprosbooks.com/crm` that forwards to the deployed app. It is marked
  noindex and linked from nowhere on the site.
- **Deploy and update steps:** [DEPLOY.md](DEPLOY.md).

## What the app does

- Add Client wizard: creates the client and instantly opens Day One,
  First 30 Days, and First Quarter checklists from SOP-012, 013, and 014,
  each item owned by Sarah or Brad and linked to its SOP in Drive.
- Monthly closes spawn themselves for every active client, every month,
  due the 15th, whether or not last month is finished. A client cannot
  fall off the list.
- Today view buckets everything Overdue, Due today, This week, Next week.
- Close Board: every client and every stage of the current month's close
  on one screen. The weekly review view.
- Waiting on client is one click, shows its age, and turns amber at 7 days
  and red at 21 per SOP-015.
- Pipeline enforces the hard filters and the SOP-009 pre-flight gate before
  a letter goes out.
- Checklist templates live in the Sheet's Templates tab, so the process can
  be improved without touching code.

## Data boundary (constitution)

The Sheet holds operating metadata only: names, stages, dates, checklist
state, hours. No client financial records, no statements, no credentials,
no bank details. Those live in their designated systems per CLAUDE.md.
The repo copy of the app contains demo data only.

## Related

- SOPs the checklists come from: [01-sops/](../01-sops/README.md)
- Compliance calendar source: [00-company/](../00-company/README.md)
