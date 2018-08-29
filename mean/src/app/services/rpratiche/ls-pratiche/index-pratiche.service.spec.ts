import { TestBed, inject } from '@angular/core/testing';

import { IndexPraticheService } from './index-pratiche.service';

describe('IndexPraticheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexPraticheService]
    });
  });

  it('should be created', inject([IndexPraticheService], (service: IndexPraticheService) => {
    expect(service).toBeTruthy();
  }));
});
