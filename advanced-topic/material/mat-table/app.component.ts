import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Router, NavigationEnd, RoutesRecognized, RouteReuseStrategy } from "@angular/router";
import { DatePipe } from "@angular/common";
import { PerfectScrollbarDirective } from "ngx-perfect-scrollbar";
import { AppSettings, Settings } from "./services/settings.services";
import { AuthService } from "./services/auth.service";
import { LocalStoreManager } from "./services/localstorage.service";
import { LocalKeys } from "./services/localstorageconstants";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiEndpoint } from "./services/apiendpoint.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DatePipe]
})
export class AppComponent implements OnInit {
    @ViewChild("sidenav") sidenav: any;
    @ViewChild("backToTop") backToTop: any;
    @ViewChildren(PerfectScrollbarDirective) pss: QueryList<PerfectScrollbarDirective>;
    public settings: Settings;
    public menus = ["vertical", "horizontal"];
    public menuOption: string;
    public menuTypes = ["default", "compact", "mini"];
    public menuTypeOption: string;
    public lastScrollTop: number = 0;
    public showBackToTop: boolean = false;
    public maintenanceStarted: boolean = false;
    private defaultMenu: string; //declared for return default menu when window resized
    themes: string[] = [
        "default",
        "default-alt",
        "blue-light",
        //"hotdog-stand"
        // "indigo-light",
        "blue-dark",
        // "red-light",
        // "pink-dark",
        // "teal-light",
        // "green-dark",
    ];
    isUserLoggedIn: boolean;
    userDetails: any = [];
    loggedOut: boolean = false;
    removePreBootScreen: boolean = false;

    isCrumble: boolean;

    constructor(
        public appSettings: AppSettings,
        private localStorage: LocalStoreManager,
        private authService: AuthService,
        public router: Router,
        private cd: ChangeDetectorRef,
        private snackBar: MatSnackBar,
        private apiService: ApiEndpoint
    ) {
        this.localStorage.initialiseStorageSyncListener();
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.authService.getLoginStatusEvent().subscribe((isLoggedIn) => {
            this.isUserLoggedIn = isLoggedIn;
            if (this.isUserLoggedIn) {
                this.apiService.setApiConfig();
                this.userDetails = this.localStorage.getData(LocalKeys.CURRENT_USER);
                this.settings.theme = this.userDetails?.colourScheme || 'default';
                this.router.events.subscribe((event) => {
                    if (event instanceof RoutesRecognized) {
                       if (this.router.url === '/accounts') {
                           this.isCrumble = false;
                       } else {
                           this.isCrumble = true;
                       }
                    }
                })

                this.cd.markForCheck();
            }
        });

        if (window.innerWidth <= 768) {
            this.settings.menu = "vertical";
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.updateSettings();
        }
        this.settings.loadingSpinner = false;
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
        this.cd.markForCheck();
    }

    ngAfterViewInit() {
        this.backToTop.nativeElement.style.display = "none";
        this.cd.markForCheck();
    }

    ngOnDestroy(): void { }

    public chooseMenu() {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        this.router.navigate(["/"]);
        this.cd.markForCheck();
    }

    public chooseMenuType() {
        this.settings.menuType = this.menuTypeOption;
        this.updateSettings();
        this.cd.markForCheck();
    }

    public changeTheme(theme) {
        this.settings.theme = theme;
        this.updateSettings();
        let a = this.localStorage.getData(LocalKeys.CURRENT_USER);
        a.colourScheme = this.settings.theme;
        this.localStorage.saveSyncedSessionData(a, LocalKeys.CURRENT_USER);
        this.cd.markForCheck();
    }

    public toggleSidenav() {
        if (!this.settings.sidenavIsOpened) {
            //on mobile
            this.menuTypeOption = this.settings.menuType = "default";
            this.sidenav.toggle();
        } else {
            this.menuTypeOption = this.menuTypeOption === "compact" ? "default" : "compact";
            this.settings.menuType = this.menuTypeOption;
        }
        this.updateSettings();
        this.cd.markForCheck();
    }
    public toggleUserInfo() {
        this.settings.sidenavUserBlock = !this.settings.sidenavUserBlock;
        this.updateSettings();
        this.cd.markForCheck();
    }

    public updateSettings() {
        this.appSettings.updateSettings(this.settings);
        this.cd.markForCheck();
    }

    public onPsScrollY(event) {
        event.target.scrollTop > 300 ? (this.backToTop.nativeElement.style.display = "flex") : (this.backToTop.nativeElement.style.display = "none");
        if (this.settings.menu == "horizontal") {
            if (this.settings.fixedHeader) {
                var currentScrollTop =
                    event.target.scrollTop > 56 ? event.target.scrollTop : 0;
                if (currentScrollTop > this.lastScrollTop) {
                    document.querySelector("#horizontal-menu").classList.add("sticky");
                    event.target.classList.add("horizontal-menu-hidden");
                } else {
                    document.querySelector("#horizontal-menu").classList.remove("sticky");
                    event.target.classList.remove("horizontal-menu-hidden");
                }
                this.lastScrollTop = currentScrollTop;
            } else {
                if (event.target.scrollTop > 56) {
                    document.querySelector("#horizontal-menu").classList.add("sticky");
                    event.target.classList.add("horizontal-menu-hidden");
                } else {
                    document.querySelector("#horizontal-menu").classList.remove("sticky");
                    event.target.classList.remove("horizontal-menu-hidden");
                }
            }
        }
        this.cd.markForCheck();
    }

    public scrollToTop() {
        this.pss.forEach((ps) => {
            if (ps.elementRef.nativeElement.id == "main" || ps.elementRef.nativeElement.id == "main-content") {
                ps.scrollToTop(0, 250);
            }
        });
        this.cd.markForCheck();
    }

    @HostListener("window:resize")
    public onWindowResize(): void {
        if (window.innerWidth <= 768) {
            this.settings.menuType = this.menuTypeOption = "default";
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = "vertical";
            this.updateSettings();
        } else {
            this.defaultMenu == "horizontal" ? (this.settings.menu = "horizontal") : (this.settings.menu = "vertical");
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
            this.updateSettings();
        }
        this.cd.markForCheck();
    }

    signOut() {
        //this.sidenav.__opened ? this.sidenav.toggle() : '';
        this.loggedOut = true;
        this.settings.loadingSpinner = true;
        this.updateSettings();
        this.authService.logout();
        this.cd.markForCheck();
    }

    onLoadFailed(error: any) {
        //show snackbar here to inform user about error
        let message = error.error ? error.error.errorString : error.message;
        this.snackBar.open(message, "X", {
            duration: 5000,
            verticalPosition: "top",
            horizontalPosition: "center",
        });
        //this.showLoader = false;
        this.cd.markForCheck();
        console.log(error);
    }
}
