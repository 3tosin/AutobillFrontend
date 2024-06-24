import { TestBed } from '@angular/core/testing';

import { AutobillDetailsService } from './autobill-details.service';

describe('AutobillDetailsService', () => {
  let service: AutobillDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutobillDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
