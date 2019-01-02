import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";

@Injectable()
export class SellersService {

  constructor(private http: HttpClient,
              private globalService: GlobalService) { }

  getSellersByClub(clubId): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/clubs/' + clubId + '/sellers', {headers: headers})
      .pipe(
        catchError(this.globalService.handleError)
      );  }

}
