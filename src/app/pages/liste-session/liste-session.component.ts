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

  idFormation:number;
  sessions:Session [] = [];
  
  constructor(
    private route:ActivatedRoute,
    private httpSession:HttpSessionService) { 
      this.idFormation = this.route.snapshot.params.idFormation;
  }

  ngOnInit(): void {
    this.httpSession.findAllByFormationId(this.idFormation).subscribe(sessions => {
      this.sessions = sessions
    });
  }

}
