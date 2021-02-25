import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuItemContent } from 'primeng/menu';
import { element } from 'protractor';
import { Domaine } from 'src/app/models/Domaine';
import { Theme } from 'src/app/models/Theme';
import { DomaineHttpService } from 'src/app/services/domaine-http.service';
import { ThemeHttpService } from 'src/app/services/theme-http.service';
import { formatWithOptions } from 'util';

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
                this.sousMenuTheme.push({ label: element.nom }));
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
                label: 'Accueil'
            },
            {
                label: 'Formations',
                items: this.sousMenuDomaine
            },
            {
                label: 'Inscription'
            }
        ];




    }

}
