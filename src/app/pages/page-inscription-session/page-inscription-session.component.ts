import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-page-inscription-session',
  templateUrl: './page-inscription-session.component.html',
  styleUrls: ['./page-inscription-session.component.css']
})
export class PageInscriptionSessionComponent implements OnInit {

  session:Session;
  constructor(private route:ActivatedRoute) { 
    this.session.id = route.snapshot.params.id;
    console.log(this.session.id)
  }

  ngOnInit(): void {
  }

}
