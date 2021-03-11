import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from 'src/app/models/Participant';
import { Responsable } from 'src/app/models/Responsable';
import { ConnexionHttpService } from 'src/app/services/connexion-http.service';
import { ResponsableHttpService } from 'src/app/services/responsable-http.service';

@Component({
  selector: 'app-form-responsable',
  templateUrl: './form-responsable.component.html',
  styleUrls: ['./form-responsable.component.css']
})
export class FormResponsableComponent implements OnInit {

  formResponsable: FormGroup;
  responsable: Responsable;
  listeIdentfiants: String[] = [""]; // Liste de tous les idenfiants contenu dans Participant et Responsable
  listeParticipants: Participant[];
  listeResponsables: Responsable[];
  identifiantDoublon: Boolean= false;

  constructor(
    private formBuilder: FormBuilder,
    private responsableHttpService: ResponsableHttpService,
    private httpConnexion: ConnexionHttpService
  ) { 
    this.formResponsable = this.formBuilder.group({
      civilite: [],
      nom:[''],
      prenom:[''],
      role:[''],
      mail:[''],
      telephone:[''],
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
    this.responsable = this.formResponsable.value;

    this.constructionListeIdentifiants();

    // Recherche doublon de l'identifiant saisi
    this.listeIdentfiants.forEach(element => {
      if(this.responsable.identifiant == element)
      this.identifiantDoublon=true;        
    });
    
    // Si aucun doublon trouvé, on peut enregistrer en BDD
    if(this.identifiantDoublon==false){
      this.responsableHttpService.create(this.formResponsable.value).subscribe();
      this.formResponsable.reset();
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
