import { Component, OnInit } from '@angular/core';
import { NumeroSessionParticipant } from 'src/app/models/NumeroSessionParticipant';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-page-form-evaluation',
  templateUrl: './page-form-evaluation.component.html',
  styleUrls: ['./page-form-evaluation.component.css']
})
export class PageFormEvaluationComponent implements OnInit {

  mail:string ="";
  listeSessions:NumeroSessionParticipant;
  constructor(
    private httpSessionService: HttpSessionService) { }

  ngOnInit(): void {
  }

  onEvaluation(mail:string){
    this.httpSessionService.findSessionsByMailParticipant(mail)
    .subscribe( reponse => {
      this.listeSessions = reponse;
      console.log(this.listeSessions);
    })
  }
}