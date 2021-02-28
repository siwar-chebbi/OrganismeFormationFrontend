import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-form-formation',
  templateUrl: './form-formation.component.html',
  styleUrls: ['./form-formation.component.css']
})
export class FormFormationComponent implements OnInit {

  formFormation: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formationHttpService: FormationHttpService
  ) { 
    this.formFormation = this.formBuilder.group({
      numero:[''],
      titre:[''],
      contenu:[''],
      logiciel:[''],
      support:[''],
      idTheme:[],
      idResponsable:[]
    })
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.formationHttpService
     .create(this.formFormation.value)
     .subscribe();
    this.formFormation.reset();
  }

}
