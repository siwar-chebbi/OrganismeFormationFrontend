import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  retourAccueil(){
    this.router.navigate(['accueil']);
  }
}
