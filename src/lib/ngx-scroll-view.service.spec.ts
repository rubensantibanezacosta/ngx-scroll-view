import { TestBed } from '@angular/core/testing';

import { NgxScrollViewService } from './ngx-scroll-view.service';

describe('NgxScrollViewService', () => {
  let service: NgxScrollViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxScrollViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
