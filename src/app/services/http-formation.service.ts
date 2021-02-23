import { Injectable } from '@angular/core';
import { Formation } from '../models/Formation';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpFormationService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Formation[]>("http://localhost:3000/formations");
  }
  findById(id:number) {
    return this.httpClient.get<Formation[]>(`http://localhost:3000/formations/${id}`);
  }
  create(formation: Formation) {
    return this.httpClient.post<Formation>(`http://localhost:3000/formations`, formation);
  }
  update(formation: Formation) {
    return this.httpClient.put<Formation>(`http://localhost:3000/formations`, formation);
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:3000/formations/${id}`)
  }

}
