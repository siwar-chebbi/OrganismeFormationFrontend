import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-liste-session',
  templateUrl: './liste-session.component.html',
  styleUrls: ['./liste-session.component.css']
})
export class ListeSessionComponent implements OnInit {

  idFormation:number = 0;
  sessions :Session [] = [];
  
  constructor(
    private route:ActivatedRoute,
    private httpSession:HttpSessionService) { 
      this.idFormation = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.httpSession.findAllByFormationId(this.idFormation).subscribe(sessions => {
      this.sessions = sessions
    });
  }

}
