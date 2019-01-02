import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from './global.service';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class ReservationsService {

  constructor(private http: HttpClient,
              private globalService: GlobalService) {
  }

  createReservation(items, customer): Observable<any> {
    const body = {items: items, customer: customer};

    return this.http.post(environment.crmBaseUrl + '/reservations', body)
      .pipe(
        catchError(this.globalService.handleError)
      );  }

  getAdminPanel(clubId): Observable<any> {
    return this.http.get(environment.crmBaseUrl + '/clubs/' + clubId + '/adminpanel')
      .pipe(
        catchError(this.globalService.handleError)
      );  }

  getReservationsByClub(clubId): Observable<any> {
    return this.http.get(environment.crmBaseUrl + '/clubs/' + clubId + '/reservations')
      .pipe(
        catchError(this.globalService.handleError)
      );  }

  getReservationsBySeller(sellerId): Observable<any> {
    return this.http.get(environment.crmBaseUrl + '/sellers/' + sellerId + '/reservations')
      .pipe(
        catchError(this.globalService.handleError)
      );  }

  updateReservation(reservation): Observable<any> {
    return this.http.put(environment.crmBaseUrl + '/reservations/' + reservation._id, reservation)
      .pipe(
        catchError(this.globalService.handleError)
      );  }
}
