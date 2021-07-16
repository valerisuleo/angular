import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialDialogFormComponent } from './reusable-components/material/material-dialog-form/material-dialog-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MaterialInputComponent } from './reusable-components/material/material-input/material-input.component';
import { MatInputModule } from '@angular/material/input';
import { BootstrapFormComponent } from './reusable-components/form-container/form-container.component';
import { LicenceNumberComponent } from './components/accounts/details/licence-number/licence-number.component';
import { LicenceNameComponent } from './components/accounts/details/licence-name/licence-name.component';
import { DetailsComponent } from './components/accounts/details/details.component';


@NgModule({
    declarations: [
        AppComponent,
        MaterialDialogFormComponent,
        BootstrapFormComponent,
        MaterialInputComponent,
        LicenceNumberComponent,
        LicenceNameComponent,
        DetailsComponent
    ],
    entryComponents: [MaterialDialogFormComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ScrollingModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
