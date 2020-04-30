import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './service/auth-guard.service';
import { AdminComponent } from './views/admin/admin.component';
import { QueryParmasComponent } from './views/query-parmas/query-parmas.component';
import { AdminGuard } from './service/admin-auth-guard.service';
import { NoAccessComponent } from './common/error-template/no-access/no-access.component';

const routes: Routes = [
    {
        path: 'no-access',
        component: NoAccessComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminGuard]
    },
    {
        path: 'queryparams',
        component: QueryParmasComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'movies',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    
    { path: '**', redirectTo: 'movies' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
