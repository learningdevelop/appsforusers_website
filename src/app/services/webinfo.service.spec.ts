import { TestBed, inject } from '@angular/core/testing';

import { WebinfoService } from './webinfo.service';

describe('WebinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebinfoService]
    });
  });

  it('should be created', inject([WebinfoService], (service: WebinfoService) => {
    expect(service).toBeTruthy();
  }));
});
