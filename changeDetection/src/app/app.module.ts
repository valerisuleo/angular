import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ChildComponent } from './obs-and-cdr/child/child.component';
import { ParentComponentCdr } from './obs-and-cdr/parent/parent.component';
import { CounterComponent } from './immutable-obj/counter/counter.component';
import { ParentComponent } from './immutable-obj/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ParentComponent,
    ParentComponentCdr,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
