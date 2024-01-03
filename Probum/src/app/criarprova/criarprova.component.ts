import { Component } from '@angular/core';
import { ProvasService } from './criarprova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './criarprova.component.html'
})
export class ProvaComponent {
  unidadesCurriculares: string[] = [];
  selectedProva: string = ''; // Variável para armazenar a prova selecionada

  constructor(private provasService: ProvasService) { }

  ngOnInit(): void {
    this.getUnidadesCurriculares();
  }

  getUnidadesCurriculares(): void {
    this.provasService.getUnidadesCurriculares().subscribe((ucs: string[]) => {
      this.unidadesCurriculares = ucs;
    });
  }

  onSelectProva(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProva = target.value;
  }

  criarProva(): void {
    // Lógica para criar a prova com this.selectedProva
  }
}
