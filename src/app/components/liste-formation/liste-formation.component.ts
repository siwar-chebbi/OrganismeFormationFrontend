import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {
  
  @Input() idFormation:Number;
  @Input() formations: Formation[] = [];

  constructor(private formationService: FormationHttpService) { }

  ngOnInit(): void {
  }
  onDeleteFormation(formation:Formation){
    this.formationService.delete(formation.id).subscribe();
    this.formations = this.formations
    .filter(
      uneFormation => uneFormation.id !== formation.id);

  }

}