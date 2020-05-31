import * as express from "express";
// import * as router from "./routes";
import * as functions from 'firebase-functions';
import * as coursesController from "./controllers/courses";

const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));
// app.use(router.default.router);


module.exports = {
    getCourses: functions.https.onRequest(coursesController.default.index),
    createLesson: coursesController.default.create
}