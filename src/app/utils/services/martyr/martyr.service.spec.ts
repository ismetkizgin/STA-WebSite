import { TestBed } from '@angular/core/testing';

import { MartyrService } from './martyr.service';

describe('MartyrService', () => {
  let service: MartyrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MartyrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
