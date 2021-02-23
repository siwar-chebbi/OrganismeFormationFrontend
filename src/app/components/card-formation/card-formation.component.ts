import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formation } from 'src/app/models/Formation';

@Component({
  selector: 'app-card-formation',
  templateUrl: './card-formation.component.html',
  styleUrls: ['./card-formation.component.css']
})
export class CardFormationComponent implements OnInit {
  @Input() formation:Formation;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.delete.emit(this.formation.id);
  }

}
