import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NngFormComponent } from './nng-form.component';

describe('NngFormComponent', () => {
  let component: NngFormComponent;
  let fixture: ComponentFixture<NngFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NngFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
