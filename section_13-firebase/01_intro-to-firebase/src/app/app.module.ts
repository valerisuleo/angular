import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CoursesModule } from './views/courses/courses.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { DataService } from './services/data.service';
import { BatchedWritesComponent } from './batched-writes/batched-writes.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchedWritesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CoursesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule
  ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
