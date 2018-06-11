import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApesComponent } from './apes.component';

describe('ApesComponent', () => {
  let component: ApesComponent;
  let fixture: ComponentFixture<ApesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
