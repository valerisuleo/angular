import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormContainerComponent } from './common/form-container/form-container.component';
import { FormGroupComponent } from './common/form-group/form-group.component';
import { FormClass } from './login-form/form';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FormContainerComponent,
    FormGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      FormClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
