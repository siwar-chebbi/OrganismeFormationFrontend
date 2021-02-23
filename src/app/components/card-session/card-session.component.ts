import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-card-session',
  templateUrl: './card-session.component.html',
  styleUrls: ['./card-session.component.css']
})
export class CardSessionComponent implements OnInit {

  @Input() session :Session;

  constructor() { }

  ngOnInit(): void {
  }

}
