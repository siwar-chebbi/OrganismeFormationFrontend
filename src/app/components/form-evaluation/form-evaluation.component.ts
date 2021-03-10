import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { HttpEvaluationService } from 'src/app/services/http-evaluation.service';

@Component({
  selector: 'app-form-evaluation',
  templateUrl: './form-evaluation.component.html',
  styleUrls: ['./form-evaluation.component.css']
})
export class FormEvaluationComponent implements OnInit {

  formulaireEvaluation:FormGroup;
  @Input() listNumSession:string [] = [];
  EvalSessions: SelectItem[];
  selectedEvalSession: string;

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
    });
    

  }
  
  ngOnInit(): void {
  }
  
  evaluer() {
    console.log(this.formulaireEvaluation.value);
  }
}
