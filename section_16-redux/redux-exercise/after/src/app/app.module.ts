import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BootstrapFormComponent } from './reusable-components/form/bootstrap-form/bootstrap-form.component';
import { BootstrapInputComponent } from './reusable-components/form/bootstrap-input/bootstrap-input.component';
import { BootstrapListGroupComponent } from './reusable-components/bootstrap-list-group/bootstrap-list-group.component';
import { BootstrapCardComponent } from './reusable-components/bootstrap-card/bootstrap-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { TodosService } from './services/todos.service';
import {  HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
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
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
