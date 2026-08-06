# Relief Pros HQ: deploy and update

Time: about 10 minutes, one time. Nothing here costs money.

## One-time deploy

1. **Share the database.** Open the Sheet
   [Relief Pros CRM - Database](https://docs.google.com/spreadsheets/d/1OqBIT1vAaVIYIY3X_LrvoVjP-781KXgqxyD9LVxP56k/edit)
   and share it with sarahrogowski85@gmail.com as Editor.
2. **Open the script.** In the Sheet: Extensions, then Apps Script. Name the
   project "Relief Pros HQ".
3. **Paste the backend.** Replace everything in the default `Code.gs` with the
   contents of [Code.gs](Code.gs) from this folder.
4. **Paste the app.** In the script editor click plus, choose HTML, and name
   the file exactly `app` (it must match, lower case). Replace its contents
   with [app.html](app.html) from this folder.
5. **Run setup once.** In the editor select the `setup` function and press
   Run. Approve the permission prompts (it only touches this Sheet). When it
   finishes, the Sheet has all tabs, templates, the compliance calendar, and
   settings.
6. **Deploy.** Click Deploy, New deployment, type Web app. Settings that
   matter, exactly these:
   - Execute as: **User accessing the web app**
   - Who has access: **Anyone with a Google account**
   Click Deploy and copy the web app URL. Google sign-in plus the allowlist
   in the Settings tab (you and Sarah only) is what keeps it private.
7. **Test.** Open the URL. You should land on the Today view. Have Sarah open
   it once too; her first visit asks her to approve the same permissions.

## Put it on the domain

1. Open `02-website/crm/index.html` and paste the web app URL into the
   `APP_URL` line at the top.
2. Run sync.bat. Vercel publishes it. The page `reliefprosbooks.com/crm`
   now forwards to the app. It is noindex and linked from nowhere public.
   Bookmark it on every device; it works anywhere either of you sign in.

## Updating the app later

Code or design changes happen in this folder first (so git keeps history),
then: paste the new `app.html` into the script editor's `app` file (and
`Code.gs` if it changed), then Deploy, Manage deployments, pencil icon,
New version, Deploy. The URL stays the same.

## Troubleshooting

- **"Not authorized" page:** it shows the address Google saw. Add or fix it
  in the Sheet's Settings tab, `allowed_emails` row.
- **Blank email on the not-authorized page:** the deployment is set to
  Execute as Me. Redeploy with Execute as: User accessing the web app.
- **Sarah gets a Google permission wall:** the Sheet is not shared with her
  yet. Step 1 above.
- **Tabs missing or a tab got deleted:** run `setup()` again. It only adds
  what is missing and never overwrites data.
- **Changed checklists:** edit the Templates tab in the Sheet. New jobs use
  the new items; existing jobs keep the checklist they started with.

## Backup picture

The Sheet lives in Drive (covered by the Drive side of the backup scheme).
The code lives here in git (sync.bat pushes it). The demo copy of the app
runs from the repo with no data in it. Nothing about clients exists only
on one machine.
