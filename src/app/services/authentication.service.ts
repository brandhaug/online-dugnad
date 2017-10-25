import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {GlobalService} from './global.service';
import {JwtHelper} from 'angular2-jwt';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthenticationService {

  public token: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: HttpClient, private router: Router, private globalService: GlobalService) {
    this.token = JSON.parse(localStorage.getItem('kd-token'));
  }

  currentUser() {
    return this.jwtHelper.decodeToken(localStorage.getItem('kd-token'));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('kd-token'));
  }

  login(body) {
    return this.http.post(environment.crmBaseUrl + '/members/login', body)
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('kd-token');
  }

  register(body) {
    const authHeader = 'Bearer ' + this.getToken();

    return this.http.post(environment.crmBaseUrl + '/members/register', body, {headers: new HttpHeaders().set('Authorization', authHeader)})
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }

  updateUser(_id, body) {
    const authHeader = 'Bearer ' + this.getToken();

    return this.http.put(environment.crmBaseUrl + '/members/' + _id, body, {headers: new HttpHeaders().set('Authorization', authHeader)})
      .catch((err: any) => this.globalService.handleServerError(err));
  }

  saveToken(token) {
    if (token) {
      this.token = token;
      localStorage.setItem('kd-token', JSON.stringify(token));
      return true;
    } else {
      return false;
    }
  }
}
