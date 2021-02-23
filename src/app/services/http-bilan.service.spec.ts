import { TestBed } from '@angular/core/testing';

import { HttpBilanService } from './http-bilan.service';

describe('HttpBilanService', () => {
  let service: HttpBilanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBilanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
