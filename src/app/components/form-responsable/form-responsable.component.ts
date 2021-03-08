import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponsableHttpService } from 'src/app/services/responsable-http.service';

@Component({
  selector: 'app-form-responsable',
  templateUrl: './form-responsable.component.html',
  styleUrls: ['./form-responsable.component.css']
})
export class FormResponsableComponent implements OnInit {

  formResponsable: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private responsableHttpService: ResponsableHttpService,
  ) { 
    this.formResponsable = this.formBuilder.group({
      civilite: [],
      nom:[''],
      prenom:[''],
      role:[''],
      mail:[''],
      telephone:[''],

    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.responsableHttpService
     .create(this.formResponsable.value)
     .subscribe();
    this.formResponsable.reset();
  }

}
