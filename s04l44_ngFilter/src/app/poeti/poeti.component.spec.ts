import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetiComponent } from './poeti.component';

describe('PoetiComponent', () => {
  let component: PoetiComponent;
  let fixture: ComponentFixture<PoetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
