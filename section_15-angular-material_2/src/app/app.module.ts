import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './mat-components/material.module';
// service
import { TodosService } from './todos.service';
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        EditCourseComponent
    ],
    entryComponents: [EditCourseComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MaterialModule
    ],
    providers: [TodosService],
    bootstrap: [AppComponent]
})
export class AppModule { }
