const functions = require('firebase-functions');

exports.myFunction = functions.https.onRequest((req, res) => {
    res.send('Hello from Firebase Cloud Functions!');
});

// Emulator Hub running at http://localhost:5001/carrycomeapp/us-central1/myFunction
