import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  idSession: number;
  sessionsParticipant: any;
  
  formEvaluation  : FormGroup;
  constructor(
    private httpSessionService: HttpSessionService,
    private fb:FormBuilder) {
    this.formEvaluation = this.fb.group({
      mail: []
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.httpSessionService.findSessionsByMailParticipant(this.formEvaluation.value)
    .subscribe( response => {
      this.sessionsParticipant = response;
      console.log(this.sessionsParticipant);
    })
  }

}
