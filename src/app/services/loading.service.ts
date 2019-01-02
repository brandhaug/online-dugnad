import { Injectable } from '@angular/core';
import {Subject} from "rxjs/index";

@Injectable()
export class LoadingService {

  loading: Subject<boolean>;

  constructor() {
    this.loading = new Subject();
  }

  setLoading(loading) {
    this.loading.next(loading);
  }

}
