import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularContentComponent } from './angular-content/angular-content.component';
import { AngularIfComponent } from './angular-if/angular-if.component';
import { AngularSwitchCaseComponent } from './angular-switch-case/angular-switch-case.component';
import { AngularNgClassComponent } from './angular-ng-class/angular-ng-class.component';


const routes: Routes = [
    { path: 'ngclass', component: AngularNgClassComponent},
    { path: 'switchcase', component: AngularSwitchCaseComponent},
    { path: 'ngif', component: AngularIfComponent},
    { path: 'content', component: AngularContentComponent},
    { path: '**', redirectTo: 'content' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
