import { TestBed } from '@angular/core/testing';

import { HttpParticipantService } from './http-participant.service';

describe('HttpParticipantService', () => {
  let service: HttpParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
