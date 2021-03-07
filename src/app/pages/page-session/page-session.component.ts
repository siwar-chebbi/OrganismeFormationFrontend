import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-page-session',
  templateUrl: './page-session.component.html',
  styleUrls: ['./page-session.component.css']
})
export class PageSessionComponent implements OnInit {

  session:Session;
  voirSession:boolean = true;
  idSession:number;

  constructor(private httpSession:HttpSessionService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idSession = this.router.snapshot.params.idSession;
    this.httpSession.findById(this.idSession).subscribe(sessions => {
      this.session = sessions
      this.voirSession = false
    });
  }

}
