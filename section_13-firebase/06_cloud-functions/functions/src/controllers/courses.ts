import { db } from '../init';
import * as functions from 'firebase-functions';

const courses: any[] = [];

function indexCourses(req, res) {
    db
        .collection('courses')
        .get()
        .then((data) => {
            data.forEach((item) => {
                courses.push(item.data());
            })
        })
        .then(() => res.status(200).json({ courses }))
        .catch((err) => {
            console.log(err);
        });
};


function courseTransaction(snap, cb: Function) {
    return db.runTransaction(async transaction => {

        const courseRef = snap.ref.parent.parent;
        const courseSnap = await transaction.get(courseRef);
        const course = courseSnap.data();
        const changes = cb(course);

        transaction.update(courseRef, changes);
    });

}

const createLesson = functions.firestore
    .document('courses/{courseId}/lessons/{lessonId}')
    .onCreate(async (snap, context) => {

        console.log("Running onAddLesson trigger ...");

        return courseTransaction(snap, course => {
            return { lessonsCount: course.lessonsCount + 1 }
        });
    });


export default {
    index: indexCourses,
    create: createLesson
};