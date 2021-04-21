import { TestBed } from '@angular/core/testing';

import { EngageReporterService } from './engage-reporter.service';

describe('EngageReporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngageReporterService = TestBed.get(EngageReporterService);
    expect(service).toBeTruthy();
  });
});
