import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonNgifComponent } from './lesson-ngif.component';

describe('LessonNgifComponent', () => {
  let component: LessonNgifComponent;
  let fixture: ComponentFixture<LessonNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
