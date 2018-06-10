import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lesson-ngfor',
  templateUrl: './lesson-ngfor.component.html',
  styleUrls: ['./lesson-ngfor.component.css']
})
export class LessonNgforComponent {

items = [
  { task: 'learn angular', done: false },
  { task: 'buy toilet paper', done: false },
  { task: 'clean dishes', done: false }
];


}
