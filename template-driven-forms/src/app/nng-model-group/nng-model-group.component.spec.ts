import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NngModelGroupComponent } from './nng-model-group.component';

describe('NngModelGroupComponent', () => {
  let component: NngModelGroupComponent;
  let fixture: ComponentFixture<NngModelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NngModelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NngModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
