import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';


// COMPONENTS
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
// service
import { PostsService } from './services/posts.service';

import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'houses/:id', component: ShowComponent},
      { path: 'houses', component: IndexComponent},
      { path: '**', redirectTo: 'houses' }
    ])
  ],
  providers: [
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
