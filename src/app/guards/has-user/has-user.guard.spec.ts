import { MockUserService } from './../../components/user/user.component.spec';
import { TestBed, inject } from '@angular/core/testing';

import { HasUserGuard } from './has-user.guard';
import { UserService } from '../../services/user/user.service';

describe('HasUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useClass: MockUserService}
      ]
    });
  });

  it('should ...', inject([HasUserGuard], (guard: HasUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
