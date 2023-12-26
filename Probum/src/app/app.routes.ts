import { Routes } from '@angular/router';
import { ProvasComponent } from './Provas/provas.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'provas', component: ProvasComponent },
  { path: 'home', component: InicioComponent },
];
