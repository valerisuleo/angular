import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCourse() {
    return ['Web Development', 'User Experience', 'Data Science'];
  }
}
