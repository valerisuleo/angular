import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootabsComponent } from './bootabs.component';

describe('BootabsComponent', () => {
  let component: BootabsComponent;
  let fixture: ComponentFixture<BootabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
