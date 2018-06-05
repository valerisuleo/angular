import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AuthorsService } from './authors.service';
import { PoetiComponent } from './poeti/poeti.component';
import { StarComponent } from './star/star.component';
import { ApesComponent } from './apes/apes.component'




@NgModule({
  declarations: [
    AppComponent,
    PoetiComponent,
    StarComponent,
    ApesComponent
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
