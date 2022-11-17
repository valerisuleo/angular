import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperModule } from '../../stepper.module';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperModule],
      providers: [],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('shoud create', () => {
    expect(component).toBeTruthy();
  });
});
