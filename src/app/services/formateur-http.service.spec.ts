import { TestBed } from '@angular/core/testing';

import { FormateurHttpService } from './formateur-http.service';

describe('FormateurHttpService', () => {
  let service: FormateurHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateurHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
