import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Bilan } from 'src/app/models/Bilan';
import { Session } from 'src/app/models/Session';
import { HttpBilanService } from 'src/app/services/http-bilan.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-form-inscription-bilan',
  templateUrl: './form-inscription-bilan.component.html',
  styleUrls: ['./form-inscription-bilan.component.css']
})
export class FormInscriptionBilanComponent implements OnInit {

  session:Session;
  bilans:Bilan [];
  formInscriptionBilan: FormGroup;
  constructor(
    private sessionService: SessionService,
    private httpBilanService: HttpBilanService,
    private fb: FormBuilder) {
    this.formInscriptionBilan = this.fb.group({
      numeroVoie: [""],
      typeVoie: [""],
      ville: [""],
      codePostal: [""],
      pays: [""],
      mail: [""],
      telephone: [""]
    }) 
    this.session = this.sessionService.session;
  }

  ngOnInit(): void {
    this.httpBilanService.findAll()
    .subscribe(response => this.bilans = response)
    console.log(this.bilans)
  }

  onSubmit(){
    console.log(this.formInscriptionBilan.value)
  }
}
