import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage.component';

@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:5000'; // Replace with your Flask API URL
	constructor(private http: HttpClient) {
		this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': "*/*" });
	};

	headers: HttpHeaders;

  login(username: string, password: string){
    const body = { username, password };
    return this.http.post<any>(`${this.baseUrl}/login`, body).pipe(
      catchError((error) => {
        // Handle error, log, or throw it further
        console.error('Error occurred during login:', error);
        return throwError(error); // Rethrow the error for the component to handle
      })
    );
  }

  // Other methods like register, changePassword, etc. can be implemented similarly
}
