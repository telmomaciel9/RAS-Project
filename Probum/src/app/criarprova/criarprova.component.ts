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
  nomeProva: string = ''; // Variável para armazenar o nome da prova
  dataHoraProva: string = ''; // Variável para armazenar a data e hora da prova

  onNomeChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.nomeProva = inputElement.value; // Armazena o valor do input de nome da prova
  }

  onDateTimeChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.dataHoraProva = inputElement.value; // Armazena o valor do input de data e hora da prova
  }

  criarProva(): void {
    // Aqui você pode usar this.nomeProva e this.dataHoraProva para criar a prova
    console.log('Nome da prova:', this.nomeProva);
    console.log('Data e Hora da prova:', this.dataHoraProva);
  }
}
