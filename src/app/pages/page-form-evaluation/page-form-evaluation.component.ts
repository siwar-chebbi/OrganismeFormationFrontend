import { Component, OnInit } from '@angular/core';
import { IdentifiantEvaluation } from 'src/app/models/IdentitfiantEvaluation';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-page-form-evaluation',
  templateUrl: './page-form-evaluation.component.html',
  styleUrls: ['./page-form-evaluation.component.css']
})
export class PageFormEvaluationComponent implements OnInit {
  id: number;
  mail:string ="";
  listeSessions:IdentifiantEvaluation;
  constructor(
    private httpSessionService: HttpSessionService) { }

  ngOnInit(): void {
    this.id = +localStorage.getItem("idParticipant");
    this.httpSessionService.findSessionsByParticipantId(this.id)
    .subscribe( reponse => {
      this.listeSessions = reponse;
      console.log(reponse)
    })
  }

  onEvaluation(){
  }
}