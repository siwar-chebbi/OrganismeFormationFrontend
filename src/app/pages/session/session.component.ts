import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/session';
import { HttpSessionService } from 'src/app/services/httpSessionService.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  session:Session;
  voirSession:boolean = true;
  id:number;

  constructor(private httpSession:HttpSessionService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    this.httpSession.findById(this.id).subscribe(sessions => {
      this.session = sessions
      this.voirSession = false
    });
  }

}
