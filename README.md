# gmail-buffer-cleaner
Automatically archives or deletes emails based on specific labels, depending on whether they have been in the inbox for a set amount of time or if they are starred


# Gmail Auto-Clean Utility

A lightweight Google Apps Script to automate your Gmail inbox management. This script automatically archives or deletes emails that have been tagged with specific labels after a 2-day grace period.

## 🚀 Features
- **Auto-Archive**: Cleans your inbox of newsletters or notifications while keeping them searchable.
- **Auto-Delete**: Moves unwanted clutter to the trash automatically after  the time period.
- **Safety Star**: The script will **never** touch an email you have starred, even if it has the target label.
- **Batch Processing**: Built to respect Gmail API limits (handles 100 emails per run).

## 🛠️ Setup Instructions

1. **In Gmail**:
   - Create two labels: `movelater` and `deletelater`.
   - Create Filters in Gmail to automatically apply these labels to specific senders. (Ensure "Skip the Inbox" is **unchecked** so you can see them first).

2. **In Google Apps Script**:
   - Go to [script.google.com](https://script.google.com/).
   - Create a **New Project**.
   - Paste the code from `Code.gs` into the editor.
   - Click **Save**.

3. **Authorization**:
   - Click the **Run** button for `runGmailAutomation`.
   - Google will prompt you for permissions. Click **Review Permissions** > **Advanced** > **Go to [Project Name] (unsafe)** > **Allow**.

4. **Automation**:
   - Click the **Triggers** (alarm clock icon) on the left sidebar.
   - Click **Add Trigger**.
   - Choose `runGmailAutomation` as the function to run.
   - Select **Time-driven** > **Day timer** > **Midnight to 1am**.

## ⚙️ Configuration
You can modify the constants at the top of the script to change the labels or the time threshold:
- `AGE_THRESHOLD`: Change `"2d"` to `"7d"` for a week, or `"12h"` for twelve hours.
