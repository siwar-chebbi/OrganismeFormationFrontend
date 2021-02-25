import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domaine } from '../models/Domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineHttpService {

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Domaine[]>('http://localhost:3000/domaines') 
  }

  findById(id:number){
    return this.httpClient.get<Domaine>(`http://localhost:3000/domaines/${id}`) 
  }

  save(domaine:Domaine){
    return this.httpClient.post<Domaine>(`http://localhost:3000/domaines`, domaine);
  }

  update(domaine:Domaine){
    return this.httpClient.put<Domaine>(`http://localhost:3000/domaines`, domaine);
  }

  delete(id:number){
    return this.httpClient.delete(`http://localhost:3000/domaines/${id}`);
  }
}
