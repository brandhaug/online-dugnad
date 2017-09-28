import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GlobalService {

  constructor() { }

  public handleServerError(err: any) {
    console.log(err);
    return Observable.throw(err.error || 'Server error');
  }

}
