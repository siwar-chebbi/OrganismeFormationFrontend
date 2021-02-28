import { TestBed } from '@angular/core/testing';

import { HttpBilanParticipantSessionService } from './http-bilan-participant-session.service';

describe('HttpBilanParticipantSessionService', () => {
  let service: HttpBilanParticipantSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBilanParticipantSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
