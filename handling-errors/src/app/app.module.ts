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
import { ForkService } from './services/fork.service';


import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { ToastComponent } from './common/toast/toast.component';
import { TwinComponent } from './twin/twin.component';
import { OverviewComponent } from './status-update/overview/overview.component';
import { TreeComponent } from './status-update/tree/tree.component';
import { DashboardComponent } from './status-update/dashboard/dashboard.component';
import { Modale1Component } from './checkbox/modale1/modale1.component';
import { Modale2Component } from './checkbox/modale2/modale2.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShowComponent,
    ToastComponent,
    TwinComponent,
    OverviewComponent,
    TreeComponent,
    DashboardComponent,
    Modale1Component,
    Modale2Component,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'houses/:id', component: ShowComponent},
      { path: 'twin', component: TwinComponent},
      { path: 'houses', component: IndexComponent},
      { path: 'modale2', component: Modale2Component},
      // { path: 'dashboard', component: DashboardComponent},
      { path: '**', redirectTo: 'houses' }
    ])
  ],
  providers: [
    PostsService,
    ForkService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
