import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { DropdownModule } from 'primeng/dropdown';
import { ResponsableHttpService } from 'src/app/services/responsable-http.service';
import { Responsable } from 'src/app/models/Responsable';
import { Formation } from 'src/app/models/Formation';
import {ListboxModule} from 'primeng/listbox';
import { Theme } from 'src/app/models/Theme';
import { ThemeHttpService } from 'src/app/services/theme-http.service';
import { PrimeNGConfig } from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';

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
    private themeHttpService: ThemeHttpService, private primengConfig: PrimeNGConfig
  ) {


    this.formFormation = this.formBuilder.group({
      numero: [''],
      titre: [''],
      contenu: [''],
      logiciel: [''],
      support: [''],
      idTheme: [],
      idResponsable:[]
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

  updateSelectedItems(e){
    console.log(e)
    this.selectedThemes=e
  }

  onSubmit() {
    console.log(this.formFormation)
    let formation : Formation = {
      id : null,
      idResponsable :  this.formFormation.value.idResponsable.id,
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
