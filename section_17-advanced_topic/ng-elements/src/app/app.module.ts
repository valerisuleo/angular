import { Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BootstrapAlertComponent } from "./common/bootstrap-alert/bootstrap-alert.component";
import { BootstrapListComponent } from "./common/bootstrap-list/bootstrap-list.component";
import { HomeComponent } from "./home/home.component";
import { createCustomElement } from "@angular/elements";
@NgModule({
    declarations: [
        AppComponent,
        BootstrapAlertComponent,
        BootstrapListComponent,
        HomeComponent,
    ],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    // bootstrap: [AppComponent],
})
export class AppModule {
    // public message = " A simple primary alert—check it out!";

    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        // Convert `BootstrapAlertComponent` to a custom element.
        const AlertElement = createCustomElement(BootstrapAlertComponent, {
            injector: this.injector,
        });
        // Register the custom element with the browser.
        customElements.define("alert-element", AlertElement);

    }
}
