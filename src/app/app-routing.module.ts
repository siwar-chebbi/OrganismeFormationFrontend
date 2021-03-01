import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFormationComponent } from './components/form-formation/form-formation.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { ListeSessionComponent } from './pages/liste-session/liste-session.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import { PageSessionComponent } from './pages/page-session/page-session.component';
import { SessionComponent } from './pages/Session/Session.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"accueil", component:AccueilComponent},
  {path:"formations/:id/sessions", component:ListeSessionComponent},
  {path:"sessions/:id", component:SessionComponent},
  {path:"formations/:id", component:PageFormationComponent},
  {path:"formations/:id/sessions/:id", component:SessionComponent},
  {path:"inscription-session/:id", component:PageInscriptionSessionComponent},
  {path:"formSession", component:PageSessionComponent},
  {path:"formFormation", component: FormFormationComponent},
  {path:"404", component:Erreur404Component},
  {path:"**", redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
