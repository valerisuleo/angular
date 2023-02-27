import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppSigninComponent } from './app-signin.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: AppSigninComponent
    }]),
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [AppSigninComponent]
})

export class AppSigninModule { }
