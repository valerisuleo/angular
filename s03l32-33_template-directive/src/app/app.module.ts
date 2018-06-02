
// 04 import the component
import { CoursesComponent } from './courses.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// generated with angular-cli
import { CliComponentiComponent } from './cli-componenti/cli-componenti.component';


@NgModule({
  declarations: [
    AppComponent,
    // 05 register our Component
    CoursesComponent,
    
    // generated with angular-cli
    CliComponentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 06 ---> app.component.ts
