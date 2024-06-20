import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authToken: string | undefined;

  get authToken(): string | undefined {
    return this._authToken;
  }

  set authToken(token: string | undefined) {
    this._authToken = token;
  }

  isLoggedIn(): boolean {
    return !!this._authToken;
  }
}
