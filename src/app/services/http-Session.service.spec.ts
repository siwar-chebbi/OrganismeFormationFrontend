import { TestBed } from '@angular/core/testing';

import { HttpSessionService } from './http-Session.service';

describe('HttpSessionServiceService', () => {
  let service: HttpSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
