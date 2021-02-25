import { TestBed } from '@angular/core/testing';

import { DomaineHttpService } from './domaine-http.service';

describe('DomaineHttpService', () => {
  let service: DomaineHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaineHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
