// MODULES
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


// COMPONENTS
// import { BirdsComponent } from './birds/birds.component';
// import { BirdsShowComponent } from './birds-show/birds-show.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbdDatepickerRange } from './datepicker-range/datepicker-range.component';
import { IndexDocsComponent } from './rdocumenti/index-docs/index-docs.component';

const appRoutes: Routes = [
  // { path: 'show/:id', component: BirdsShowComponent},
  // { path: 'home', component: BirdsComponent},
  // { path: 'birds', component: BirdsComponent, canActivate: [AuthGuard]},

  { path: 'dpick', component: NgbdDatepickerRange},
  { path: 'indexdocs', component: IndexDocsComponent},
  { path: 'login', component: SignInComponent},
  { path: 'home', component: LandingPageComponent},
  { path: '**', redirectTo: 'home' }
];

export const uiRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
