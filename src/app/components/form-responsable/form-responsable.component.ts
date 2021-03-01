import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponsableHttpServiceService } from 'src/app/services/responsable-http-service.service';

@Component({
  selector: 'app-form-responsable',
  templateUrl: './form-responsable.component.html',
  styleUrls: ['./form-responsable.component.css']
})
export class FormResponsableComponent implements OnInit {

  formResponsable: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private responsableHttpServiceService: ResponsableHttpServiceService,
  ) { 
    this.formResponsable = this.formBuilder.group({
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
    this.responsableHttpServiceService
     .create(this.formResponsable.value)
     .subscribe();
    this.formResponsable.reset();
  }

}
