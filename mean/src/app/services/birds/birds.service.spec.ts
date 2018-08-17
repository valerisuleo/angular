import { TestBed, inject } from '@angular/core/testing';

import { BirdsService } from './birds.service';

describe('BirdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirdsService]
    });
  });

  it('should be created', inject([BirdsService], (service: BirdsService) => {
    expect(service).toBeTruthy();
  }));
});
