import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {GlobalService} from './global.service';

@Injectable()
export class ClubsService {

  constructor(private http: HttpClient,
              private globalService: GlobalService) { }

  getClubByUrl(clubUrl): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/clubs/url/' + clubUrl, {headers: headers})
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }
}
