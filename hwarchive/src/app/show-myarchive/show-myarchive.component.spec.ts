import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyarchiveComponent } from './show-myarchive.component';

describe('ShowMyarchiveComponent', () => {
  let component: ShowMyarchiveComponent;
  let fixture: ComponentFixture<ShowMyarchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyarchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
