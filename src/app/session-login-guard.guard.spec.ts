import { TestBed, async, inject } from '@angular/core/testing';

import { SessionLoginGuardGuard } from './session-login-guard.guard';

describe('SessionLoginGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionLoginGuardGuard]
    });
  });

  it('should ...', inject([SessionLoginGuardGuard], (guard: SessionLoginGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
