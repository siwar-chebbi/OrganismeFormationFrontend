import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Participant } from 'src/app/models/Participant';
import { Responsable } from 'src/app/models/Responsable';
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
  isParticipant:Boolean=false;
  responsable: Responsable;
  listeResponsables: Responsable[];
  isResponsable:Boolean=false;
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
    this.httpConnexion.findAllParticipant().subscribe(response => 
      this.listeParticipants = response);
    this.httpConnexion.findAllResponsable().subscribe(response => 
      this.listeResponsables = response);
  }

  connexion() {
    this.participant = this.formConnexion.value;
    this.listeParticipants.filter(element => this.participant.identifiant == element.identifiant &&  this.participant.mdp == element.mdp )
    .map(e=>{
      this.isParticipant=true;
      this.participant = e;
    });
    if(this.isParticipant==false){
      this.responsable = this.formConnexion.value;
      this.listeResponsables.forEach(element => {
        if(this.responsable.identifiant == element.identifiant &&  this.responsable.mdp == element.mdp ) {
          this.isResponsable=true;
          this.responsable = element;
        }
      });
    }
    if(this.isParticipant==true){
      localStorage.setItem("connexion", "true");
      localStorage.setItem("idParticipant", this.participant.id.toString());
      localStorage.setItem("civilite", this.participant.civilite? 'Monsieur' : 'Madame');
      localStorage.setItem("nom", this.participant.nom);
      localStorage.setItem("prenom", this.participant.prenom);
      this.formConnexion.reset();
      this.router.navigate(['accueil']);
      window.location.reload();
    } else if (this.isResponsable==true){
      localStorage.setItem("connexion", "true");
      localStorage.setItem("idResponsable", this.responsable.id.toString());
      localStorage.setItem("civilite", this.responsable.civilite? 'Monsieur' : 'Madame');
      localStorage.setItem("nom", this.responsable.nom);
      localStorage.setItem("prenom", this.responsable.prenom);
      this.formConnexion.reset();
      this.router.navigate(['accueil']);
      window.location.reload();
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
