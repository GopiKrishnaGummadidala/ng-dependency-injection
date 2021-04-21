import { TestBed } from '@angular/core/testing';

import { BrowserReporterService } from './browser-reporter.service';

describe('BrowserReporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserReporterService = TestBed.get(BrowserReporterService);
    expect(service).toBeTruthy();
  });
});
