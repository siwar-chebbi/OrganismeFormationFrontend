import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEvaluationService } from 'src/app/services/http-evaluation.service';

@Component({
  selector: 'app-form-evaluation',
  templateUrl: './form-evaluation.component.html',
  styleUrls: ['./form-evaluation.component.css']
})
export class FormEvaluationComponent implements OnInit {

  formulaireEvaluation:FormGroup;
  listNumSession:any [] = [];
  numero:String;

  constructor(private formulaire:FormBuilder, private evaluationService:HttpEvaluationService) {
    this.formulaireEvaluation = this.formulaire.group({
      listeNumSession:[],
      accueil: [],
      annimation: [],
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
    }) 
    this.listNumSession = [
      {numero:'12'},
      {numero:'122'},
      {numero:'41'},
      {numero:'48'},
      {numero:'2132'}
    ]
  }

  ngOnInit(): void {
  }

  evaluer() {
    console.log(this.formulaireEvaluation.value);
  }
}
