import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Session } from 'src/app/models/Session';
import { HttpSessionService } from 'src/app/services/http-Session.service';

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
      prixHT: [""],
      idFormation: [1],
      idLieu: [1]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.session = this.formSession.value;
    this.httpSession.save(this.formSession.value).subscribe( ()=> {
      console.log(this.formSession.value)
    });
  }
}
