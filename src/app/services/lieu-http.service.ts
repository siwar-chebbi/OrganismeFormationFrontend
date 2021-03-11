import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lieu } from '../models/Lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuHttpService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Lieu[]>("http://localhost:8080/lieux");
  }
}
