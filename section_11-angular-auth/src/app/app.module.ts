// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, Http } from '@angular/http';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { FormComponent } from './common/form/form.component';
import { InputComponent } from './common/input/input.component';
import { NavbarComponent } from './navbar/navbar.component';
// services
import { MoviesService } from './service/movies.service';
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';
import { AdminGuard } from './service/admin-auth-guard.service';
// extras
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import 'rxjs-compat';
import { AdminComponent } from './views/admin/admin.component';
import { QueryParmasComponent } from './views/query-parmas/query-parmas.component';
import { NoAccessComponent } from './common/error-template/no-access/no-access.component';

export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'token'
    }), http);
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        FormComponent,
        InputComponent,
        NavbarComponent,
        AdminComponent,
        QueryParmasComponent,
        NoAccessComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        MoviesService,
         DataService,
         AuthService,
         AdminGuard,
         AuthGuard,
         AuthHttp,
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
