import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'child', component: ChildComponent},
      { path: 'father', component: FatherComponent},
      { path: '**', redirectTo: 'father' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
