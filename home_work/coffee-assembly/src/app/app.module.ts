import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';

import { FakequeryService } from './fakequery.service';
import { FilterPipe } from './my-pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FakequeryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
