import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataNavigatorComponent } from './metadata-navigator.component';

describe('MetadataNavigatorComponent', () => {
  let component: MetadataNavigatorComponent;
  let fixture: ComponentFixture<MetadataNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
