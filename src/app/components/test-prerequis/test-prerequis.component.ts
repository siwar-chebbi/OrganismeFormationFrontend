import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { TestPre } from 'src/app/models/TestPre';

@Component({
  selector: 'app-test-prerequis',
  templateUrl: './test-prerequis.component.html',
  styleUrls: ['./test-prerequis.component.css']
})
export class TestPrerequisComponent implements OnInit {

  
  @Output() submitEvent= new EventEmitter();



   responsesList: any [] = [
    [{rep: 'Accounting', key: 'A'}, {rep: 'Marketing', key: 'M'},    {rep: 'Production', key: 'P'}, {rep: 'Research', key: 'R'}],
    [{rep: 'Accounting', key: 'A'}, {rep: 'Marketing', key: 'M'},    {rep: 'Production', key: 'P'}, {rep: 'Research', key: 'R'}],
    [{rep: 'Accounting', key: 'A'}, {rep: 'Marketing', key: 'M'},    {rep: 'Production', key: 'P'}, {rep: 'Research', key: 'R'}],

   ]

  test: TestPre[] = [

    { numero: "1", question: "c'est quoi JAVA", reponses: this.responsesList[0]},
    { numero: "2", question: "c'est quoi Angular", reponses: this.responsesList[1]},
    { numero: "3", question: "c'est quoi Angular", reponses: this.responsesList[1]},


  ]


  
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  
    this.primengConfig.ripple = true;
  }

    displayBasic2: boolean;


    showBasicDialog2() {
        this.displayBasic2 = true;
        this.submitEvent.emit();
    }

}
