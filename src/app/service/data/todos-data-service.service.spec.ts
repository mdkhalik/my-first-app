import { TestBed } from '@angular/core/testing';

import { TodosDataServiceService } from './todos-data-service.service';

describe('TodosDataServiceService', () => {
  let service: TodosDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
