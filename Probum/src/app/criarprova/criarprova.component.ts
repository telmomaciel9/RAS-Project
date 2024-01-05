import { Component } from '@angular/core';
import { ProvasService } from './criarprova.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-prova',
  templateUrl: './criarprova.component.html',
  providers: [ProvasService],
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
      console.log('UCs:', this.unidadesCurriculares);
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
