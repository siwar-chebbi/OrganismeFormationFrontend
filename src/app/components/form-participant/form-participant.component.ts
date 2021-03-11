import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from 'src/app/models/Participant';
import { Responsable } from 'src/app/models/Responsable';
import { ConnexionHttpService } from 'src/app/services/connexion-http.service';
import { HttpParticipantService } from 'src/app/services/http-participant.service';

@Component({
  selector: 'app-form-participant',
  templateUrl: './form-participant.component.html',
  styleUrls: ['./form-participant.component.css']
})
export class FormParticipantComponent implements OnInit {

  formParticipant: FormGroup;
  participant: Participant;
  listeIdentfiants: String[] = [""]; // Liste de tous les idenfiants contenu dans Participant et Responsable
  listeParticipants: Participant[];
  listeResponsables: Responsable[];
  identifiantDoublon: Boolean= false;

  constructor(
    private httpParticipantService: HttpParticipantService,
    private httpConnexion: ConnexionHttpService,
    private fb: FormBuilder) {
    this.formParticipant = this.fb.group({
      civilite: [],
      dateNaissance: [],
      nom: [""],
      prenom: [""],
      identifiant: [""],
      mdp: [""]
    })
  }

  ngOnInit(): void {
    // Récupération en BDD de tous les participants et responsables
      this.httpConnexion.findAllParticipant().subscribe(response =>  this.listeParticipants = response);
      this.httpConnexion.findAllResponsable().subscribe(response =>  this.listeResponsables = response);
  }

  onSubmit(){
    this.identifiantDoublon=false;
    this.participant = this.formParticipant.value;

    this.constructionListeIdentifiants();

    // Recherche doublon de l'identifiant saisi
    this.listeIdentfiants.forEach(element => {
      if(this.participant.identifiant == element)
      this.identifiantDoublon=true;        
    });
    
    // Si aucun doublon trouvé, on peut enregistrer en BDD
    if(this.identifiantDoublon==false){
      this.httpParticipantService.saveParticulier(this.participant).subscribe();
      this.formParticipant.reset();  
    }
  }

  doublon(){
    return this.identifiantDoublon;
  }

  constructionListeIdentifiants(){
    this.listeParticipants.forEach(element => this.listeIdentfiants.push(element?.identifiant));
    this.listeResponsables.forEach(element => this.listeIdentfiants.push(element?.identifiant));
  }
}
