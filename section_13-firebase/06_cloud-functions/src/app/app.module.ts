import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CoursesModule } from './views/courses/courses.module';
import { FormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

import { BatchedWritesComponent } from './batched-writes/batched-writes.component';
import { LoginComponent } from './views/auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchedWritesComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoursesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
      DataService,
      AuthService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
