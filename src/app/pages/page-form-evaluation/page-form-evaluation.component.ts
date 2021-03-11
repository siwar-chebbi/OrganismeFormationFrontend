import { Component, OnInit } from '@angular/core';
import { IdentifiantEvaluation } from 'src/app/models/IdentitfiantEvaluation';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-page-form-evaluation',
  templateUrl: './page-form-evaluation.component.html',
  styleUrls: ['./page-form-evaluation.component.css']
})
export class PageFormEvaluationComponent implements OnInit {

  mail:string ="";
  listeSessions:IdentifiantEvaluation;
  constructor(
    private httpSessionService: HttpSessionService) { }

  ngOnInit(): void {
  }

  onEvaluation(mail:string){
    this.httpSessionService.findSessionsByMailParticipant(mail)
    .subscribe( reponse => {
      this.listeSessions = reponse;
    })
  }
}