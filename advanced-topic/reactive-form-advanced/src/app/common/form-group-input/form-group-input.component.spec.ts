import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupInputComponent } from './form-group-input.component';

describe('FormGroupInputComponent', () => {
  let component: FormGroupInputComponent;
  let fixture: ComponentFixture<FormGroupInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
