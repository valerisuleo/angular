import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// components
import { AppComponent } from './app.component';
import { CheckboxComponent } from './mat-components/checkbox/checkbox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RadioComponent } from './mat-components/radio/radio.component';
import { SelectComponent } from './mat-components/select/select.component';
import { InputsComponent } from './mat-components/inputs/inputs.component';
import { TextAreasComponent } from './mat-components/text-areas/text-areas.component';
import { DatepickersComponent } from './mat-components/datepickers/datepickers.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        CheckboxComponent,
        NavbarComponent,
        HomeComponent,
        RadioComponent,
        SelectComponent,
        InputsComponent,
        TextAreasComponent,
        DatepickersComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
