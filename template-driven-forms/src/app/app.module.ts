import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
