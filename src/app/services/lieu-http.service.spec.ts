import { TestBed } from '@angular/core/testing';

import { LieuHttpService } from './lieu-http.service';

describe('LieuHttpService', () => {
  let service: LieuHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
