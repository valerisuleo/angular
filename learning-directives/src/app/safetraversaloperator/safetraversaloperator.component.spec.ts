import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetraversaloperatorComponent } from './safetraversaloperator.component';

describe('SafetraversaloperatorComponent', () => {
  let component: SafetraversaloperatorComponent;
  let fixture: ComponentFixture<SafetraversaloperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetraversaloperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetraversaloperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
