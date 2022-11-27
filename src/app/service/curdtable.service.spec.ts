import { TestBed } from '@angular/core/testing';

import { CurdtableService } from './curdtable.service';

describe('CurdtableService', () => {
  let service: CurdtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
