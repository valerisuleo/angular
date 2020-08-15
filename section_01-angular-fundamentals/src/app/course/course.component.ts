import { Component, OnInit } from '@angular/core';

// here we import our service
import { CourseService } from '../course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseTitle = ['WDI-25!'];
  allCourses: string[];

  // allCourses = ['Web Development', 'User Experience', 'Data Science'];

  constructor(service: CourseService) {
    this.allCourses = service.getCourse();
    console.log('allCourses', this.allCourses)
  }

  ngOnInit() {
  }

}
