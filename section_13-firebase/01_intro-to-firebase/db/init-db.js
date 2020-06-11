const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firestore = require('./actions');
const courses = require('./courses');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC2mOevle3yxaSGHrughhAPYBfn_oiHIvM",
    authDomain: "fir-course-8c65e.firebaseapp.com",
    projectId: "fir-course-8c65e",
});

const db = firebase.firestore();

const coursePayload = {
    db: db,
    collection: courses.collection,
    collectionPath: 'courses',
    nestedCollectionPath: 'lessons',
    nestedCollection: courses.nestedCollection,
    nestedCollectionParentIndex: 0,
    targetObj: {
        key: 'url',
        value: 'serverless-angular'
    }
}

firestore.populate(coursePayload);




