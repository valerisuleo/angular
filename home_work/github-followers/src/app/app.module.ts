import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';

import {  HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
