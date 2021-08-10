import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: boolean;

  constructor() { }

  setIsLoggedIn(isLoggedIn) {
    this.login = isLoggedIn;
  }

  isLoggedIn() {
    return this.login;
  }
}