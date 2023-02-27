import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApiService } from '@challenger/shared/services/api.service';
import { AuthorizationService } from '../shared/services/authorization.service';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { LoadingIndicatorModule } from '@challenger6/vm-pattern-library/loading-indicator';
import { MarkdownModule } from 'ngx-markdown';
import { StepperShellComponent } from './containers/stepper-shell.component';
import { StepperComponent } from './components/stepper.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { ButtonModule } from '@challenger6/vm-pattern-library/button/button.module';
import { ChipComponent } from './components/chip/chip.component';
import { ProductCardWrapperModule } from '../lib/product-card-wrapper/product-card-wrapper.module';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    StepperShellComponent,
    StepperComponent,
    InputComponent,
    CardComponent,
    ChipComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadingIndicatorModule,
    MarkdownModule,
    ButtonModule,
    ProductCardWrapperModule,
    RouterModule.forChild([
      {
        path: '',
        component: StepperShellComponent,
      },
    ]),
  ],
  providers: [{ provide: 'apiEndpoint', useValue: environment.mulesoftApi }, ApiService, AuthorizationService],
})
export class StepperModule {}
