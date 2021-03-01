import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurHttpService } from 'src/app/services/formateur-http.service';
import { HttpSessionService } from 'src/app/services/http-Session.service';

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
      note: [null],
      blame: [null],
      experience: [null] // experience ne fonctionne pas pour l'instant
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.formateur = this.formFormateur.value;
    this.httpFormateur.save(this.formFormateur.value).subscribe( ()=> {
      console.log(this.formFormateur.value)
    });
  }
}
