import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-card-session',
  templateUrl: './card-session.component.html',
  styleUrls: ['./card-session.component.css']
})
export class CardSessionComponent implements OnInit {

  @Input() session :Session;
  @Input() voirSession:boolean = true;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  consulterSession() {
    this.router.navigate([`/sessions/`, this.session.id])
  }

}
