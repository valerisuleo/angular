import { CoursesComponent } from './courses.component';

// 09.A Register service
import { CoursesService } from './courses.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// generated with angular-cli
import { CliComponentiComponent } from './cli-componenti/cli-componenti.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    // generated with angular-cli
    CliComponentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // HERE WE ADD OUR DEPENDENCIES

    // 09.B register service
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
