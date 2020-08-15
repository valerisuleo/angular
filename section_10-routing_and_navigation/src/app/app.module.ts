import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http';
import {  RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { DonutsComponent } from './donuts/donuts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FollowerShowComponent } from './follower-show/follower-show.component';
import { DonutShowComponent } from './donut-show/donut-show.component';



import {  FollowersService } from './services/followers/followers.service';
import {  DonutsService } from './services/donuts/donuts.service';



@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
    DonutsComponent,
    NavbarComponent,
    LandingComponent,
    FollowerShowComponent,
    DonutShowComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'users/:id', component: FollowerShowComponent},
      // { path: 'users/:id', component: FollowerShowComponent},
      { path: 'users', component: FollowersComponent},
      { path: 'donuts/:id', component: DonutShowComponent},
      { path: 'donuts', component: DonutsComponent},
      { path: 'home', component: LandingComponent},
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    FollowersService,
    DonutsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
