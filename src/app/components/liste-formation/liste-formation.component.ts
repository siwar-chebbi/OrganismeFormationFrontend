import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { HttpFormationService } from 'src/app/services/http-formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {
  
  @Input() idFormation:Number;
  formations: Formation[] = [];

  constructor(private formationService: HttpFormationService) { }

  ngOnInit(): void {
    this.formationService.findAllById(this.idFormation)
    .subscribe(
      reponse=> this.formations = reponse);
      console.log(this.formations);
    
  }
  onDeleteFormation(formation:Formation){
    this.formationService.delete(formation.id).subscribe();
    this.formations = this.formations
    .filter(
      uneFormation => uneFormation.id !== formation.id);

  }

}