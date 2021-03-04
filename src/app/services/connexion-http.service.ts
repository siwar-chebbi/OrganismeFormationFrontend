import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/Participant';

@Injectable({
  providedIn: 'root'
})
export class ConnexionHttpService {

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Participant[]>('http://localhost:3000/participants');
  }
  
}
