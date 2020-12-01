import { TestBed } from '@angular/core/testing';

import { GmaesService } from './gmaes.service';

describe('GmaesService', () => {
  let service: GmaesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmaesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
