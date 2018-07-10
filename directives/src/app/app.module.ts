import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BootabsComponent } from './bootabs/bootabs.component';
import { ForComponent } from './for/for.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    BootabsComponent,
    ForComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
