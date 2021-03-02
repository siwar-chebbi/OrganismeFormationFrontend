import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { DropdownModule } from 'primeng/dropdown';
import { ResponsableHttpService } from 'src/app/services/responsable-http.service';
import { Responsable } from 'src/app/models/Responsable';
@Component({
  selector: 'app-form-formation',
  templateUrl: './form-formation.component.html',
  styleUrls: ['./form-formation.component.css']
})
export class FormFormationComponent implements OnInit {

  formFormation: FormGroup;
  responsables: Responsable[] = [];
  selectedResponsable: Responsable;

  constructor(
    private formBuilder: FormBuilder,
    private formationHttpService: FormationHttpService,
    private responsableHttpService: ResponsableHttpService
  ) {


    this.formFormation = this.formBuilder.group({
      numero: [''],
      titre: [''],
      contenu: [''],
      logiciel: [''],
      support: [''],
      idTheme: [],
      selectedResponsable: []
    })

  }

  ngOnInit(): void {
    this.responsableHttpService
      .findAll()
      .subscribe(response => {
        this.responsables = response; 
        console.log(this.responsables)
      } );
  }

  onSubmit() {
    this.formationHttpService
      .create(this.formFormation.value)
      .subscribe();
    this.formFormation.reset();
  }

}
