import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {GlobalService} from './global.service';
import {environment} from '../../environments/environment';

@Injectable()
export class SampleService {

  constructor(private http: Http, private globalService: GlobalService) {
  }

  createSampleRequest(data) {
    data.online = false;
    const body = JSON.stringify(data);
    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    });
    const options = new RequestOptions({headers: headers});

    return this.http.post(environment.crmBaseUrl + '/samplerequests', body, options)
      .map((res: Response) => res.json())
      .catch((err: any) => this.globalService.handleServerError(err));
  }
}
