import { Routes } from '@angular/router';
import { ProvasComponent } from './Provas/provas.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PerfilComponent } from './Utilizador/perfil/perfil.component';
import { EditarPerfilComponent } from './Utilizador/editar-perfil/editar-perfil.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'provas', component: ProvasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'editar', component: EditarPerfilComponent },
];
