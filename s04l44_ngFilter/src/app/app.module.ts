import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AuthorsService } from './authors.service';
import { PoetiComponent } from './poeti/poeti.component'




@NgModule({
  declarations: [
    AppComponent,
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
