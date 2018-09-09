import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPicDocComponent } from './show-pic-doc.component';

describe('ShowPicDocComponent', () => {
  let component: ShowPicDocComponent;
  let fixture: ComponentFixture<ShowPicDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPicDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPicDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
