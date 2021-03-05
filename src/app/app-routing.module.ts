import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFormateurComponent } from './components/form-formateur/form-formateur.component';
import { FormFormationComponent } from './components/form-formation/form-formation.component';
import { FormResponsableComponent } from './components/form-responsable/form-responsable.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageListeSessionComponent } from './pages/page-liste-session/page-liste-session.component';
import { PageFormSessionComponent } from './pages/page-form-session/page-form-session.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';
import { PageInscriptionSessionComponent } from './pages/page-inscription-session/page-inscription-session.component';
import { PageSessionComponent } from './pages/page-session/page-session.component';
import { PageFormEvaluationComponent } from './pages/page-form-evaluation/page-form-evaluation.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"accueil", component:AccueilComponent},
  {path:"formations/:idFormation", component:PageFormationComponent},
  {path:"formations/:idFormation/sessions", component:PageListeSessionComponent},
  {path:"formations/:idFormation/sessions/:idSession", component:PageSessionComponent},
  {path:"inscription-session/:id", component:PageInscriptionSessionComponent},
  {path:"formSession", component:PageFormSessionComponent},
  {path:"formFormation", component: FormFormationComponent},
  {path:"formResponsable", component: FormResponsableComponent},
  {path:"formFormateur", component: FormFormateurComponent},
  {path:"connexion", component: PageConnexionComponent},
  {path:"formEvaluation", component: PageFormEvaluationComponent},
  {path:"404", component:Erreur404Component},
  {path:"**", redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
