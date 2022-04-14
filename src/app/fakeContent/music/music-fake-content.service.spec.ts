import { TestBed } from '@angular/core/testing';

import { MusicFakeContentService } from './music-fake-content.service';

describe('MusicFakeContentService', () => {
  let service: MusicFakeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicFakeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
