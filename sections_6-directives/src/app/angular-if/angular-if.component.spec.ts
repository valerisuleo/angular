import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIfComponent } from './angular-if.component';

describe('AngularIfComponent', () => {
  let component: AngularIfComponent;
  let fixture: ComponentFixture<AngularIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
