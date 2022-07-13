import { TestBed } from '@angular/core/testing';

import { CustomThemeService } from './custom-theme.service';

describe('StyleManagerService', () => {
  let service: CustomThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
