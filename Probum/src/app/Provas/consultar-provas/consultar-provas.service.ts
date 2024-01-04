import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvasService {
  private apiUrl = 'http://localhost:5001/Probum/api'; 

  constructor(private http: HttpClient) { }

  getProvas(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/provas/${userId}`).pipe(
        map(provas => provas.map(prova => ({
            resultado: prova.resultado,
            data_versao: prova.data_versao,
            prova_id: prova.prova_id,
            versao_id: prova.versao_id,
            id: prova.prova_id,
            nome: prova.nome_prova,
            uc: prova.uc
          })))
        );
  }
}