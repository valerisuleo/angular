import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperShellComponent } from './stepper-shell.component';

describe('StepperShellComponent', () => {
  let component: StepperShellComponent;
  let fixture: ComponentFixture<StepperShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
