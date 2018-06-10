import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LessonNgifComponent } from './lesson-ngif/lesson-ngif.component';
import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { LessonNgforComponent } from './lesson-ngfor/lesson-ngfor.component';
import { LessonNgForTrackbyComponent } from './lesson-ng-for-trackby/lesson-ng-for-trackby.component';
import { SafetraversaloperatorComponent } from './safetraversaloperator/safetraversaloperator.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonNgifComponent,
    HiddenPropertyComponent,
    SwitchcaseComponent,
    LessonNgforComponent,
    LessonNgForTrackbyComponent,
    SafetraversaloperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
