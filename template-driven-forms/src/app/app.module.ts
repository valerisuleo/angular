import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ValidationComponent } from './validation/validation.component';
import { SpecificValidationErrorsComponent } from './specific-validation-errors/specific-validation-errors.component';
import { NngFormComponent } from './nng-form/nng-form.component';
import { NngModelGroupComponent } from './nng-model-group/nng-model-group.component';
import { CheckboxaComponent } from './checkboxa/checkboxa.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ValidationComponent,
    SpecificValidationErrorsComponent,
    NngFormComponent,
    NngModelGroupComponent,
    CheckboxaComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
