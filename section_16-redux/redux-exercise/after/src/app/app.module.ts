import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  HttpModule } from '@angular/http';
// components
import { AppComponent } from './app.component';
import { BootstrapFormComponent } from './reusable-components/form/bootstrap-form/bootstrap-form.component';
import { BootstrapInputComponent } from './reusable-components/form/bootstrap-input/bootstrap-input.component';
import { BootstrapListGroupComponent } from './reusable-components/bootstrap-list-group/bootstrap-list-group.component';
import { BootstrapCardComponent } from './reusable-components/bootstrap-card/bootstrap-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
// services
import { TodosService } from './services/todos.service';
import { DataService } from './services/data.service';
// redux
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
    declarations: [
        AppComponent,
        BootstrapFormComponent,
        BootstrapInputComponent,
        BootstrapListGroupComponent,
        BootstrapCardComponent,
        DashboardComponent,
        WidgetComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgReduxModule
    ],
    providers: [
        TodosService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

        const enhancer = isDevMode() ? [devTools.enhancer()] : [];
        
        ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
    }
}
