// MODULES
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


// COMPONENTS
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MagicComponent } from './magic/magic.component';
import { IndexPicDocComponent } from './pic-doc/index-pic-doc/index-pic-doc.component';
import { IndexDocsComponent } from './rdocumenti/index-docs/index-docs.component';
import { ShowDocsComponent } from './rdocumenti/show-docs/show-docs.component';

const appRoutes: Routes = [
  { path: 'cdlavro', component: IndexPicDocComponent, canActivate: [AuthGuard]},
  { path: 'docs-list/:id', component: ShowDocsComponent, canActivate: [AuthGuard]},
  { path: 'docs-list', component: IndexDocsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: SignInComponent},
  { path: 'home', component: LandingPageComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home' }
];

export const uiRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
