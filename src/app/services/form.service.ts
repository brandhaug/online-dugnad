import {Injectable} from '@angular/core';
import {Http, Response, ResponseContentType} from '@angular/http';
import 'rxjs/Rx';
import {GlobalService} from './global.service';
@Injectable()
export class FormService {

  constructor(private http: Http, private globalService: GlobalService) {
  }

  getForm() {
    return this.http.get('../../../assets/files/form.pdf', {responseType: ResponseContentType.Blob})
      .map((res: Response) => res['_body'])
      .catch((err: any) => this.globalService.handleServerError(err));
  }

}
