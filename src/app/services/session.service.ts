import { Injectable } from '@angular/core';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session:Session = {
    id:1,
    dateDebut: new Date("2021-01-01"),
    datefin:new Date("2021-03-01"),
    duree:15,
    numero:1,
    personnalisee:0,
    prix:350,
    type:0,
    validation:0,
    formationId:1,
    lieuId:1
  };
  constructor() { }
}
