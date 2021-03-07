import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {
  id:number=0;
  formations:Formation[] = [];

  constructor(private route:ActivatedRoute, private formationService: FormationHttpService) { 
    this.id = this.route.snapshot.params.idFormation;
    this.formationService.findAllById(this.id).subscribe(reponse => 
      this.formations = reponse
    );

  }

  ngOnInit(): void {
  }

}
