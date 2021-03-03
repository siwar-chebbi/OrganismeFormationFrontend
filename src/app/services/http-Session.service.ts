import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from 'url';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class HttpSessionService {

  
  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Session[]>('http://localhost:8080/sessions');
  }
  findAllByFormationId(id:Number){
    return this.httpClient.get<Session[]>(`http://localhost:8080/sessions/formations/${id}`);
  }
  findById(id:number){
    return this.httpClient.get<Session>(`http://localhost:8080/sessions/${id}`);
  }
  findSessionsByMailParticipant(mail: string){
    console.log(mail);
    const params = new HttpParams().append('mail',mail);
    return this.httpClient.get<any>(`http://localhost:8080/sessions/mail?` + params);
  }
  save(session: Session) {
    return this.httpClient.post<Session>('http://localhost:8080/sessions', session);
  }
}