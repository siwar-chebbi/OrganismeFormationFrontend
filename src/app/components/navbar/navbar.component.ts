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

    constructor(private domaineHttp: DomaineHttpService, private themeHttp: ThemeHttpService) { }


    ngOnInit() {

        /*** Sous Menu Theme ***/
        this.themeHttp.findAll().subscribe(response => {
            this.themes = response;

            this.themes.forEach(element =>
                this.sousMenuTheme.push({
                    label: element.nom,
                    id: "element.id",
                    url: `https://www.google.com/?id=${element.id}`
                }));
        })


        /*** Sous Menu Domaine ***/
        this.domaineHttp.findAll().subscribe(response => {
            this.domaines = response;

            this.domaines.forEach(element =>
                this.sousMenuDomaine.push({
                    label: element.nom,
                    items: element.id == 1 ? this.sousMenuTheme : null
                }));
        })

        /**** Menu en Cascade ***/

        this.items = [
            {
                label: 'Accueil',
                url: `https://www.google.com/`
            },
            {
                label: 'Formations',
                items: this.sousMenuDomaine
            },
            {
                label: 'Inscription',
                url: `https://www.google.com/`
            },
            {
                label: 'Tests Temporaires',
                items: [
                    {label: 'Jamal',
                     items: [{label:'Formulaire Formation', url:`/formFormation`}]},
                     {label: 'Alber',
                     items: [{label:'Nom de votre test', url:`/formFormation`}]},
                     {label: 'Gauthier',
                     items: [{label:'Nom de votre test', url:`/formFormation`}]},
                     {label: 'Siwar',
                     items: [{label:'Nom de votre test', url:`/formFormation`}]}
                ]
            }
        ];




    }

}
