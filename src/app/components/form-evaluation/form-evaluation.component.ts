import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BilanSessionParticipant } from 'src/app/models/BilanSessionParticipant';
import { IdentifiantEvaluation } from 'src/app/models/IdentitfiantEvaluation';
import { HttpEvaluationService } from 'src/app/services/http-evaluation.service';

@Component({
  selector: 'app-form-evaluation',
  templateUrl: './form-evaluation.component.html',
  styleUrls: ['./form-evaluation.component.css']
})
export class FormEvaluationComponent implements OnInit {

  formulaireEvaluation:FormGroup;
  @Input() listNumSession:IdentifiantEvaluation [] = [];
  selectedNumSession: IdentifiantEvaluation;

  constructor(private formulaire:FormBuilder, private evaluationService:HttpEvaluationService, private router:Router) {
    this.formulaireEvaluation = this.formulaire.group({
      session:[],
      accueil: [],
      animation: [],
      contenu: [],
      disponibilite: [],
      environnement: [],
      maitrise: [],
      pedagogie: [],
      prerequis: [],
      recommandation: [],
      reponse: [],
      satisfaction: [],
      souhait: []
    });
  }
  
  ngOnInit(): void {
  }
  
  evaluer() {
    let bilanSessionFormation: BilanSessionParticipant = {
      id: this.formulaireEvaluation.value.session,
      prerequis:this.formulaireEvaluation.value.prerequis,
      accueil:this.formulaireEvaluation.value.accueil,
      environnement:this.formulaireEvaluation.value.environnement,
      contenu:this.formulaireEvaluation.value.contenu,
      pedagogie:this.formulaireEvaluation.value.pedagogie,
      maitrise:this.formulaireEvaluation.value.maitrise,
      disponibilite:this.formulaireEvaluation.value.disponibilite,
      reponse:this.formulaireEvaluation.value.reponse,
      animation:this.formulaireEvaluation.value.animation,
      souhaitFormation:this.formulaireEvaluation.value.souhait,
      recommandation:this.formulaireEvaluation.value.recommandation,
      satisfaction:this.formulaireEvaluation.value.satisfaction,
    }
    
    this.evaluationService.saveEvaluation(bilanSessionFormation).subscribe();
    this.formulaireEvaluation.reset(); 
    alert('Merci de votre évalutation.');
    this.router.navigate(['/accueil'])
  }
}
