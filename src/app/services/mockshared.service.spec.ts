import { TestBed } from '@angular/core/testing';

import { MocksharedService } from './mockshared.service';

describe('MocksharedService', () => {
  let service: MocksharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocksharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
