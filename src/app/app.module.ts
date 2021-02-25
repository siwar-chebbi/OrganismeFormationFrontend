import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule} from 'primeng/menubar';
import { MenuModule} from 'primeng/menu';
import {CascadeSelectModule} from 'primeng/cascadeselect';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenubarModule,
    MenuModule,
    CascadeSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
