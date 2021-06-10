import { TestBed } from '@angular/core/testing';

import { FiboserviceService } from './fiboservice.service';

describe('FiboserviceService', () => {
  let service: FiboserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiboserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
