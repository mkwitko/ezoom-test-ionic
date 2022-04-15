import { TestBed } from '@angular/core/testing';

import { CrudUsageService } from './crud-usage.service';

describe('CrudUsageService', () => {
  let service: CrudUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
