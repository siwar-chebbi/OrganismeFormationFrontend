import { TestBed } from '@angular/core/testing';

import { HttpEvaluationService } from './http-evaluation.service';

describe('HttpEvaluationService', () => {
  let service: HttpEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
