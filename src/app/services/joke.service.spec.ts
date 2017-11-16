import { TestBed, inject } from '@angular/core/testing';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeService]
    });
  });

  it('should be created', inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
  }));
});
