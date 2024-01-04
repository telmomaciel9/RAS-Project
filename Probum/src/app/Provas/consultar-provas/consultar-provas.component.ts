import { Component } from '@angular/core';
import { ProvasService } from "../consultar-provas/consultar-provas.service";

@Component({
  selector: 'app-consultar-provas',
  standalone: true,
  imports: [],
  templateUrl: './consultar-provas.component.html',
  styleUrl: './consultar-provas.component.css'
})
export class ConsultarProvasComponent {
  provas: any[] = [];

  // falta trazer de trás o userid

  userId: any;

  constructor(private provasService: ProvasService) { }

  ngOnInit(): void {
    this.getProvas();
  }

  getProvas(): void {
    this.provasService.getProvas(this.userId).subscribe(
      (provas) => {
        this.provas = provas;
        console.log(this.provas); // Exibe os dados na consola para verificação
      },
      (error) => {
        console.error('Erro ao obter provas:', error);
      }
    );
  }
}
