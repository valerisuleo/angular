import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HostComponent } from './host/host.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    HostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
