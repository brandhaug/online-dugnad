import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateHome() {
    const kvikk = JSON.parse(localStorage.getItem('kvikk'));

    if (kvikk !== null) {
      if (kvikk.russ === true) {
        this.router.navigate(['/russ']);
      } else if (kvikk.school === true) {
        this.router.navigate(['/skole']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }

}
