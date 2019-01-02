import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from './global.service';
import {environment} from '../../environments/environment';
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class PostalPlaceService {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  getPostalPlace(zipCode) {
    return this.http.get<any>(environment.crmBaseUrl + '/places/' + zipCode)
      .pipe(
        catchError(this.globalService.handleError)
      );
  }
}
