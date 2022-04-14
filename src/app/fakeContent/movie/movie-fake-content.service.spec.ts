import { TestBed } from '@angular/core/testing';

import { MovieFakeContentService } from './movie-fake-content.service';

describe('MovieFakeContentService', () => {
  let service: MovieFakeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieFakeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
