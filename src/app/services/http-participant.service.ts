import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpParticipantService {

  constructor(private httpClient: HttpClient) { }
  saveParticulier(participant: any) {
    return this.httpClient.post<any>('http://localhost:8080/participants', participant);
  }
}
