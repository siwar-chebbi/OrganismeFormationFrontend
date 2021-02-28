import { Injectable } from '@angular/core';
import { Lieu } from '../models/Lieu';

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
