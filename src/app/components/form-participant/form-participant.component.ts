import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpParticipantService } from 'src/app/services/http-participant.service';

@Component({
  selector: 'app-form-participant',
  templateUrl: './form-participant.component.html',
  styleUrls: ['./form-participant.component.css']
})
export class FormParticipantComponent implements OnInit {

  formParticipant: FormGroup;
  constructor(
    private httpParticipantService: HttpParticipantService,
    private fb: FormBuilder) {
    this.formParticipant = this.fb.group({
      civilite: [],
      dateNaissance: [],
      nom: [""],
      prenom: [""]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formParticipant.value);
      this.httpParticipantService.saveParticulier(this.formParticipant.value).subscribe( ()=> {
        console.log(this.formParticipant.value)
      });
  
  }
}
