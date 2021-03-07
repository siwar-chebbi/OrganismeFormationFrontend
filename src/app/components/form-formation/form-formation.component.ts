import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { ResponsableHttpService } from 'src/app/services/responsable-http.service';
import { Responsable } from 'src/app/models/Responsable';
import { Formation } from 'src/app/models/Formation';
import { Theme } from 'src/app/models/Theme';
import { ThemeHttpService } from 'src/app/services/theme-http.service';

@Component({
  selector: 'app-form-formation',
  templateUrl: './form-formation.component.html',
  styleUrls: ['./form-formation.component.css']
})
export class FormFormationComponent implements OnInit {

  formFormation: FormGroup;
  responsables: Responsable[] = [];
  selectedResponsable: Responsable;
  themes: Theme[] = [];
  selectedThemes: any[] ;

  constructor(
    private formBuilder: FormBuilder,
    private formationHttpService: FormationHttpService,
    private responsableHttpService: ResponsableHttpService,
    private themeHttpService: ThemeHttpService) {

    this.formFormation = this.formBuilder.group({
      numero: [''],
      titre: [''],
      contenu: [''],
      logiciel: [''],
      support: [''],
      idTheme: [],
      idResponsable:[,Validators.required]
    })

  }

  ngOnInit(): void {
    this.responsableHttpService
      .findAll()
      .subscribe(response => {
        this.responsables = response;
      } );
      this.themeHttpService
      .findAll()
      .subscribe(response => {
        this.themes = response;
      } );
  }

  onSubmit() {
    let formation : Formation = {
      id : null,
      idResponsable : this.formFormation.value.idResponsable.id,
      numero : this.formFormation.value.numero,
      titre : this.formFormation.value.titre,
      contenu : this.formFormation.value.contenu,
      logiciel : this.formFormation.value.logiciel,
      support : this.formFormation.value.support,
      idTheme : this.formFormation.value.idTheme?.map((theme: { id: any; })=>theme.id)
    }
    this.formationHttpService
      .create(formation)
      .subscribe();
    this.formFormation.reset();
  }

}
