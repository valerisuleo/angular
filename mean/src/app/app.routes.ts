// MODULES
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


// COMPONENTS
import { BirdsComponent } from './birds/birds.component';
import { BirdsShowComponent } from './birds-show/birds-show.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: 'birds/:id', component: BirdsShowComponent},
  { path: 'birds', component: BirdsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: SignInComponent},
  { path: '**', redirectTo: 'birds' }
];

export const uiRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
