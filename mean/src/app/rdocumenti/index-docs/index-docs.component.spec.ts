import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDocsComponent } from './index-docs.component';

describe('IndexDocsComponent', () => {
  let component: IndexDocsComponent;
  let fixture: ComponentFixture<IndexDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
