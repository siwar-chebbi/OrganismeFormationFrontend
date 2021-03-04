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
    if (this.isAuth)
      this.utilisateur = localStorage.getItem("civilite") + " " + localStorage.getItem("nom")
  }

  isAuth(){
    return localStorage.getItem("connexion") == "true";
  }

  deconnexion(){
    localStorage.removeItem("connexion");
    localStorage.removeItem("nom");
    localStorage.removeItem("civilite");
    this.router.navigate(['accueil']);
  }

}
