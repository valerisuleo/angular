import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { OverlayContainer } from "@angular/cdk/overlay";
import { CustomOverlayContainer } from "./theme/utils/custom-overlay-container";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true,
};
import { AppFooterComponent } from "./shared/components/app-footer/app-footer.component";
import { AppRoutingModule } from "./app.routing.module";
import { MaterialModule } from "./shared/material.module";
import { AppSettings } from "./services/settings.services";
import { LocalStoreManager } from "./services/localstorage.service";
import { ApiEndpoint } from "./services/apiendpoint.service";
import { ApiEndpointFactory } from "./services/apiendpointfactory.service";
import { AppComponent } from "./app.component";
import "bootstrap";
import { FormGroupModule } from "./shared/reusable-components/form/forms.module";
import { ToastrModule } from 'ngx-toastr';
import {Ng7MatBreadcrumbModule} from "ng7-mat-breadcrumb";
import { BootstrapModule } from "./shared/bootstrap.module";

@NgModule({
    declarations: [
        AppComponent,
        AppFooterComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        FormGroupModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        Ng7MatBreadcrumbModule,
        MaterialModule,
        BootstrapModule,
        AppRoutingModule,
        NgxMaterialTimepickerModule.setLocale('uk-UA'),
        ToastrModule.forRoot(), // ToastrModule added
    ],
    providers: [
        AppSettings,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: OverlayContainer, useClass: CustomOverlayContainer },
        LocalStoreManager,
        ApiEndpoint,
        ApiEndpointFactory,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
