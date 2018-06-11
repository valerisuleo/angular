import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeartComponent } from './heart/heart.component';
import { ProvaComponent } from './prova/prova.component';


@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    ProvaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
