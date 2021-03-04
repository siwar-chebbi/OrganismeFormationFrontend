import { TestBed } from '@angular/core/testing';

import { ConnexionHttpService } from './connexion-http.service';

describe('ConnexionHttpService', () => {
  let service: ConnexionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
