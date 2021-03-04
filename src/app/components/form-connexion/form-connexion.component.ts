import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cpuUsage } from 'process';
import { element } from 'protractor';
import { Participant } from 'src/app/models/Participant';
import { ConnexionHttpService } from 'src/app/services/connexion-http.service';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {

  formConnexion: FormGroup;
  connexionHtpp: ConnexionHttpService;
  participant: Participant;
  listeParticipants: Participant[];
  isValid:Boolean=false;  

  constructor(
    private httpConnexion: ConnexionHttpService,
    private formBuilder: FormBuilder) {
    this.formConnexion = this.formBuilder.group({
      identifiant: [""],
      mdp: [""]
    })
   }

  ngOnInit(): void {

    this.httpConnexion.findAll().subscribe(response => 
      this.listeParticipants = response);
  }

  connexion() {
    this.participant = this.formConnexion.value;
    this.listeParticipants.forEach(element => {
      if(this.participant.identifiant == element.identifiant &&  this.participant.mdp == element.mdp ) {
        this.isValid=true;
        this.participant = element;
      }
    });
    if(this.isValid==true){
      console.log("Bienvenu Monsieur " + this.participant.nom);
      localStorage.setItem("connexion", "true");
    }
    else console.log("Echec d'authentification")
  }

  isAuth(){
    return localStorage.getItem("connexion") == "true";
  }

  deconnexion(){
    localStorage.removeItem("connexion")
  }
}
