import { TestBed } from '@angular/core/testing';

import { GameFakeContentService } from './game-fake-content.service';

describe('GameFakeContentService', () => {
  let service: GameFakeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameFakeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
