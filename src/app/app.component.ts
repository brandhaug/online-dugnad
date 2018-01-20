import { Component } from '@angular/core';
import {LoadingService} from './services/loading.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;

  constructor(private loadingService: LoadingService,
              private router: Router) {
    loadingService.loading.subscribe(res => {
      this.loading = res;
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
