import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/Participant';
import { Responsable } from '../models/Responsable';

@Injectable({
  providedIn: 'root'
})
export class ConnexionHttpService {

  constructor(private httpClient: HttpClient) { }

  findAllParticipant(){
    return this.httpClient.get<Participant[]>('http://localhost:8080/participants');
  }

  findAllResponsable(){
    return this.httpClient.get<Responsable[]>('http://localhost:8080/responsable');
  }
  
}
