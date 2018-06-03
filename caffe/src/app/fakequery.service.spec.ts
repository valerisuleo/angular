import { TestBed, inject } from '@angular/core/testing';

import { FakequeryService } from './fakequery.service';

describe('FakequeryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakequeryService]
    });
  });

  it('should be created', inject([FakequeryService], (service: FakequeryService) => {
    expect(service).toBeTruthy();
  }));
});
