import { Component, Input, OnInit } from '@angular/core';
import { TestPre } from 'src/app/models/TestPre';

@Component({
  selector: 'app-card-test',
  templateUrl: './card-test.component.html',
  styleUrls: ['./card-test.component.css']
})
export class CardTestComponent implements OnInit {
  @Input() testPrerequis: TestPre;
  selectedreponse : any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
