import { TestBed } from '@angular/core/testing';

import { GroceService } from './groce.service';

describe('GroceService', () => {
  let service: GroceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
