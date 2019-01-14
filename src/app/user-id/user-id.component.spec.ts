import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdComponent } from './user-id.component';
import { TestingService } from '../testing.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { HttpClientModule } from '@angular/common/http';

describe('UserIdComponent', () => {
  let testingService: TestingService;
  let component: UserIdComponent;
  let fixture: ComponentFixture<UserIdComponent>;
  let spy: jasmine.Spy;
  let mockUser;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ UserIdComponent ],
      providers: [TestingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIdComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(TestingService);
    mockUser = {name: 'Tanya'};
    spy = spyOn(testingService, 'getOne').and.returnValue(Observable.of(mockUser));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // тестирование компонента:
  it('should call T estingService', () => {
    component.someMethod();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set user', () => {
    component.someMethod();
    expect(component.user.name).toEqual(mockUser);
  });
});
