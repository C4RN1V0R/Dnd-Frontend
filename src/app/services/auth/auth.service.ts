import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static tokenItemName = 'bearerToken'
  
  private bearerToken?: string
  private decodedToken?: JwtPayload
  private username?: string
  
  constructor() { }

  setToken(token: string) {
    this.bearerToken = token
    localStorage.setItem(AuthService.tokenItemName, token)
  }

  getToken(): string | undefined {
    if (!this.bearerToken) {
      this.bearerToken = AuthService.getToken();
    }
    return this.bearerToken || undefined
  }

  static getToken(): string | undefined {
    return localStorage.getItem(this.tokenItemName) || undefined
  }

  getDecodeToken(): JwtPayload | undefined {
    if (!this.decodedToken) {
      const token = this.getToken()
      if (token) {
        this.decodedToken = jwtDecode(token);
      }
    }
    return this.decodedToken;
  }

  getUsername(): string | undefined {
    if (!this.username) {
      
    }
    const name = this.getDecodeToken()?.sub
    return name
  }

}
