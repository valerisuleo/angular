import { TestBed, inject } from '@angular/core/testing';

import { MyArchiveService } from './my-archive.service';

describe('MyArchiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyArchiveService]
    });
  });

  it('should be created', inject([MyArchiveService], (service: MyArchiveService) => {
    expect(service).toBeTruthy();
  }));
});
