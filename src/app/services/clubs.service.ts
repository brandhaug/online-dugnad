import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {GlobalService} from './global.service';
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class ClubsService {

  constructor(private http: HttpClient,
              private globalService: GlobalService) { }

  getClubByUrl(clubUrl): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/clubs/url/' + clubUrl, {headers: headers})
      .pipe(
        catchError(this.globalService.handleError)
      );
  }
}
