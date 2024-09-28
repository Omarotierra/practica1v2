import { TestBed } from '@angular/core/testing';

import { GeneradorXmlService } from './generador-xml.service';

describe('GeneradorXmlService', () => {
  let service: GeneradorXmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorXmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
