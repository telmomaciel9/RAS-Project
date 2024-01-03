import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from '../homepage/homepage.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, FlexLayoutModule, MatDividerModule, HttpClientModule,],
  styleUrl: './homepage.component.css',
  templateUrl: './homepage.component.html',
  providers: [AuthService],
})
export class HomepageComponent {
  hide = true

  constructor(private authService: AuthService) {}

  login(credentials: { username: string, password: string }): void {
    this.authService.login(credentials.username, credentials.password).subscribe(
      (response) => {
        // Trata a resposta de login bem-sucedida aqui
        console.log('Login bem-sucedido', response);
        // Você pode querer armazenar o token no local storage aqui
      },
      (error) => {
        // Trata o erro de login aqui
        console.error('Erro de login', error);
      }
    );
  }
}

