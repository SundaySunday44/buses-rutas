import { TestBed } from '@angular/core/testing';

import { ServicioFondoService } from './servicio-fondo.service';

describe('ServicioFondoService', () => {
  let service: ServicioFondoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFondoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
