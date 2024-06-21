import { TestBed } from '@angular/core/testing';

import { WorldDialogService } from './world-dialog.service';

describe('WorldDialogService', () => {
  let service: WorldDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
