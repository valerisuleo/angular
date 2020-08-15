import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { MyPipeComponent } from './my-pipe/my-pipe.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    MyPipeComponent,
    CustomPipesComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
