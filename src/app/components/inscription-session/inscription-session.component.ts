import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpBilanParticipantSessionService } from 'src/app/services/http-bilan-participant-session.service';

@Component({
  selector: 'app-inscription-session',
  templateUrl: './inscription-session.component.html',
  styleUrls: ['./inscription-session.component.css']
})
export class InscriptionSessionComponent implements OnInit {

  formInscriptionSession: FormGroup;
  constructor(
    private httpBilanService: HttpBilanParticipantSessionService,
    private fb: FormBuilder) { 
    this.formInscriptionSession = this.fb.group({
      idParticipant: [],
      idSession: [],
      coordonnee: this.fb.group({
        codePostal: [""],
        mail: [""],
        numeroVoie: [""],
        pays: [""],
        telephone: [""],
        typeVoie: [""],
        ville: [""]
      })
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.httpBilanService.save(this.formInscriptionSession.value).subscribe( ()=> {
      console.log(this.formInscriptionSession.value)
    });
  }
}
