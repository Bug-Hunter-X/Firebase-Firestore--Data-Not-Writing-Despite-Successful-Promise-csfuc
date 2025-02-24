In a Firebase project, I encountered an issue where data wasn't being written to the Firestore database despite seemingly correct code. The `set()` method was used, and the promise resolved successfully, yet the data was absent from Firestore. The problem was narrowed down to using an incorrect path or a missing reference to the collection or document.  The error messages weren't helpful, only indicating success of the operation. 