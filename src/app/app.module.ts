import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSessionComponent } from './components/form-session/form-session.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FormInscriptionBilanComponent } from './components/form-inscription-bilan/form-inscription-bilan.component';
import { CardFormationComponent } from './components/card-formation/card-formation.component';
import { ListFormationComponent } from './components/list-formation/list-formation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { PageSessionComponent } from './pages/page-session/page-session.component';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    FormSessionComponent,
    FormInscriptionBilanComponent,
    CardFormationComponent,
    ListFormationComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    Erreur404Component,
    PageSessionComponent,
    PageInscriptionSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
