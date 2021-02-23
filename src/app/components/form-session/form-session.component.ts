import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Session } from 'src/app/models/session';
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
  }

  onSubmit(){
    console.log(this.formSession.value)
    this.httpSession.save(this.formSession.value).subscribe();
    // .subscribe(alert("Ajout terminé"));
    this.alimSession();

  }

  alimSession() {
    this.session = this.formSession.value
    console.log(this.session.dateDebut);
    console.log(this.session.personnalisee);
    console.log(this.session.prix);
  }
}
