/**
 * Gmail Automation Tool
 * 
 * Description: 
 * Automatically archives or deletes emails based on specific labels after 
 * they have been in the inbox for a set amount of time (2 days). 
 * Includes a safety check to skip starred emails.
 */

// --- CONFIGURATION ---
const ARCHIVE_LABEL = "movelater";
const DELETE_LABEL = "deletelater"; 
const AGE_THRESHOLD = "2d"; 
const BATCH_SIZE = 100;     

/**
 * Main entry point. Set your Google Apps Script trigger to run this daily.
 */
function runGmailAutomation() {
  archiveOldEmails();
  deleteOldEmails();
}

/**
 * Finds emails with the archive label and moves them to 'All Mail'.
 */
function archiveOldEmails() {
  // Use the constants defined above
  const searchQuery = "label:" + ARCHIVE_LABEL + " in:inbox older_than:" + AGE_THRESHOLD + " -is:starred";
  const threads = GmailApp.search(searchQuery, 0, BATCH_SIZE);
  
  if (threads.length > 0) {
    GmailApp.moveThreadsToArchive(threads);
    console.log(threads.length + " threads archived.");
  } else {
    console.log("No old emails to archive today.");
  }
}

/**
 * Finds emails with the delete label and moves them to the Trash.
 */
function deleteOldEmails() {
  // Use the constants defined above
  const searchQuery = "label:" + DELETE_LABEL + " in:inbox older_than:" + AGE_THRESHOLD + " -is:starred";
  const threads = GmailApp.search(searchQuery, 0, BATCH_SIZE);
  
  if (threads.length > 0) {
    GmailApp.moveThreadsToTrash(threads);
    console.log(threads.length + " threads moved to trash.");
  } else {
    console.log("No old emails to delete today.");
  }
}
