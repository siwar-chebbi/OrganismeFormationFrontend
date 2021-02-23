import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Session } from 'src/app/models/Session';
import { HttpSessionService } from 'src/app/services/httpSessionService.service';

@Component({
  selector: 'app-form-session',
  templateUrl: './form-session.component.html',
  styleUrls: ['./form-session.component.css']
})
export class FormSessionComponent implements OnInit {
  sessions:Session[];
  session:Session;
  formSession: FormGroup;
  constructor(
    private httpSession: HttpSessionService,
    private fb: FormBuilder) {
    this.formSession = this.fb.group({
      dateDebut: [""],
      dateFin: [""],
      duree: [""],
      numero: [""],
      prix: [""]
    })
   }

  ngOnInit(): void {
    this.httpSession.findAll()
    .subscribe(response => this.sessions = response)
    console.log(this.sessions)
  }

  onSubmit(){
    this.session = this.formSession.value;
    this.session.formation = {id:1};
    console.log(this.session.formation.id)
    this.httpSession.save(this.session).subscribe();
    console.log(this.formSession.value);

  }
}
