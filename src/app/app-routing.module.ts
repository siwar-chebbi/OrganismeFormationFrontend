import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFormationComponent } from './components/form-formation/form-formation.component';

const routes: Routes = [
  {path:"formFormation", component: FormFormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
