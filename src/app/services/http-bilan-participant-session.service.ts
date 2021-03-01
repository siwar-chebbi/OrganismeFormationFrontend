import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpBilanParticipantSessionService {

  constructor(private httpClient: HttpClient) { }
  saveParticulier(inscription: any) {
    return this.httpClient.post<any>('http://localhost:8080/bilanParticipantSessions/inscriptionSessionParticulier', inscription);
  }
  
  saveEntreprise(inscription: any) {
    return this.httpClient.post<any>('http://localhost:8080/bilanParticipantSessions/inscriptionSessionEntreprise', inscription);
  }
}