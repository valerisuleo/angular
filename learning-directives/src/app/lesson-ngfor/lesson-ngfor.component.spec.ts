import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonNgforComponent } from './lesson-ngfor.component';

describe('LessonNgforComponent', () => {
  let component: LessonNgforComponent;
  let fixture: ComponentFixture<LessonNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
