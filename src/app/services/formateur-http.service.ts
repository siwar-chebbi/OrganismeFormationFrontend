import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurHttpService {

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Formateur[]>('http://localhost:8080/formateurs');
  }
  findById(id:number){
    return this.httpClient.get<Formateur>(`http://localhost:8080/formateurs/${id}`);
  }
  save(formateur: Formateur) {
    return this.httpClient.post<Formateur>('http://localhost:8080/formateurs', formateur);
  }
  update(formateur:Formateur){
    return this.httpClient.put<Formateur>(`http://localhost:8080/formateurs`, formateur);
  }
  delete(id:number){
    return this.httpClient.delete(`http://localhost:8080/formateurs/${id}`);
  }
}
