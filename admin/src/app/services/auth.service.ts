import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = 'ACCESS_TOKEN';
  private accessToken: BehaviorSubject<string>;
  public accessToken$: Observable<string>;

  constructor( private http: HttpClient, private jhs: JwtHelperService) {
    this.accessToken = new BehaviorSubject<string>(localStorage.getItem(this.TOKEN_KEY));
    this.accessToken$ = this.accessToken.asObservable();
  }

  login(credential: User): Observable<string> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, credential)
      .pipe(
        map(res => res.token),
        tap(t => localStorage.setItem(this.TOKEN_KEY, t)),
        tap(t => this.accessToken.next(t))
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.accessToken.next(null);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  isTokenExpired(token: string): boolean {
    return this.jhs.isTokenExpired(token);
  }
}
