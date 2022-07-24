import { TestBed } from '@angular/core/testing';

import { NetworsService } from './networs.service';

describe('NetworsService', () => {
  let service: NetworsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
