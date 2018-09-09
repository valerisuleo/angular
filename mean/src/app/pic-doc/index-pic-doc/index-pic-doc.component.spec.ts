import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPicDocComponent } from './index-pic-doc.component';

describe('IndexPicDocComponent', () => {
  let component: IndexPicDocComponent;
  let fixture: ComponentFixture<IndexPicDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPicDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPicDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
