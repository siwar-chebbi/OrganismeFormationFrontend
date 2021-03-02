import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  mail: string;
  idSession: number;
  idParticipant: number;
  
  formEvaluation  : FormGroup;
  constructor(
    private httpSessionService: HttpSessionService,
    private fb:FormBuilder) {
    this.formEvaluation = this.fb.group({
      mail: [this.idSession]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(pMail: string){
    this.mail = pMail;
    this.httpSessionService.findSessionsByMailParticipant(this.mail)
      .subscribe( response => {
      this.idSession = response;
    })
  }

}
