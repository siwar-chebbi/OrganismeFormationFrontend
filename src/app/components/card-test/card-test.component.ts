import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestPre } from 'src/app/models/TestPre';

@Component({
  selector: 'app-card-test',
  templateUrl: './card-test.component.html',
  styleUrls: ['./card-test.component.css']
})
export class CardTestComponent implements OnInit {
  @Input() testPrerequis: TestPre;
  selectedreponse : any = null;

  @Output() resultEvent= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendResult() {
    this.resultEvent.emit({numero: this.testPrerequis.numero,resultat: this.selectedreponse.key===this.testPrerequis.reponseCorrecte});
}

}
