import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { HttpBilanParticipantSessionService } from 'src/app/services/http-bilan-participant-session.service';

@Component({
  selector: 'app-inscription-session',
  templateUrl: './inscription-session.component.html',
  styleUrls: ['./inscription-session.component.css']
})
export class InscriptionSessionComponent implements OnInit {

  @Input() session:Session;
  formInscriptionSession: FormGroup;
  isInscrit: Boolean = false;
  valeurInscription: any;
  valueForm: any;

  constructor(
    private httpBilanService: HttpBilanParticipantSessionService,
    private fb: FormBuilder,
    private route:ActivatedRoute) { 
    this.formInscriptionSession = this.fb.group({
      idParticipant: [1],
      idSession: [this.route.snapshot.params.id],
      coordonneeParticipant: this.fb.group({
        codePostal: [""],
        mail: [""],
        numeroVoie: [""],
        pays: [""],
        telephone: [""],
        typeVoie: [""],
        ville: [""]
      }),
      entreprise: this.fb.group({
        siret:[""],
        nom:[""]
      }),
      coordonneeEntreprise: this.fb.group({
        codePostal: [""],
        mail: [""],
        numeroVoie: [""],
        pays: [""],
        telephone: [""],
        typeVoie: [""],
        ville: [""]
      })
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.valueForm = this.formInscriptionSession.value;
    if(this.valueForm.coordonneeEntreprise == null){
      this.httpBilanService.saveParticulier(this.formInscriptionSession.value).subscribe( reponse => {
        this.valeurInscription = reponse;
      });
      if (this.valeurInscription != null){
        this.isInscrit = true;
      }
    } else{
      this.httpBilanService.saveEntreprise(this.formInscriptionSession.value).subscribe( reponse => {
        this.valeurInscription = reponse;
      });
      if (this.valeurInscription != null){
        this.isInscrit = true;
      }
    }
  }
}
