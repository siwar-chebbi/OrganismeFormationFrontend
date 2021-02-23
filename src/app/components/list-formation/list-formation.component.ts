import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { HttpFormationService } from 'src/app/services/http-formation.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {
  formations: Formation[] = [];

  constructor(private formationService: HttpFormationService) { }

  ngOnInit(): void {
    this.formationService.findAll().subscribe(response=> this.formations = response)
    
  }
  onDeleteFormation(formation:Formation){
    this.formationService.delete(formation.id).subscribe();
    this.formations = this.formations.filter(uneFormation => uneFormation.id !== formation.id)

  }

}