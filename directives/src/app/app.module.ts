import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BootabsComponent } from './bootabs/bootabs.component';
import { ForComponent } from './for/for.component';


@NgModule({
  declarations: [
    AppComponent,
    BootabsComponent,
    ForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
