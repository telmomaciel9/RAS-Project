import { Component } from '@angular/core';
import { UserService } from './perfil.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from '../../change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  providers: [UserService],
})
export class PerfilComponent {
  hide = true
  username: string = 'teste'; // Inicialização com valor padrão vazio
  email: string = 'teste'; // Inicialização com valor padrão vazio
  role: string = 'teste'; // Inicialização com valor padrão vazio

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe(
      (response) => {
        this.username = response.username;
        this.email = response.email;
        this.role = response.role;
      },
      (error) => {
        console.error('Erro ao obter informações do usuário', error);
      }
    );
  }


  openChangePasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '400px',
      disableClose: true // Impede fechar o diálogo clicando fora dele
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aqui você pode fazer algo com o resultado após fechar o diálogo, se necessário
      console.log('Diálogo fechado', result);
    });
  }
}
