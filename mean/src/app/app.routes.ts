// MODULES
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


// COMPONENTS
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewBirdComponent } from './new-bird/new-bird.component';
import { IndexPicDocComponent } from './pic-doc/index-pic-doc/index-pic-doc.component';
import { ShowPicDocComponent } from './pic-doc/show-pic-doc/show-pic-doc.component';
import { BirdsListComponent } from './birds-list/birds-list.component';
import { IndexDocsComponent } from './rdocumenti/index-docs/index-docs.component';
import { ShowDocsComponent } from './rdocumenti/show-docs/show-docs.component';

const appRoutes: Routes = [
  { path: 'new', component: NewBirdComponent, canActivate: [AuthGuard]},
  { path: 'cdlavoro/:id', component: ShowPicDocComponent, canActivate: [AuthGuard]},
  { path: 'cdlavoro', component: IndexPicDocComponent, canActivate: [AuthGuard]},
  { path: 'docs-list/:id', component: ShowDocsComponent, canActivate: [AuthGuard]},
  { path: 'docs-list', component: IndexDocsComponent, canActivate: [AuthGuard]},
  { path: 'birdslist', component: BirdsListComponent, canActivate: [AuthGuard]},
  { path: 'login', component: SignInComponent},
  { path: 'home', component: LandingPageComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home' }
];

export const uiRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
