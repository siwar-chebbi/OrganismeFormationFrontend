import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Session } from 'src/app/models/Session';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-page-liste-session',
  templateUrl: './page-liste-session.component.html',
  styleUrls: ['./page-liste-session.component.css']
})
export class PageListeSessionComponent implements OnInit {

  idFormation:number;
  sessions:Session [] = [];
  formation:Formation;
  
  constructor(
    private route:ActivatedRoute,
    private httpSession:HttpSessionService,
    private httpFormation:FormationHttpService) { 
      this.idFormation = this.route.snapshot.params.idFormation;
  }

  ngOnInit(): void {
    this.httpSession.findAllByFormationId(this.idFormation).subscribe(sessions => {
      this.sessions = sessions
      this.httpFormation.findById(this.idFormation).subscribe(formation => {
        this.formation = formation
      })
    });
  }

}
