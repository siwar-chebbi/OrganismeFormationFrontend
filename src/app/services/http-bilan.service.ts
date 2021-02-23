import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bilan } from '../models/Bilan';

@Injectable({
  providedIn: 'root'
})
export class HttpBilanService {

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Bilan[]>('http://localhost:8080/bilanParticipantSessions');
  }
}
