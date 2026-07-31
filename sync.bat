@echo off
REM One-command backup: commits every change and pushes it to GitHub.
REM Double-click this file any time you want to save your work off-machine.
REM Google Drive sync turns on once rclone is installed (see
REM 00-company\automation-and-backup-scheme.md).

cd /d C:\Users\bradl\Documents\relief-pros

git add -A
git commit -m "Update %date% %time%"
git push

REM After installing rclone, delete the word REM on the next line to also sync Drive:
REM rclone sync "C:\Users\bradl\Documents\relief-pros" gdrive: --drive-root-folder-id 1gkx-TYcJxsHYgqO_f2ssQwidSBLw49rI --exclude ".git/**"

echo.
echo Backup complete. You can close this window.
pause >nul
