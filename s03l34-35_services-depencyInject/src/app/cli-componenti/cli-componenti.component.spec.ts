import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliComponentiComponent } from './cli-componenti.component';

describe('CliComponentiComponent', () => {
  let component: CliComponentiComponent;
  let fixture: ComponentFixture<CliComponentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliComponentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliComponentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
