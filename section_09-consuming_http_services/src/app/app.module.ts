import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { RefactoringComponent } from './refactoring/refactoring.component';


import {  HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonutsService } from './services/donuts.service';
import { MapOperatorComponent } from './map-operator/map-operator.component';




@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    RefactoringComponent,
    MapOperatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DonutsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
