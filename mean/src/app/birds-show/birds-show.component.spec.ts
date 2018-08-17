import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsShowComponent } from './birds-show.component';

describe('BirdsShowComponent', () => {
  let component: BirdsShowComponent;
  let fixture: ComponentFixture<BirdsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
