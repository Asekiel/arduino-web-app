import { TestBed } from '@angular/core/testing';

import { RoverNotificationsService } from './rover-notifications.service';

describe('RoverNotificationsService', () => {
  let service: RoverNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoverNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
