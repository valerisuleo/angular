import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/views/auth/register/register.component';
import { LoginComponent } from './components/views/auth/login/login.component';
import { FormComponent } from './common/form-container/form.component';
import { FormGroupInputComponent } from './common/form-group-input/form-group-input.component';
import { FormGroupSelectComponent } from './common/form-group-select/form-group-select.component';
import { FormGroupCheckboxComponent } from './common/form-group-checkbox/form-group-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    FormComponent,
    FormGroupInputComponent,
    FormGroupSelectComponent,
    FormGroupCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
