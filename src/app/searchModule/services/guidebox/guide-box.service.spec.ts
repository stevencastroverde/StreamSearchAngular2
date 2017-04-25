import { TestBed, inject } from '@angular/core/testing';

import { GuideBoxService } from './guide-box.service';

describe('GuideBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuideBoxService]
    });
  });

  it('should ...', inject([GuideBoxService], (service: GuideBoxService) => {
    expect(service).toBeTruthy();
  }));
});
