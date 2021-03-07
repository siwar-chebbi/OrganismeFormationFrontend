import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  erreurCnx:Boolean=false;

  constructor(
    private httpConnexion: ConnexionHttpService,
    private formBuilder: FormBuilder,
    private router: Router) {
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
      localStorage.setItem("connexion", "true");
      localStorage.setItem("civilite", this.participant.civilite);
      localStorage.setItem("nom", this.participant.nom);
      this.formConnexion.reset();
      this.router.navigate(['accueil']);
    }
    else {
      this.erreurCnx=true;
    }
  }

  isAuth(){
    return localStorage.getItem("connexion") == "true";
  }

  erreurConnexion(){
    return this.erreurCnx;
  }
}
