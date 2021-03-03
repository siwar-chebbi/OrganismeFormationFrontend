import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFormationComponent } from './components/form-formation/form-formation.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { PageListeSessionComponent } from './pages/page-liste-session/page-liste-session.component';
import { PageFormSessionComponent } from './pages/page-form-session/page-form-session.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import { PageSessionComponent } from './pages/page-session/page-session.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"accueil", component:AccueilComponent},
  {path:"formations/:idFormation", component:PageFormationComponent},
  {path:"formations/:idFormation/sessions", component:PageListeSessionComponent},
  {path:"formations/:idFormation/sessions/:idSession", component:PageSessionComponent},
  {path:"inscription-session/:id", component:PageInscriptionSessionComponent},
  {path:"formSession", component:PageFormSessionComponent},
  {path:"formFormation", component: FormFormationComponent},
  {path:"404", component:Erreur404Component},
  {path:"**", redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
