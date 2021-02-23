import { TestBed } from '@angular/core/testing';

import { HttpFormationService } from './http-formation.service';

describe('HttpFormationService', () => {
  let service: HttpFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
