import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyzyppyComponent } from './myzyppy.component';

describe('MyzyppyComponent', () => {
  let component: MyzyppyComponent;
  let fixture: ComponentFixture<MyzyppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyzyppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyzyppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
