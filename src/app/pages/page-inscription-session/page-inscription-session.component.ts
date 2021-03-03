import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { HttpSessionService } from 'src/app/services/http-Session.service';

@Component({
  selector: 'app-page-inscription-session',
  templateUrl: './page-inscription-session.component.html',
  styleUrls: ['./page-inscription-session.component.css']
})
export class PageInscriptionSessionComponent implements OnInit {

  session:Session;
  idSession:number;
  constructor(private route:ActivatedRoute, private httpSession:HttpSessionService ) { 
    this.idSession = this.route.snapshot.params.id;
    this.httpSession.findById(this.idSession).subscribe(session => {
      this.session = session
    });

  }

  ngOnInit(): void {
  }

}
