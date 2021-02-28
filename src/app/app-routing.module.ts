import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { ListSessionComponent } from './pages/list-session/list-session.component';
import { SessionComponent } from './pages/session/session.component';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import { PageSessionComponent } from './pages/page-session/page-session.component';
import { FormFormationComponent } from './components/form-formation/form-formation.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"accueil", component:AccueilComponent},
  {path:"sessions", component:ListSessionComponent},
  {path:"sessions/:id", component:SessionComponent},
  {path:"formations/:id/sessions/:id", component:SessionComponent},
  {path:"inscription-session", component:PageInscriptionSessionComponent},
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
