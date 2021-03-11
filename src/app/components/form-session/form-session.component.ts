import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formation } from 'src/app/models/Formation';
import { Lieu } from 'src/app/models/lieu';
import { Session } from 'src/app/models/Session';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { HttpSessionService } from 'src/app/services/http-Session.service';
import { LieuHttpService } from 'src/app/services/lieu-http.service';

@Component({
  selector: 'app-form-session',
  templateUrl: './form-session.component.html',
  styleUrls: ['./form-session.component.css']
})
export class FormSessionComponent implements OnInit {
  formations: Formation[] = [];
  selectedFormation: Formation;
  lieux: Lieu[] = [];
  selectedLieu: Lieu;
  date4: Date;

  sessions: Session[];
  session: Session;
  formSession: FormGroup;
  minDate : Date;
  constructor(
    private formationHttpService: FormationHttpService,
    private lieuHttpService: LieuHttpService,
    private httpSession: HttpSessionService,
    private fb: FormBuilder) {
    this.formSession = this.fb.group({
      dateDebut: [""],
      dateFin: [""],
      duree: [""],
      numero: [""],
      prixHT: [""],
      idFormation: [],
      idLieu: []
    })
  }

  ngOnInit(): void {
    this.minDate = new Date();
    console.log(this.minDate)
    this.formationHttpService
      .findAll()
      .subscribe(response => {
        this.formations = response;
      });
    this.lieuHttpService
      .findAll()
      .subscribe(response => {
        this.lieux = response;
      });




    this.httpSession.findAll()
      .subscribe(response => this.sessions = response)
  }

  onSubmit() {
    this.session = this.formSession.value;


    let session: Session = {
      id: null,
      dateDebut: this.formSession.value.dateDebut,
      dateFin: this.formSession.value.dateFin,
      duree: this.formSession.value.duree,
      numero: this.formSession.value.numero,
      prixHT: this.formSession.value.prixHT,
      idFormation: this.formSession.value.idFormation.id,
      idLieu: this.formSession.value.idLieu.id,
      type: null,
      personnalisee: null,
      validation: null
    }


    this.httpSession.save(session).subscribe();
    this.formSession.reset();
  }
}
