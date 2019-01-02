import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBirdComponent } from './new-bird.component';

describe('NewBirdComponent', () => {
  let component: NewBirdComponent;
  let fixture: ComponentFixture<NewBirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
