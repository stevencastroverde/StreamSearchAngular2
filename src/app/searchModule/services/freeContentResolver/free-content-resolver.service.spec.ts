import { TestBed, inject } from '@angular/core/testing';

import { FreeContentResolverService } from './free-content-resolver.service';

describe('FreeContentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreeContentResolverService]
    });
  });

  it('should ...', inject([FreeContentResolverService], (service: FreeContentResolverService) => {
    expect(service).toBeTruthy();
  }));
});
