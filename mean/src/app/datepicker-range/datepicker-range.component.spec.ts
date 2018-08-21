import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDatepickerRange } from './datepicker-range.component';

describe('NgbdDatepickerRange', () => {
  let component: NgbdDatepickerRange;
  let fixture: ComponentFixture<NgbdDatepickerRange>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdDatepickerRange ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDatepickerRange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
