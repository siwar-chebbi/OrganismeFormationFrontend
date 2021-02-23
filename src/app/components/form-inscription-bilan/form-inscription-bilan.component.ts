import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-inscription-bilan',
  templateUrl: './form-inscription-bilan.component.html',
  styleUrls: ['./form-inscription-bilan.component.css']
})
export class FormInscriptionBilanComponent implements OnInit {

  formInscriptionBilan: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formInscriptionBilan = this.fb.group({
      numeroVoie: [""],
      typeVoie: [""],
      ville: [""],
      codePostal: [""],
      pays: [""],
      mail: [""],
      telephone: [""]
    }) 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formInscriptionBilan.value)
  }
}
