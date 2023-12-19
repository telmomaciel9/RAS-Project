

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProvasComponent } from './Provas/provas.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ProvasComponent
    // ... outros componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Adicione suas rotas aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
