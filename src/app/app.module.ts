import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSessionComponent } from './components/form-session/form-session.component';
import { HttpClientModule } from '@angular/common/http';
import { CardFormationComponent } from './components/card-formation/card-formation.component';
import { ListeFormationComponent } from './components/liste-formation/liste-formation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { CardSessionComponent } from './components/card-session/card-session.component';
import { PageListeSessionComponent } from './pages/page-liste-session/page-liste-session.component';
import { CardModule } from 'primeng/card';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import { InscriptionSessionComponent } from './components/inscription-session/inscription-session.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FormFormationComponent } from './components/form-formation/form-formation.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';
import { FormResponsableComponent } from './components/form-responsable/form-responsable.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavbarComponent } from './pages/header-navbar/header-navbar.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormParticipantComponent } from './components/form-participant/form-participant.component';
import { FormFormateurComponent } from './components/form-formateur/form-formateur.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { PageSessionComponent } from './pages/page-session/page-session.component';
import { PageFormSessionComponent } from './pages/page-form-session/page-form-session.component';
import { FormEvaluationComponent } from './components/form-evaluation/form-evaluation.component';
import { ListeSessionComponent } from './components/liste-session/liste-session.component';
import { StepsModule } from 'primeng/steps';
import { PageFormEvaluationComponent } from './pages/page-form-evaluation/page-form-evaluation.component';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    CardFormationComponent,
    ListeFormationComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    Erreur404Component,
    CardSessionComponent,
    PageInscriptionSessionComponent,
    InscriptionSessionComponent,
    PageListeSessionComponent,
    PageSessionComponent,
    FormSessionComponent,
    PageFormSessionComponent,
    NavbarComponent,
    FormFormationComponent,
    PageFormationComponent,
    FormResponsableComponent,
    HeaderNavbarComponent,
    FormParticipantComponent,
    FormFormateurComponent,
    PageConnexionComponent,
    FormConnexionComponent,
    FormEvaluationComponent,
    ListeSessionComponent,
    PageFormEvaluationComponent
  ],
  imports: [
    BrowserModule,
    StepsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    MenubarModule,
    MenuModule,
    CascadeSelectModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule, 
    ButtonModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
