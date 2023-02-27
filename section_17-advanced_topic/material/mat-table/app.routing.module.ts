import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: "signin",
                pathMatch: 'full'
            },
            {
                path: 'accounts', loadChildren: () => import('./components/app-accounts/app-accounts.module')
                    .then(m => m.AppAccountsModule),
                data: { breadcrumb: 'Accounts' },
                canLoad: [AuthGuard]
            },
            {
                path: 'signin', loadChildren: () => import('./components/app-signin/app-signin.module')
                    .then(m => m.AppSigninModule),
                resolve: [AuthGuard]
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AuthService,
        AuthGuard
    ]
})
export class AppRoutingModule { }
