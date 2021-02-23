import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSessionComponent } from './components/form-session/form-session.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CardFormationComponent } from './components/card-formation/card-formation.component';
import { ListFormationComponent } from './components/list-formation/list-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSessionComponent,
    CardFormationComponent,
    ListFormationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
