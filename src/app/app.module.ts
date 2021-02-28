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
import { CardModule } from 'primeng/card';
import { PageSessionComponent } from './pages/page-session/page-session.component';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import { InscriptionSessionComponent } from './components/inscription-session/inscription-session.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule} from 'primeng/menubar';
import { MenuModule} from 'primeng/menu';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumber, InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import { FormFormationComponent } from './components/form-formation/form-formation.component';


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
    PageSessionComponent,
    PageInscriptionSessionComponent,
    InscriptionSessionComponent,
    ListSessionComponent,
    SessionComponent,
    NavbarComponent,
    FormFormationComponent
  ],
  imports: [
    BrowserModule,
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
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
