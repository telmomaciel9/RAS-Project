import { Routes } from '@angular/router';
import { ProvaComponent } from './criarprova/criarprova.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './Utilizador/perfil/perfil.component';
import { EditarPerfilComponent } from './Utilizador/editar-perfil/editar-perfil.component';


export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'criarprova', component: ProvaComponent },
  { path: 'home', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'editar', component: EditarPerfilComponent },
];
