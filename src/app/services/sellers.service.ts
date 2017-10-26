import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GlobalService} from './global.service';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class SellersService {

  constructor(private http: HttpClient,
              private globalService: GlobalService) { }

  getSellersByClub(clubId): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/clubs/' + clubId + '/sellers', {headers: headers})
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }

}
