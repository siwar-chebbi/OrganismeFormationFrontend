import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/Formation';

@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {
  id:number=0;
  constructor(private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit(): void {
  }

}
