import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { HttpBilanParticipantSessionService } from 'src/app/services/http-bilan-participant-session.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-inscription-session',
  templateUrl: './inscription-session.component.html',
  styleUrls: ['./inscription-session.component.css'],
  providers: [MessageService]
})
export class InscriptionSessionComponent implements OnInit {

  @Input() session: Session;
  formInscriptionSession: FormGroup;
  isInscrit: Boolean = false;
  valeurInscription: any;
  valueForm: any;


  constructor(
    private httpBilanService: HttpBilanParticipantSessionService,
    private messageService : MessageService,
    private primengConfig: PrimeNGConfig,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.formInscriptionSession = this.fb.group({
      idParticipant: [localStorage.getItem("idParticipant")],
      idSession: [this.route.snapshot.params.id],
      coordonneeParticipant: this.fb.group({
        codePostal: ["", Validators.required],
        mail: ["", Validators.required],
        numeroVoie: ["", Validators.required],
        pays: ["", Validators.required],
        telephone: ["", Validators.required],
        typeVoie: ["", Validators.required],
        ville: ["", Validators.required]
      }),
      entreprise: this.fb.group({
        siret: [""],
        nom: [""]
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
    this.primengConfig.ripple = true;
  }

  onSubmit(event: boolean) {
    if (event) {
      this.valueForm = this.formInscriptionSession.value;
      if (this.valueForm.entreprise.siret === "" && this.valueForm.entreprise.nom === "") {
        this.httpBilanService.saveParticulier(this.formInscriptionSession.value).subscribe(reponse => {
          this.valeurInscription = reponse;
          if(this.valeurInscription.existeDeja){
            this.showWarn()
          }else{
            this.showSuccess()
          }
        });
        if (this.valeurInscription != null ) {
          if(this.valeurInscription.existeDeja){
            this.isInscrit=false
          }else {
            this.isInscrit = true;
          }
         
        }
      } else {
        this.httpBilanService.saveEntreprise(this.formInscriptionSession.value).subscribe(reponse => {
          this.valeurInscription = reponse;
          if(this.valeurInscription.existeDeja){
            this.showWarn()
          }else{
            this.showSuccess()
          }
        });
        if (this.valeurInscription != null) {
          if(this.valeurInscription.existeDeja){
            this.isInscrit=false
          }else {
            this.isInscrit = true;
          }
        }
      }
      
    }else {
      this.showError()
    }

  }

onReject() {
    this.messageService.clear('c');
}

clear() {
    this.messageService.clear();
}

showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Bravo, vous avez réussi votre test. Votre inscription est accepté'});
}


showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Veuillez réessayer le test pour être admis'});
}

showWarn() {
  this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Vous êtes déjà inscrit'});
}

}
