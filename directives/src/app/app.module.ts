import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BootabsComponent } from './bootabs/bootabs.component';
import { ForComponent } from './for/for.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './directives/input-format.directive';


@NgModule({
  declarations: [
    AppComponent,
    BootabsComponent,
    ForComponent,
    FavoriteComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
