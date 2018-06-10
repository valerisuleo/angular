import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonNgForTrackbyComponent } from './lesson-ng-for-trackby.component';

describe('LessonNgForTrackbyComponent', () => {
  let component: LessonNgForTrackbyComponent;
  let fixture: ComponentFixture<LessonNgForTrackbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonNgForTrackbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonNgForTrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
