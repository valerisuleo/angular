import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperModule } from '../../stepper.module';
import { CardComponent } from './card.component';

describe('InputComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperModule],
      providers: [],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('shoud create', () => {
    expect(component).toBeTruthy();
  });
});
