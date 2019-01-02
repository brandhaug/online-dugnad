import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  getActiveProducts(): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/products/active', {headers: headers})
      .pipe(
        catchError(this.globalService.handleError)
      );  }

  getProductByUrl(url): Observable<any> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

    return this.http.get(environment.crmBaseUrl + '/products/url/' + url, {headers: headers})
      .pipe(
        catchError(this.globalService.handleError)
      );  }
}
