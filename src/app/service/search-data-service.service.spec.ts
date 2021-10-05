import { TestBed } from '@angular/core/testing';

import { SearchDataServiceService } from './search-data-service.service';

describe('SearchDataServiceService', () => {
  let service: SearchDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
