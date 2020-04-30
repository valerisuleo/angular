import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularContentComponent } from './angular-content/angular-content.component';
import { CardComponent } from './common/card/card.component';
import { AngularIfComponent } from './angular-if/angular-if.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AngularSwitchCaseComponent } from './angular-switch-case/angular-switch-case.component';
import { PillsComponent } from './common/pills/pills.component';
import { FakeService } from './services/fake.service';
import { AngularNgClassComponent } from './angular-ng-class/angular-ng-class.component';
import { FormClass } from './angular-ng-class/form-model';
import { HttpModule } from '@angular/http';
import { InputFormatDirective } from './common/input-format.directive';

@NgModule({
    declarations: [
        AppComponent,
        AngularContentComponent,
        CardComponent,
        AngularIfComponent,
        NavbarComponent,
        AngularSwitchCaseComponent,
        PillsComponent,
        AngularNgClassComponent,
        InputFormatDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        FakeService,
        FormClass
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
