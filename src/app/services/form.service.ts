import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FormService {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  // getForm() {
  //   return this.http.get('../../../assets/files/form.pdf', {responseType: ResponseContentType.Blob})
  //     .catch((err: HttpErrorResponse) => this.globalService.handleServerError(err));
  // }

}
