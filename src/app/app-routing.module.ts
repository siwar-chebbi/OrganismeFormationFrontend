import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFormateurComponent } from './components/form-formateur/form-formateur.component';
import { FormFormationComponent } from './components/form-formation/form-formation.component';
import { FormResponsableComponent } from './components/form-responsable/form-responsable.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { ListeSessionComponent } from './pages/liste-session/liste-session.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import { PageSessionComponent } from './pages/page-session/page-session.component';
import { SessionComponent } from './pages/session/session.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"accueil", component:AccueilComponent},
  {path:"formations/:idFormation", component:PageFormationComponent},
  {path:"formations/:idFormation/sessions", component:ListeSessionComponent},
  {path:"formations/:idFormation/sessions/:idSession", component:SessionComponent},
  {path:"inscription-session/:id", component:PageInscriptionSessionComponent},
  {path:"formSession", component:PageSessionComponent},
  {path:"formFormation", component: FormFormationComponent},
  {path:"formResponsable", component: FormResponsableComponent},
  {path:"404", component:Erreur404Component},
  {path:"**", redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
