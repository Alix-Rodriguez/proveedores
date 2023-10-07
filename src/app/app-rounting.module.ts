import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { AseguradosComponent } from './pages/asegurados/asegurados.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ConsultaAseguradosComponent } from './pages/consulta-asegurados/consulta-asegurados.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RecuperarAccesoComponent } from './auth/recuperar-acceso/recuperar-acceso.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';

// Importa tus componentes aquí

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'recuperar_acceso', component: RecuperarAccesoComponent },

  {
    path: 'home',
    component: PagesComponent,
    children: [
     { path: 'asegurados', component: AseguradosComponent },
     { path: 'contacto', component: ContactoComponent },
     { path: 'consulta-asegurados', component: ConsultaAseguradosComponent },
     { path: 'perfil', component: PerfilComponent },
     { path: 'preguntas_frecuentes', component: PreguntasFrecuentesComponent },

    ]
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
