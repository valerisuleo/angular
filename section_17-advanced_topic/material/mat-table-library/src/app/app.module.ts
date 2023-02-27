import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosModule } from './components/todos/todos.module';
import { PostsModule } from './components/posts/posts.module';
import { AppRoutingModule } from './app-routing.module';
import { DataSourceService } from './shared/datasource.service';

@NgModule({
    declarations: [
        AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule, 
        FormsModule,
        TodosModule,
        PostsModule,
    ],
    providers: [DataSourceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
