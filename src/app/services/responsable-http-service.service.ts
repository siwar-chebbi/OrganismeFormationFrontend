import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsable } from '../models/Responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableHttpServiceService {


  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Responsable[]>("http://localhost:8080/formations");
  }
  findById(id:number) {
    return this.httpClient.get<Responsable[]>(`http://localhost:8080/formations/${id}`);
  }
  create(responsable: Responsable) {
    return this.httpClient.post<Responsable>(`http://localhost:8080/formations`, responsable);
  }
  update(responsable: Responsable) {
    return this.httpClient.put<Responsable>(`http://localhost:8080/formations`, responsable);
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:8080/formations/${id}`)
  }
}