import { TestBed, async, inject } from '@angular/core/testing';

import { SingleMovieResolverGuard } from './single-movie-resolver.guard';

describe('SingleMovieResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleMovieResolverGuard]
    });
  });

  it('should ...', inject([SingleMovieResolverGuard], (guard: SingleMovieResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
