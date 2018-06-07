import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcontentComponent } from './angularcontent.component';

describe('AngularcontentComponent', () => {
  let component: AngularcontentComponent;
  let fixture: ComponentFixture<AngularcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
