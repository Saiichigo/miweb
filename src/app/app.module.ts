import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { MenuComponent } from './components/menu/menu.component';
import { CursosComponent } from './components/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurriculumComponent,
    ContactoComponent,
    SobremiComponent,
    MenuComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
