import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenPropertyComponent } from './hidden-property.component';

describe('HiddenPropertyComponent', () => {
  let component: HiddenPropertyComponent;
  let fixture: ComponentFixture<HiddenPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
