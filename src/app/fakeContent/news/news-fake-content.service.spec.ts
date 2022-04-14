import { TestBed } from '@angular/core/testing';

import { NewsFakeContentService } from './news-fake-content.service';

describe('NewsFakeContentService', () => {
  let service: NewsFakeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFakeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
