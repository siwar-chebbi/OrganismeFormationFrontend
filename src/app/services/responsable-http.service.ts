import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsable } from '../models/Responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableHttpService {


  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Responsable[]>("http://localhost:8080/responsable");
  }
  findById(id:number) {
    return this.httpClient.get<Responsable[]>(`http://localhost:8080/responsable/${id}`);
  }
  create(responsable: Responsable) {
    return this.httpClient.post<Responsable>(`http://localhost:8080/responsable`, responsable);
  }
  update(responsable: Responsable) {
    return this.httpClient.put<Responsable>(`http://localhost:8080/responsable`, responsable);
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:8080/responsable/${id}`)
  }
}