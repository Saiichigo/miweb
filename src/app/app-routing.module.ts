import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { CursosComponent } from './components/cursos/cursos.component';


const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'curriculum' , component: CurriculumComponent},
  { path: 'portafolio' , component: PortafolioComponent},
  { path: 'cursos-tomados' , component: CursosComponent},
  { path: 'sobremi' , component: SobremiComponent},
  { path: 'contacto' , component: ContactoComponent},
  { path: '**', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
