import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyexComponent } from './zippyex.component';

describe('ZippyexComponent', () => {
  let component: ZippyexComponent;
  let fixture: ComponentFixture<ZippyexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
