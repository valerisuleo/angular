import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import {  HttpModule } from '@angular/http';
// components
import { AppComponent } from './app.component';
// services
import { DataService } from './services/data.service';
// redux
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodosModule } from './todos/todos.module';
import { MessageModule } from './messages/messages.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        NgReduxModule,
        TodosModule,
        MessageModule
    ],
    providers: [
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
