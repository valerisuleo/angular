import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

import { AuthorsService } from './authors.service';
import { PoetiComponent } from './poeti/poeti.component';
import { StarComponent } from './star/star.component';
import { ApesComponent } from './apes/apes.component';

import { SummaryPipe } from './custom.pipe';
import { TitlecasePipe } from './custom.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';




@NgModule({
  declarations: [
    AppComponent,
    PoetiComponent,
    StarComponent,
    ApesComponent,
    SummaryPipe,
    TitlecasePipe,
    CustomPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
