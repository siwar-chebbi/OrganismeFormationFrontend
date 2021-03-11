import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Domaine } from 'src/app/models/Domaine';
import { Theme } from 'src/app/models/Theme';
import { DomaineHttpService } from 'src/app/services/domaine-http.service';
import { ThemeHttpService } from 'src/app/services/theme-http.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    items: MenuItem[];
    domaines: Domaine[] = [];
    sousMenuDomaine: MenuItem[] = [];
    themes: Theme[] = [];
    sousMenuTheme: MenuItem[] = [];
    menuGestionnaire: MenuItem[] = [];
    isAdmin: boolean;

    constructor(private domaineHttp: DomaineHttpService, private themeHttp: ThemeHttpService) { }


    ngOnInit() {

        /*** Sous Menu Theme ***/
        this.themeHttp.findAll().subscribe(response => {
            this.themes = response;

            this.themes.forEach(element =>
                this.sousMenuTheme.push({
                    label: element.nom,
                    id: "element.id",
                    url: `http://localhost:4200/formations/${element.id}`,
                    styleClass: 'menu-button'
                }));
        })

        /*** Sous Menu Domaine ***/
        this.domaineHttp.findAll().subscribe(response => {
            this.domaines = response;

            this.domaines.forEach(element =>
                this.sousMenuDomaine.push({
                    label: element.nom,
                    items: element.id == 1 ? this.sousMenuTheme : null,
                    styleClass: 'menu-button'
                }));
        })
        
        /**** Menu en Cascade ***/
        this.items = [
            {
                label: 'Accueil',
                url: `accueil`,
                styleClass: 'menu-button'
            },
            {
                label: 'Formations',
                items: this.sousMenuDomaine,
                styleClass: 'menu-button'
            }
        ];

        /*** Menu Gestionnaire ***/
        this.isAdmin = true;
        //this.isAdmin = localStorage.getItem("idResponsable")!=null;
        if (this.isAdmin){
            this.items.push({label: 'Gestionnaire',
                             styleClass: 'menu-button',
                             items: [ {label: 'Ajouter une formation', url:`/formFormation`, styleClass: 'menu-button'},
                                      {label: 'Ajouter un responsable', url:`/formResponsable`, styleClass: 'menu-button'},
                                      {label: 'Ajouter une session', url:`/formSession`, styleClass: 'menu-button'},
                                      {label: 'Ajouter un formateur', url:`/formFormateur`, styleClass: 'menu-button'}]
            })
        }               
    }
}
