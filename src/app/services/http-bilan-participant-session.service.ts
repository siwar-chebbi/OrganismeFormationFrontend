import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpBilanParticipantSessionService {

  constructor(private httpClient: HttpClient) { }
  save(inscription: any) {
    return this.httpClient.post<any>('http://localhost:8080/bilanParticipantSessions/inscriptionSessionParticulier', inscription);
  }
}