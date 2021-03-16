import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/models/Session';
import { SessionDetails } from 'src/app/models/SessionDetails';

@Component({
  selector: 'app-card-session',
  templateUrl: './card-session.component.html',
  styleUrls: ['./card-session.component.css']
})
export class CardSessionComponent implements OnInit {

  @Input() session :Session;
  @Input() sessionDetails :SessionDetails;
  @Input() voirSession:boolean = true;
  @Input() idFormation:number;

  constructor(private router:Router, private routerParam:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  consulterSession() {
    this.router.navigate([`formations/${this.idFormation}/sessions/`, this.session.id]);
  }

  onInscriptionSession(){
    if((localStorage.getItem("idParticipant")) != null){
      this.router.navigate([`/inscription-session/`, this.session.id]);
    } 
    else {
      alert("Vous devez être connecté avant de vous inscrire à une session.");
      this.router.navigate(['connexion']);
    }    
  }

  goBack(){
    this.idFormation = this.routerParam.snapshot.params.idFormation;
    this.router.navigate([`formations/${this.idFormation}/sessions`]);
  }
}