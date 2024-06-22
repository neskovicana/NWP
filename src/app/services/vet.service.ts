import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, share, throwError } from 'rxjs';

import { Vet } from '../model/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private http: HttpClient) { }

  getVets(): Observable<Vet[]> {
    return this.http.get<Vet[]>('api/vets');
  }

  getVet(code: string): Observable<Vet> {
    return this.http.get<Vet>('/api/vets/' + code);
  }

  getStock(phoneNumber: string): Observable<Vet> {
    return this.http.get<Vet>('/api/vets/' + phoneNumber);
  }

  createVet(vet: Vet): Observable<any> {
    return this.http.post('/api/vets', vet);
  }

  toggleOnDuty(vet: Vet): Observable<Vet> {
    return this.http.put<Vet>('/api/vets/toggleOnDuty', {
      phoneNumber: vet.phoneNumber,
      onDuty: !vet.onDuty
    });
  }

  makeFailingCall() {
    return this.http.get('/api/fail');
  }
}
