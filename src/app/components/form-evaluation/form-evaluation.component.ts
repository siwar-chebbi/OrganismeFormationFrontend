import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEvaluationService } from 'src/app/services/http-evaluation.service';

@Component({
  selector: 'app-form-evaluation',
  templateUrl: './form-evaluation.component.html',
  styleUrls: ['./form-evaluation.component.css']
})
export class FormEvaluationComponent implements OnInit {

  formulaireEvaluation:FormGroup;

  constructor(private formulaire:FormBuilder, private evaluationService:HttpEvaluationService) {
    this.formulaireEvaluation = this.formulaire.group({
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
  }

  ngOnInit(): void {
  }

  evaluer() {

  }
}
