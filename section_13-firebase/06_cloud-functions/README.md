# Firebase Cloud Functions

As we know the word *serverless* doesn't mean we can really develop an app without a server: 

- Due to security reasons there are some operations that can only be made on the server. For example payment with an external provider such *paypal* or *stripe*.

- In the case of sql db we have the notion of *db trigger*: a piece of server code that gets triggered whenever a data modification occurs.

In order to cover those and many other cases we have **Firebase Cloud Functions**.

> What is a Firebase Cloud Functions?

It's a NodeJS hosted server function.

## Adding Cloud Function

- `firebase init`;
- `Functions: Configure and deploy Cloud Functions`;
- Now if we look at our codebase inside `functions/src/index.ts` we should see a very familiar **express** function:

```
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
```

## REST With Firebase

1. run `firebase --version` and be sure it's the v.`8.4.1` (`npm install -g firebase-tools@8.4.1`)
2. `firebase init`;
3. select `Functions: Configure and deploy Cloud Functions`;
4. follow the instructions;
5. `cd functions` (this is bloody important!);
6. `npm i cors express  --save`;

	```
	<!--functions/src/init.ts-->
	// INITIALISE DB
	
	const admin = require('firebase-admin');
	const serviceAccount = require('../firebase-course-64c0aae2f443');
	
	admin.initializeApp({
	    credential: admin.credential.cert(serviceAccount),
	    databaseURL: "https://fir-course-8c65e.firebaseio.com"
	});
	
	export const db = admin.firestore();

	<!--functions/src/index.ts-->
	// EXPRESS
	
	import * as functions from 'firebase-functions';
	import { db } from './init';
	import * as express from "express";
	
	const cors = require('cors');
	const app = express();
	
	app.use(cors({ origin: true }));
	app.get('/courses', async (request, response) => {
	    
	    const courses: any[] = [];
	    const snaps = await db.collection('courses').get();
	
	    snaps.forEach((snap: { data: () => any; }) => courses.push(snap.data()));
	    response.status(200).json({ courses });
	});
	
	export const getCourses = functions.https.onRequest(app);
	
	
	```

7. `npm run build` (this will generate a `lib` folder in our project);
8. `npm run serve`
9. go to `http://localhost:5001/fir-course-8c65e/us-central1/getCourses`;
10. We get a `404`;
11. `http://localhost:5001/fir-course-8c65e/us-central1/getCourses/courses`;
12. we should see the data.



## Database trigger

```
{
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png',
    lessonsCount: 10,
    categories: ['BEGINNER'],
    seqNo: 0,
    url: 'serverless-angular'
}
```

#### current behaviour

if we create a new lesson the propery ` lessonsCount` will be still equal to `10`.

#### expected behaviour

property on db should be updated and displaying the new value `11`.

#### how to fix the issue

We need to write a `fn` in order to trigger the db and update the `lessonsCount` property.


```
const createLesson = functions.firestore.document('courses/{courseId}/lessons/{lessonId}')
    .onCreate(async (snap,context) => {

        console.log("Running onAddLesson trigger ...");

        return courseTransaction(snap, course => {
            return {lessonsCount: course.lessonsCount + 1}
        });

    });

    function courseTransaction(snap, cb:Function) {
        return db.runTransaction(async transaction => {
    
            const courseRef = snap.ref.parent.parent;
    
            const courseSnap = await transaction.get(courseRef);
    
            const course = courseSnap.data();
    
            const changes = cb(course);
    
            transaction.update(courseRef, changes);
    
        });
    
    }
```














































