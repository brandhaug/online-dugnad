import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  getActiveProducts(): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/products/active', {headers: headers})
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }

  getProductByUrl(url): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/products/url/' + url, {headers: headers})
      .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  }
}
