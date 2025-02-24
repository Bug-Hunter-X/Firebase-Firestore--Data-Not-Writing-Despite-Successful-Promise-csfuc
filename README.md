# Firebase Firestore Data Write Issue

This repository demonstrates a subtle bug in a Firebase Firestore application where data fails to write to the database, even though the write operation appears successful.  The problem stems from an incorrect path or reference when using the `set()` method. This example showcases the problematic code and a solution to identify and correct the issue.

## Setup

1.  Clone this repository.
2.  Install Firebase using `npm install firebase`.
3.  Configure your Firebase project and replace the placeholder in `firestoreBug.js` with your actual Firebase configuration.

## Running the Code

Execute `node firestoreBug.js`. The console should indicate a successful write operation, but inspection of Firestore will reveal that the data was not written.  Then run `node firestoreBugSolution.js` to see the corrected code.