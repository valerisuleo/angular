import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AuthorsService } from './authors.service';

// we add our component here as well. 
import { PoetiComponent } from './poeti/poeti.component'



// here we have a decorated class with NgModule. Here we converted our plain ts class to a module from angular point of view.
@NgModule({
  declarations: [
    AppComponent,
    // here we add our new component
    PoetiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
