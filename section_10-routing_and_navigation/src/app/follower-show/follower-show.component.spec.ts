import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerShowComponent } from './follower-show.component';

describe('FollowerShowComponent', () => {
  let component: FollowerShowComponent;
  let fixture: ComponentFixture<FollowerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
