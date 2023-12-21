import { Routes } from '@angular/router';
import { ProvasComponent } from './Provas/provas.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'provas', component: ProvasComponent },
];
