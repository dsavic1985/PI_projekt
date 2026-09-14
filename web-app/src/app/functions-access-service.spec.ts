import { TestBed } from '@angular/core/testing';
import { FunctionsAccessService } from './functions-access-service';

describe('FunctionsAccessService', () => {
  let service: FunctionsAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionsAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
