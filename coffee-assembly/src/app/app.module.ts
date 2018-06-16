import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';

import { FakequeryService } from './fakequery.service';



@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FakequeryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
