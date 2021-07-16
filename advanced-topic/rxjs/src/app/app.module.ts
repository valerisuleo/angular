import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosService } from './service/todos.service';
import { UsersService } from './service/users.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    providers: [
        TodosService,
        UsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
