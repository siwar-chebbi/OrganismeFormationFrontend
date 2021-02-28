import { Injectable } from '@angular/core';
import { Formation } from '../models/Formation';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpFormationService {

  constructor(private httpClient: HttpClient) { }

  findAllById(id:Number) {
    return this.httpClient.get<Formation[]>(`http://localhost:8080/formations/themes/${id}`);
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:3000/formations/${id}`)
  }

}
