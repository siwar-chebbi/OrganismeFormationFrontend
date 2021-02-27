import { TestBed } from '@angular/core/testing';

import { FormationHttpService } from './formation-http.service';

describe('FormationHttpService', () => {
  let service: FormationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
