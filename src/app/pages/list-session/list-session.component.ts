import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/session';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {

  sessions :Session [] = [];
  
  constructor(private httpSession:HttpSessionService) { }

  ngOnInit(): void {
    this.httpSession.findAll().subscribe(sessions => {
      this.sessions = sessions
    });
  }

}
