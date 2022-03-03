import { TestBed } from '@angular/core/testing';

import { HttpDataRequestService } from './http-data-request.service';

describe('HttpDataRequestService', () => {
  let service: HttpDataRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDataRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
