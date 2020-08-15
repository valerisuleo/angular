import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutShowComponent } from './donut-show.component';

describe('DonutShowComponent', () => {
  let component: DonutShowComponent;
  let fixture: ComponentFixture<DonutShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
