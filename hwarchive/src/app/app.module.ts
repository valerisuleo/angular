import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MyArchiveComponent } from './my-archive/my-archive.component';

import { MyArchiveService } from './services/my-archive.service';
import { ShowMyarchiveComponent } from './show-myarchive/show-myarchive.component';





@NgModule({
  declarations: [
    AppComponent,
    MyArchiveComponent,
    ShowMyarchiveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  	{ path: 'archives/:year/:month', component: ShowMyarchiveComponent},
  	{ path: 'archives', component: MyArchiveComponent},
  	{ path: '**', redirectTo: 'archives' }
])
  ],
  providers: [MyArchiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
