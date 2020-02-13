import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpService ],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
