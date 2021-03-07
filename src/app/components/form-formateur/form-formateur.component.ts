import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurHttpService } from 'src/app/services/formateur-http.service';

@Component({
  selector: 'app-form-formateur',
  templateUrl: './form-formateur.component.html',
  styleUrls: ['./form-formateur.component.css']
})
export class FormFormateurComponent implements OnInit {

  formateur: Formateur;
  formFormateur: FormGroup;

  constructor(
    private httpFormateur: FormateurHttpService,
    private formbuilder: FormBuilder) {
    this.formFormateur = this.formbuilder.group({
      nom: [""],
      prenom: [""],
      mail: [""],
      note: [null],  // Lors de la création d'un formateur, on ne renseigne ni sa note
      blame: [null], // ni ses blames
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.formateur = this.formFormateur.value;
    this.httpFormateur
    .save(this.formFormateur.value)
    .subscribe();
    this.formFormateur.reset();
  }
}
