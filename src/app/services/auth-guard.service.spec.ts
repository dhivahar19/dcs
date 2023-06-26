import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('Test: isLoggedin', () => {
    it('should return true if user is logged in', () => {
      localStorage.setItem('isLoggedIn', 'true');
      expect(service.isLoggedIn()).toBeTruthy();
    });
    it('should return false if user is not logged in', () => {
      localStorage.setItem('isLoggedIn', 'false');
      expect(service.isLoggedIn()).toBeFalsy();
    });
	});

});
