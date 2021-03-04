import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationHttpService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Formation[]>("http://localhost:8080/formations");
  }
  findById(id:number) {
    return this.httpClient.get<Formation[]>(`http://localhost:8080/formations/${id}`);
  }
  create(formation: Formation) {

    return this.httpClient.post<Formation>(`http://localhost:8080/formations`, formation);
  }
  update(formation: Formation) {
    return this.httpClient.put<Formation>(`http://localhost:8080/formations`, formation);
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:8080/formations/${id}`)
  }
}
