import { Component } from '@angular/core';

// 04 we nedd to import
import { CoursesService } from './courses.service';

 // __________________________________SERVICES__________________________________

// In the real world application most of the time we get the data from a server
  // In order to do that we need to create a "Service". So we are gonna define a separate class which we call Service and inside we define the logic to get our list of courses.

// 01. In the app folder we create a new file call "courses.service.ts"


@Component({
selector: 'courses',
template: `
  <h2>{{ Title }}</h2>
  <ul>
    <li *ngFor="let pizza of lezioni">
      {{ pizza }}
    </li>
  </ul>
  `
})



// 06. instead of recreating an instance of our service we can let angular do it for us

export class CoursesComponent{
  title = 'list of Courses';
  lezioni;

// 07. BEST PRACTICE!!! now angular when is going to create an instance of our component, it looks at the constructor, it see that this constructor has a dependecies (service:CoursesService).
// So first it create an instance of the CoursesService and pass it to the constructor
  constructor(service: CoursesService) {
  this.lezioni = service.getCourses();

  }
}


// ____________________________DEPENDECY INJECTION____________________________

//08. We are not done yet!
 // 08.A  We need to instruct angular to create an instance of CoursesService.
 // 08.B Pass it to our CoursesComponent.

// 09. We need to register --> app.module.ts
