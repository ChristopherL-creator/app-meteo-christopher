import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MeteoService } from './meteo.service'; 
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MeteoService', () => {
  let service: MeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(MeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
