import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { AuthService } from './auth.service';


@Injectable()
export class ApiEndpointFactory {

    static readonly apiVersion: string = "1";
    public _authService: AuthService;
    private get authService() {
        if (!this._authService) this._authService = this.injector.get(AuthService);
        return this._authService;
    }

    constructor(protected http: HttpClient, private injector: Injector) { }

    protected getAuthHeader(
        includeToken: boolean = true,
        body: any = {}): { headers: HttpHeaders | { [header: string]: string | string[]; } } {

        let headers = (includeToken) ? new HttpHeaders({
            'Authorization': 'Bearer ' + this.authService.accessToken,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }) : new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        });

        headers.append("Accept", `application/vnd.iman.v${ApiEndpointFactory.apiVersion}+json, application/json, text/plain, */*`);
        let options = {
            headers: headers,
            body: body
        }
        return options;
    }

    protected handleError(error, continuation: () => Observable<any>) {
        if (error.status == 401) {
            this.authService.logout();
            return throwError('session expired');
        } else if (error.status == 429) {
            //this.authService.showError();
            return throwError(error || 'server error');
        } else {
            return throwError(error || 'server error');
        }
    }

    protected handle401Error(error, continuation: () => Observable<any>) {
        if (error.status == 401) {
            return throwError(error || '');
        } else {
            return throwError(error || 'server error');
        }
    }

    protected getUiLocales() {
        let ui_locales = localStorage.getItem('language');
        ui_locales = (ui_locales) ? ui_locales : '"en"';
        return JSON.parse(ui_locales);
    }
}

