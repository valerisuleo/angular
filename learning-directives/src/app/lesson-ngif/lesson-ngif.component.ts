import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lesson-ngif',
  templateUrl: './lesson-ngif.component.html',
  styleUrls: ['./lesson-ngif.component.css']
})
export class LessonNgifComponent implements OnInit {

  courses = [1,2];
  // courses = [];

  constructor() { }

  ngOnInit() {
  }

}
