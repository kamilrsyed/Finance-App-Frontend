import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSessionService {

  constructor() { }

  setUserJWT(data: any) {
    localStorage.setItem('jwt-token', data.token);
  }

  removeUserJWT() {
    localStorage.removeItem('jwt-token');
  }

  isLoggedIn() {
    return localStorage.getItem('jwt-token') ? true: false;
  }

  getJWTToken() {
    return localStorage.getItem('jwt-token');
  }
}
