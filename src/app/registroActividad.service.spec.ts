import { TestBed } from '@angular/core/testing';

import { RegistroAjusteService } from './registroAjuste.service';

describe('RegistrarActividadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroAjusteService = TestBed.get(RegistroAjusteService);
    expect(service).toBeTruthy();
  });
});
