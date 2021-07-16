import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, Subject } from 'rxjs';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { LocalStoreManager } from './localstorage.service'
import { LocalKeys } from './localstorageconstants';
import { ApiEndpoint } from './apiendpoint.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthService {

    public msalService: MsalService;
    public loggedIn: boolean = false;
    public previousIsLoggedInCheck: boolean = false
    public settings: any;
    public loginStatus = new Subject<boolean>();

    constructor(
        private localStorage: LocalStoreManager,
        private apiService: ApiEndpoint,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
        this.websiteStart();
    }

    public websiteStart() {
        this.apiService.getLocalConfig().subscribe(result => {

            this.settings = result;
            let windowLocation = window.location.protocol + "//" + window.location.host;

            this.msalService = new MsalService(
                {
                    auth: {
                        clientId: this.settings.clientId,
                        authority: this.settings.authority,
                        redirectUri: windowLocation,
                    },
                    cache: {
                        cacheLocation: 'sessionStorage'
                    }
                },
                {
                    consentScopes: [],
                    unprotectedResources: [],
                    protectedResourceMap: [],
                    extraQueryParameters: {}
                },
                this.router,
                new BroadcastService());
        });
    }

    async startSigninMainWindow(): Promise<void> {
        const authenticationParameters = {
            scopes: ["openid", "profile", "User.Read"]
        }

        try {
            await this.msalService.loginPopup(authenticationParameters);
            let accessTokenResponse = await this.msalService.acquireTokenPopup(authenticationParameters);
            let accessToken = accessTokenResponse.accessToken;
            this.localStorage.saveSyncedSessionData(accessToken, LocalKeys.ACCESS_TOKEN);
            this.localStorage.saveSyncedSessionData({ name: accessTokenResponse.idToken.name, email: accessTokenResponse.idToken.preferredName }, LocalKeys.CURRENT_USER);
            this.loggedIn = true;
            this.loginStatus.next(true);
            this.navigateUser();
            this.reevaluateLoginStatus();
        }
        catch (error) {
            console.log(error);
        }
    }

    navigateUser(): void {
        this.router.navigate(['accounts']);
    }

    getLoginStatusEvent(): Observable<boolean> {
        return this.loginStatus.asObservable();
    }

    get accessToken(): string {
        return this.localStorage.getData(LocalKeys.ACCESS_TOKEN);
    }

    get isLoggedIn(): boolean {
        return this.currentUser != null;
    }

    get currentUser(): any {
        let user = this.localStorage.getDataObject<any>(LocalKeys.CURRENT_USER);
        this.reevaluateLoginStatus(user);
        return user;
    }

    reevaluateLoginStatus(currentUser?: any) {
        let user = currentUser || this.localStorage.getDataObject<any>(LocalKeys.CURRENT_USER);
        let isLoggedIn = user != null;
        if (this.previousIsLoggedInCheck != isLoggedIn) {
            setTimeout(() => {
                this.loginStatus.next(isLoggedIn);
            });
        }
        this.previousIsLoggedInCheck = isLoggedIn;
    }

    logout(): void {
        this.localStorage.clearAllStorage();
        this.loggedIn = false;
        this.loginStatus.next(false);
        this.msalService.logout();
    }
}
