import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSessionComponent } from './components/form-session/form-session.component';
import { HttpClientModule } from '@angular/common/http';
import { CardFormationComponent } from './components/card-formation/card-formation.component';
import { ListFormationComponent } from './components/list-formation/list-formation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { CardSessionComponent } from './components/card-session/card-session.component';
import { ListSessionComponent } from './pages/list-session/list-session.component';
import { SessionComponent } from './pages/session/session.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    FormSessionComponent,
    CardFormationComponent,
    ListFormationComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    Erreur404Component,
    CardSessionComponent,
    ListSessionComponent,
    SessionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
