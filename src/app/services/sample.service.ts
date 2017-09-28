import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {GlobalService} from './global.service';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SampleService {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  createSampleRequest(body) {
    body.online = false;
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.post(environment.crmBaseUrl + '/samplerequests', body, {headers: headers})
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }
}
