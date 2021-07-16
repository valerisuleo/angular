import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ParseVersionPipe } from './table/parse-version.pipe';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        ParseVersionPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        ScrollingModule,
        TableVirtualScrollModule,
        MatSortModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        HttpClientModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
