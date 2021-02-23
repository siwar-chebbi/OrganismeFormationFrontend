import { Injectable } from '@angular/core';
import { Lieu } from '../models/lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  lieu:Lieu = {
    id: 1,
    nom: "Ib Lille",
    salle: "5",
    disponibilite: 1
  }
  constructor() { }
}
