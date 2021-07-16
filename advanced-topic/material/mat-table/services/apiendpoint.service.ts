import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, combineLatest } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ApiEndpointFactory } from "./apiendpointfactory.service";
import { LocalKeys } from "./localstorageconstants";

@Injectable()
export class ApiEndpoint extends ApiEndpointFactory {
    private readonly _accountUrl = "/api/Accounts";
    private _apiConfig;

    constructor(http: HttpClient, injector: Injector) {
        super(http, injector);
    }

    getBaseURL() {
        return localStorage.getItem(LocalKeys.SITE_CONFIG) ?
            JSON.parse(localStorage.getItem(LocalKeys.SITE_CONFIG)).apiUrl : "";
    }

    getLocalConfig<T>(): Observable<T> {
        let endpointUrl = '/api/Config';
        return this.http.get<T>(endpointUrl, this.getAuthHeader(false))
            .pipe(
                catchError((error) => {
                    return this.handleError(error, () => this.getLocalConfig());
                })
            );
    }

    setApiConfig() {
        if (!this._apiConfig) {
            this.getLocalConfig()
                .subscribe((response) => {
                    this._apiConfig = response;
                });
        }
    }

    // Account Controller
    getAccounts<T>(): Observable<T> {
        let endpointUrl = this.getBaseURL() + this._accountUrl;
        return this.http.get<T>(endpointUrl, this.getAuthHeader())
            .pipe(
                catchError((error) => {
                    return this.handleError(error, () => this.getAccounts());
                })
            );
    }

    getAll(apiEndpoint: string) {
        if (this._apiConfig && this._apiConfig.apis) {
            return combineLatest(
                this._apiConfig.apis.map(element => {
                    return this.http.get(`${element.url}/${apiEndpoint}`, this.getAuthHeader())
                        .pipe(
                            map((res: any) => {
                                const mapped = res.map((obj) => {
                                    return {
                                        ...obj,
                                        region: element.region,
                                        flagName: element.flag,
                                    }
                                });
                                return mapped;
                            }),
                            catchError((error) => {
                                return this.handleError(error, () => this.getAccounts());
                            })
                        );
                })
            )
        }
    }

    updateItem(region: string, endPoint: string, resource: any) {
        const apiPrefix = this._apiConfig.apis.find(obj => obj.region === region);
        return this.http.patch(`${apiPrefix.url}/${endPoint}`, resource, this.getAuthHeader())
            .pipe(
                catchError((error) => {
                    return this.handleError(error, () => this.getAccounts());
                })
            );
    }

    getCollection(region: string, endPoint: string,) {
        const apiPrefix = this._apiConfig.apis.find(obj => obj.region === region);
        return this.http.get(`${apiPrefix.url}/${endPoint}`, this.getAuthHeader())
            .pipe(
                catchError((error) => {
                    return this.handleError(error, () => this.getAccounts());
                })
            );
    }
}

