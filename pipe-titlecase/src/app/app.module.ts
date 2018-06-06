import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipesComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
