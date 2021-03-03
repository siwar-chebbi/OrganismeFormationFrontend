import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-liste-session',
  templateUrl: './liste-session.component.html',
  styleUrls: ['./liste-session.component.css']
})
export class ListeSessionComponent implements OnInit {
  
  @Input() sessions :Session [] = [];
  voirSession:boolean = true;
  @Input() idFormation:number;

  constructor() { }

  ngOnInit(): void {
  }

}
