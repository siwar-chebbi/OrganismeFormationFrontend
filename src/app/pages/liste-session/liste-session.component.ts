import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-liste-session',
  templateUrl: './liste-session.component.html',
  styleUrls: ['./liste-session.component.css']
})
export class ListeSessionComponent implements OnInit {

  sessions :Session [] = [];
  
  constructor(private httpSession:HttpSessionService) { }

  ngOnInit(): void {
    this.httpSession.findAll().subscribe(sessions => {
      this.sessions = sessions
    });
  }

}
