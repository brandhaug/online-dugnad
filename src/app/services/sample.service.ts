import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class SampleService {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  createSampleRequest(body) {
    body.online = false;
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.post<any>(environment.crmBaseUrl + '/samplerequests', body, {headers: headers})
      .pipe(
        catchError(this.globalService.handleError)
      );  }
}
