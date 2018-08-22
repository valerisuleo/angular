import { TestBed, inject } from '@angular/core/testing';

import { IndexDocsService } from './index-docs.service';

describe('IndexDocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexDocsService]
    });
  });

  it('should be created', inject([IndexDocsService], (service: IndexDocsService) => {
    expect(service).toBeTruthy();
  }));
});
