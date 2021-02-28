import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class HttpSessionService {

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Session[]>('http://localhost:8080/sessions');
  }
  findById(id:number){
    return this.httpClient.get<Session>(`http://localhost:3000/sessions/${id}`);
  }
  save(session: Session) {
    return this.httpClient.post<Session>('http://localhost:8080/sessions', session);
  }
}