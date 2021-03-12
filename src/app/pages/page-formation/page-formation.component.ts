import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Theme } from 'src/app/models/Theme';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { ThemeHttpService } from 'src/app/services/theme-http.service';

@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {
  id:number=0;
  formations:Formation[] = [];
  theme:Theme;

  constructor(private route:ActivatedRoute, private formationService: FormationHttpService, private themesService: ThemeHttpService) { 
    this.id = this.route.snapshot.params.idFormation;
    this.formationService.findAllById(this.id).subscribe(reponse => {
      this.formations = reponse
      this.themesService.findById(this.id).subscribe(theme => {
        this.theme = theme
      })
  });

  }

  ngOnInit(): void {
  }

}
