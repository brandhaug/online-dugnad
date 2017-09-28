import { Component } from '@angular/core';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;

  constructor(private loadingService: LoadingService) {
    loadingService.loading.subscribe(res => {
      this.loading = res;
    });
  }

  onDeactivate() {
    document.body.scrollTop = 0;
  }
}
