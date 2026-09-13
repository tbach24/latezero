# LateZero — Form Backend Setup (Google Apps Script)
# One-time owner action: ~3 minutes

## What this does
Creates a free Google Apps Script web endpoint that receives form submissions
and writes them to a Google Sheet in your Google account.
No new accounts. No SaaS dependency. Data stays in your Google Drive.

## Steps

### 1. Create the Google Sheet
1. Go to: https://sheets.google.com
2. Create a new sheet named: **LateZero Signups**
3. In Row 1, add these headers in columns A–F:
   `Timestamp | Email | Intent | Source | Evidence Level | Notes`
4. Copy the Sheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/SHEET_ID_IS_HERE/edit`

### 2. Create the Apps Script
1. Go to: https://script.google.com
2. Click **New project**
3. Delete the default code and paste the script from: `form-backend.gs` (file in this folder)
4. Replace `YOUR_SHEET_ID` in the script with your actual Sheet ID from Step 1
5. Click **Save** (Ctrl+S), name it "LateZero Form Backend"

### 3. Deploy as Web App
1. Click **Deploy → New deployment**
2. Type: **Web app**
3. Description: `LateZero form backend`
4. Execute as: **Me**
5. Who has access: **Anyone** (required for public form submissions)
6. Click **Deploy**
7. Copy the **Web app URL** — looks like:
   `https://script.google.com/macros/s/LONG_ID/exec`

### 4. Send the URL to the agent
Paste the Web app URL here and the page will be updated immediately.
The form will be live within ~2 minutes of you pasting the URL.
