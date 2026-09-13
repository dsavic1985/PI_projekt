import { TestBed } from '@angular/core/testing';
import { FirebaseAppInitService } from './firebase-app-init-service';

describe('FirebaseAppInitService', () => {
  let service: FirebaseAppInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAppInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
