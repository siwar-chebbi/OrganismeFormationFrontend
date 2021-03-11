import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { TestPre } from 'src/app/models/TestPre';

@Component({
  selector: 'app-test-prerequis',
  templateUrl: './test-prerequis.component.html',
  styleUrls: ['./test-prerequis.component.css']
})
export class TestPrerequisComponent implements OnInit {

  
  @Output() submitEvent= new EventEmitter<boolean>();



   responsesList: any [] = [
    [{rep: 'Compilé', key: 'A'}, {rep: 'Interprété', key: 'B'}, {rep: 'Compilé et interprété', key: 'C'}, {rep: 'Ni compilé ni interprété', key: 'D'}],
    [{rep: 'Hewlett-Packard', key: 'A'}, {rep: 'Sun Microsystems', key: 'B'},    {rep: 'Microsoft', key: 'C'}, {rep: 'Oracle', key: 'D'}],
    [{rep: 'Héritage', key: 'A'}, {rep: 'Encapsulation', key: 'B'},    {rep: 'Polymorphisme', key: 'C'}, {rep: 'Compilation', key: 'D'}],

   ]

  test: TestPre[] = [

    { numero: "1",reponseCorrecte: "C" ,resultat: false, question: "Java est un langage", reponses: this.responsesList[0]},
    { numero: "2",reponseCorrecte: "B" ,resultat: false, question: "Java est un langage développé par", reponses: this.responsesList[1]},
    { numero: "3",reponseCorrecte: "D" ,resultat: false, question: "Lequel des éléments suivants n’est pas un concept POO en Java?", reponses: this.responsesList[2]},


  ]

  
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  
    this.primengConfig.ripple = true;
  }

    displayBasic2: boolean;


    showBasicDialog2() {
        this.displayBasic2 = true;
       
    }

    updateResult(event :any){
      
      this.test.filter(t=>event.numero===t.numero).map(t=>t.resultat=event.resultat)
       

    }
    validateTest(){
      this.displayBasic2 = false;
      const isTrue = this.test.filter(t=> t.resultat===false).length===0
      this.submitEvent.emit(isTrue);

    }

}
