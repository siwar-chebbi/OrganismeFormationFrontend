import { TestBed } from '@angular/core/testing';

import { ResponsableHttpServiceService } from './responsable-http-service.service';

describe('ResponsableHttpServiceService', () => {
  let service: ResponsableHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
