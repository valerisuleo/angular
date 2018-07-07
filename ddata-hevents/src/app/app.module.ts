import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { MyPipeComponent } from './my-pipe/my-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    MyPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
