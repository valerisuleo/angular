import { TestBed, inject } from '@angular/core/testing';

import { InitDocsService } from './init-docs.service';

describe('InitDocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitDocsService]
    });
  });

  it('should be created', inject([InitDocsService], (service: InitDocsService) => {
    expect(service).toBeTruthy();
  }));
});
