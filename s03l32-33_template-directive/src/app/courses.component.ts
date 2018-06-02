import { Component } from '@angular/core';

// __________________________________TEMPLATE__________________________________
// @Component({
// selector: 'courses',
// template: '<h2>Courses</h2>'
// })
//
//
// export class CoursesComponent{
// }


// 01 Handle Bracket
// @Component({
// selector: 'courses',
// template: '<h2>{{ title }}</h2>'
// })
//
//
// export class CoursesComponent{
//   title = 'list of Courses';
// }


// 02 We can also call a method in this class to get the value:
// @Component({
// selector: 'courses',
// template: '<h2>{{ getTitle() }}</h2>'
// })
//
//
// export class CoursesComponent{
//   title = 'list of Courses';
//
//   getTitle(){
//     return this.title;
//   }
// }

// _________________________________DIRECTIVES_________________________________

//  We use directives to manipulate the DOM and for looping (ngFor) like we used to do with "ng-repeat"
@Component({
selector: 'courses',
template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
    <li *ngFor="let pizza of courses">
      {{ pizza }}
    </li>
  </ul>
  `
})


export class CoursesComponent{
  title = 'list of Courses';
  courses = ['course1', 'course2', 'course3'];

  getTitle(){
    return this.title;
  }
}
