import { TestBed } from '@angular/core/testing';

import { AuthErrorsMessagesService } from './auth-errors-messages.service';

describe('AuthErrorsMessagesService', () => {
  let service: AuthErrorsMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthErrorsMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
