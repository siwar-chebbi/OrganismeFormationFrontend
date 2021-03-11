import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BilanSessionParticipant } from '../models/BilanSessionParticipant';

@Injectable({
  providedIn: 'root'
})
export class HttpEvaluationService {

  constructor(private httpClient:HttpClient) { }

  saveEvaluation(bilan:BilanSessionParticipant) {
    return this.httpClient.put<any>('http://localhost:8080/bilanParticipantSessions/evaluations',bilan);
  }
}
