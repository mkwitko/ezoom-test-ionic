import { TestBed } from '@angular/core/testing';

import { FirebaseErrorTranslationService } from './firebase-error-translation.service';

describe('FirebaseErrorTranslationService', () => {
  let service: FirebaseErrorTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseErrorTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
