import { TestBed } from '@angular/core/testing';

import { FetchmoviesService } from './fetchmovies.service';

describe('FetchmoviesService', () => {
  let service: FetchmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
