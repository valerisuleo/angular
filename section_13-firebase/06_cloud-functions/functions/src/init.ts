const admin = require('firebase-admin');
const serviceAccount = require('../firebase-course-64c0aae2f443');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-course-8c65e.firebaseio.com"
});

export const db = admin.firestore();