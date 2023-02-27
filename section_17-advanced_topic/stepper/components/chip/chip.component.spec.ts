import { ChipComponent } from './chip.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperModule } from '../../stepper.module';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperModule],
      providers: [],
    });
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('shoud create', () => {
    expect(component).toBeTruthy();
  });
});
