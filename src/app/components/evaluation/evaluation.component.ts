import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  idSession: number;
  @Output() mail = new EventEmitter<string>();
  
  formEvaluation  : FormGroup;
  constructor(private fb:FormBuilder) {
    this.formEvaluation = this.fb.group({
      mail: [""]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.mail.emit(this.formEvaluation.value.mail);
  }
}
