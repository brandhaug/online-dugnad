import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';

@Injectable()
export class ProductsService {

  constructor(private http: Http, private globalService: GlobalService) {
  }

  getActiveProducts() {
    return this.http.get('/api/products/active')
      .map((res: Response) => res.json())
      .catch((err: any) => this.globalService.handleServerError(err));
  }
}
