import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GlobalService} from './global.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class ReservationsService {

  constructor(private http: HttpClient,
              private globalService: GlobalService) {
  }

  createReservation(items, customer): Observable<{message: string, reservation: string}> {
    const body = {items: items, customer: customer};

    return this.http.post(environment.crmBaseUrl + '/reservations', body)
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }

  getAdminPanel(clubId): Observable<any> {
    return this.http.get(environment.crmBaseUrl + '/clubs/' + clubId + '/reservations/admin')
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }
}
