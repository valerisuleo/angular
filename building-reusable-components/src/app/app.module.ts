import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ApiComponent } from './api/api.component';
import { AngularcontentComponent } from './angularcontent/angularcontent.component';


@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    ApiComponent,
    AngularcontentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
