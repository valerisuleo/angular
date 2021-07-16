import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatarialModule } from './shared/material.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ShowComponent } from './components/show/show.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ShowComponent
    ],
    imports: [
        BrowserModule,
        PdfViewerModule,
        BrowserAnimationsModule,
        MatarialModule,
        RouterModule.forRoot([
            { path: 'show', component: ShowComponent},
            { path: 'home', component: HomeComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
