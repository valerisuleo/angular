import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNavigatorComponent } from './tree-navigator.component';

describe('TreeNavigatorComponent', () => {
  let component: TreeNavigatorComponent;
  let fixture: ComponentFixture<TreeNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
