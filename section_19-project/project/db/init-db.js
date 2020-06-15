const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firestore = require('./actions');
const vegetables = require('./vegetables');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCOqWcUyqJnHKxdXlZluXoYoWkpabbTbdA",
    authDomain: "ng-mosh-project.firebaseapp.com",
    projectId: "ng-mosh-project",
});

const db = firebase.firestore();

const coursePayload = {
    db: db,
    collection: vegetables.collection,
    collectionPath: 'vegetables',
    // nestedCollectionPath: 'lessons',
    // nestedCollection: vegetables.nestedCollection,
    // nestedCollectionParentIndex: 0,
    // targetObj: {
    //     key: 'url',
    //     value: 'serverless-angular'
    // }
}

firestore.populate(coursePayload);





