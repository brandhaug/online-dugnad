import {Component, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from 'angulartics2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-sample-button',
  templateUrl: './order-sample-button.component.html',
  styleUrls: ['./order-sample-button.component.scss']
})
export class OrderSampleButtonComponent implements OnInit {

  products: any[];

  constructor(private router: Router,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  openOrderSample() {
    this.mixpanel.eventTrack('Opened order sample', null);
    this.router.navigate(['/gratis-vareprover']);
  }

}
