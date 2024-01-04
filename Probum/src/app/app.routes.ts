import { Routes } from '@angular/router';
import { ProvaComponent } from './criarprova/criarprova.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './Utilizador/perfil/perfil.component';

import { ConsultarProvasComponent } from './Provas/consultar-provas/consultar-provas.component';
import { ConsultarProvaComponent } from './Provas/consultar-prova/consultar-prova.component';



export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'criarprova', component: ProvaComponent },
  { path: 'home', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },


  { path: 'consultar-provas', component: ConsultarProvasComponent },
  { path: 'consultar-prova', component: ConsultarProvaComponent },


];
