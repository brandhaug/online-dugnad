import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GlobalService} from './global.service';
import {environment} from '../../environments/environment';

@Injectable()
export class PostalPlaceService {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  getPostalPlace(zipCode) {
    return this.http.get(environment.crmBaseUrl + '/places/' + zipCode)
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }
}
