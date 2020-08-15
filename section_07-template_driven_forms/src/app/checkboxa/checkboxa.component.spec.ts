import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxaComponent } from './checkboxa.component';

describe('CheckboxaComponent', () => {
  let component: CheckboxaComponent;
  let fixture: ComponentFixture<CheckboxaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
