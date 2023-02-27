import { CarouselComponent } from './carousel.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperModule } from '../../stepper.module';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperModule],
      providers: [],
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('shoud create', () => {
    expect(component).toBeTruthy();
  });
});
