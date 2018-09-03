// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// EXTRAS
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { uiRouter } from './app.routes';
import { AuthGuard } from './auth.guard';

export function tokenGetter() {
  console.log(localStorage.getItem('access_token'));
  return localStorage.getItem('access_token');
}

// SERVICES
import { AuthService } from './services/auth.service';
import { BirdsService } from './services/birds/birds.service';
import { IndexDocsService } from './services/rdocumenti/index-docs/index-docs.service';
import { InitDocsService } from './services/rdocumenti/init/init-docs.service';
import { IndexPraticheService } from './services/rpratiche/ls-pratiche/index-pratiche.service';
import { SidebarService } from './services/sidebar/sidebar.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { BirdsComponent } from './birds/birds.component';
import { BirdsShowComponent } from './birds-show/birds-show.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexDocsComponent } from './rdocumenti/index-docs/index-docs.component';
import { NgbdDatepickerRange } from './datepicker-range/datepicker-range.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolBarComponent } from './dashboard/tool-bar/tool-bar.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { TreeNavigatorComponent } from './dashboard/tree-navigator/tree-navigator.component';
import { ContentViewerComponent } from './dashboard/content-viewer/content-viewer.component';
import { MetadataNavigatorComponent } from './dashboard/metadata-navigator/metadata-navigator.component';
import { ProgressTrackerComponent } from './dashboard/progress-tracker/progress-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdsComponent,
    SignInComponent,
    BirdsShowComponent,
    SidebarComponent,
    HeaderComponent,
    LandingPageComponent,
    IndexDocsComponent,
    NgbdDatepickerRange,
    DashboardComponent,
    ToolBarComponent,
    OverviewComponent,
    TreeNavigatorComponent,
    ContentViewerComponent,
    MetadataNavigatorComponent,
    ProgressTrackerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    uiRouter,
    FormsModule,
    NgbModule,
    PdfViewerModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
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
    IndexDocsService,
    InitDocsService,
    AuthService,
    AuthGuard,
    IndexPraticheService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
