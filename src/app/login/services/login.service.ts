import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from 'src/app/api-constants';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(
      environment.baseUrl + apiConstants.login,
      data
    );
  }

  getUsers() {
    return this.http.get(environment.baseUrl + apiConstants.users);
  }
}
