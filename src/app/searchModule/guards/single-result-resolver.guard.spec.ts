import { TestBed, async, inject } from '@angular/core/testing';

import { SingleResultResolverGuard } from './single-result-resolver.guard';

describe('SingleResultResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleResultResolverGuard]
    });
  });

  it('should ...', inject([SingleResultResolverGuard], (guard: SingleResultResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
