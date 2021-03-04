import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evaluation } from '../models/Evaluation';

@Injectable({
  providedIn: 'root'
})
export class HttpEvaluationService {

  constructor(private httpClient:HttpClient) { }

  saveEvaluation(evaluation:Evaluation) {
    return this.httpClient.post<any>('http://localhost:8080/evaluation',evaluation);
  }
}
