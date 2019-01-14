import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestingService } from './testing.service';

describe('TestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ TestingService ]
  }));

  it('should be created', () => {
    const service: TestingService = TestBed.get(TestingService);
    expect(service).toBeTruthy();
  });

  // тестирование sum(a, b):
  it('should return sum(a, b)', () => {
    const service: TestingService = TestBed.get(TestingService);
    expect(service.sum(1, 2)).toBe(3);
  });

  // тестирование http:
  it('should return one user', inject([TestingService, HttpTestingController],
    (service: TestingService, backend: HttpTestingController) => {
    expect(service).toBeTruthy();

    const mockUser = { name: 'Tanya' };

    service.getOne(1).subscribe( user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users/1',
    }).flush(mockUser);
  }));

  it('should return all users', inject([TestingService, HttpTestingController],
    (service: TestingService, backend: HttpTestingController) => {
    expect(service).toBeTruthy();

    const mockUsers = [{ name: 'Tanya' }];

    service.getAll().subscribe( users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users',
    }).flush(mockUsers);
  }));

});
