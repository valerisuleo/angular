import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormContainerComponent } from './common/form-container/form-container.component';
import { FormGroupComponent } from './common/form-group/form-group.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormGroupComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
