import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyzyppyComponent } from './myzyppy/myzyppy.component';


@NgModule({
  declarations: [
    AppComponent,
    MyzyppyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
