import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { IpadComponent } from './ipad/ipad.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './common/mat-components/mat-components.module';
import { MaterialModule } from './common/material.module';


@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        IpadComponent,
        DevicesComponent,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialComponentsModule,
        MaterialModule,
        RouterModule.forRoot([
            { path: 'devices/:id', component: IndexComponent},
            { path: 'devices', component: DevicesComponent},
            { path: 'apps', component: IpadComponent},
            { path: '**', redirectTo: 'apps' }

        ])
    ],
    entryComponents: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
