// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// EXTRAS
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { uiRouter } from './app.routes';
import { AuthGuard } from './auth.guard';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

// COMPONENTS
import { AppComponent } from './app.component';
import { BirdsComponent } from './birds/birds.component';
import { BirdsShowComponent } from './birds-show/birds-show.component';
import { SignInComponent } from './sign-in/sign-in.component';

// SERVICES
import { AuthService } from './services/auth.service';
import { BirdsService } from './services/birds/birds.service';

@NgModule({
  declarations: [
    AppComponent,
    BirdsComponent,
    SignInComponent,
    BirdsShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    uiRouter,
    FormsModule,
    ReactiveFormsModule,
  JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
      whitelistedDomains: ['localhost:3000'],
      blacklistedRoutes: ['localhost:3000/api/login']
    }
  })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    BirdsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
