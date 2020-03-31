import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import {  HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { FilterPipe } from './my-pipes/filter.pipe';
import { NgbdModalBasicComponent } from './beer/ngbd-modal-basic/ngbd-modal-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    FilterPipe,
    NgbdModalBasicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
