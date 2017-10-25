import { TestBed, inject } from '@angular/core/testing';

import { PostalPlaceService } from './postal-place.service';

describe('PostalPlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostalPlaceService]
    });
  });

  it('should be created', inject([PostalPlaceService], (service: PostalPlaceService) => {
    expect(service).toBeTruthy();
  }));
});
