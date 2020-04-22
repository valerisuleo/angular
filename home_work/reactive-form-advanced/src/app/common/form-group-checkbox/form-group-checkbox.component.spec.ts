import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupCheckboxComponent } from './form-group-checkbox.component';

describe('FormGroupCheckboxComponent', () => {
  let component: FormGroupCheckboxComponent;
  let fixture: ComponentFixture<FormGroupCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
