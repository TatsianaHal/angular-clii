import { TestBed } from '@angular/core/testing';

import { NewInterceptorService } from './new-interceptor.service';

describe('NewInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewInterceptorService = TestBed.get(NewInterceptorService);
    expect(service).toBeTruthy();
  });
});
