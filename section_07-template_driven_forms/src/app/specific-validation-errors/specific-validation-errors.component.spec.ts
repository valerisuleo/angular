import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificValidationErrorsComponent } from './specific-validation-errors.component';

describe('SpecificValidationErrorsComponent', () => {
  let component: SpecificValidationErrorsComponent;
  let fixture: ComponentFixture<SpecificValidationErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificValidationErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
