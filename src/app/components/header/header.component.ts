import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  utilisateur:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.isAuth){
      const civilite = localStorage.getItem("civilite")
      const nom = localStorage.getItem("nom");
      this.utilisateur =  (civilite?"Bonjour " + civilite:"") + " " + (nom?nom:"")
    }
      
  }

  isAuth(){
    return localStorage.getItem("connexion") == "true";
  }

  deconnexion(){
    this.supprimerLocalStorage();
    window.location.assign('accueil');
  }

  supprimerLocalStorage(){
    localStorage.removeItem("connexion");
    localStorage.removeItem("nom");
    localStorage.removeItem("civilite");
    localStorage.removeItem('idParticipant');
    localStorage.removeItem('idResponsable');
    localStorage.removeItem('prenom');
  }
  isResponsable(){
    return localStorage.getItem("idResponsable") != null;
  }
}
