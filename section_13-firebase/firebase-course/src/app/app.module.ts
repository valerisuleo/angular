import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { MovieShowComponent } from './components/show/movie-show.component';
import { MoviesComponent } from './components/index/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
