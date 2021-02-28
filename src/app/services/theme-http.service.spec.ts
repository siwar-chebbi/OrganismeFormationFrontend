import { TestBed } from '@angular/core/testing';

import { ThemeHttpService } from './theme-http.service';

describe('ThemeHttpService', () => {
  let service: ThemeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
