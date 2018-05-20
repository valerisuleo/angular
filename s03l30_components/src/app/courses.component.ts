

// 02 import our Component decorator
import { Component } from '@angular/core';

// 03 add the decorator function
@Component({
selector: 'courses',
template: '<h2>Courses</h2>'
})


// 01 we create our comoponet
export class CoursesComponent{
}

// 04 ---> app.module.ts


// __________________GENERATING COMPONENTS USING ANGULAR CLI__________________
// 01 NG-CLI. in the terminal we type ng g c cliComponents
  // Cosa è successo:
  // A) È stata generata una nuova cartella "cli-componet" con tutto il necessario (vedi "cli-componenti.component.ts")
  // B) In "app.module.ts" il componente è stato già registrato!
