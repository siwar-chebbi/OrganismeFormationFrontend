import { Injectable } from '@angular/core';
import { Bilan } from '../models/Bilan';

@Injectable({
  providedIn: 'root'
})
export class BilanService {

  bilan:Bilan = {
    id: 1,
    absence: 5,
    numeroSessionEval: 1,
    prerequis: 0,
    accueil: 5,
    environnement: 6,
    contenu: 7,
    pedagogie: 4,
    maitrise: 3,
    disponibilite: 2,
    reponse: 1,
    animation: 9,
    souhaitFormation: 0,
    recommandation: 0,
    satisfaction: 0,
    // participant:
  }
  constructor() { }
}
