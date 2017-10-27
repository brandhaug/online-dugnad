import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {LoadingService} from '../../services/loading.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private flashMessagesService: FlashMessagesService,
              private loadingService: LoadingService,
              private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login(password) {
    if (password === 'frosta8') {
      this.router.navigate(['/dugnad/' + JSON.parse(localStorage.getItem('club')).url + '/admin']);
    }


    // this.loadingService.setLoading(true);
    // this.authenticationService.login({username: username, password: password})
    //   .subscribe(res => {
    //     this.loadingService.setLoading(false);
    //     this.authenticationService.saveToken(res.token);
    //     this.flashMessagesService.show(res.message, {cssClass: 'alert-success', timeout: 6000});
    //     this.router.navigate(['/']);
    //   }, err => {
    //     this.loadingService.setLoading(false);
    //   });
  }
}
