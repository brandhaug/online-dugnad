import {Component, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from 'angulartics2';
import {OrderSampleComponent} from '../order-sample/order-sample.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-order-sample-button',
  templateUrl: './order-sample-button.component.html',
  styleUrls: ['./order-sample-button.component.scss']
})
export class OrderSampleButtonComponent implements OnInit {

  products: any[];
  bsModalRef: BsModalRef;


  constructor(private modalService: BsModalService,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  openOrderSample() {
    this.bsModalRef = this.modalService.show(OrderSampleComponent);
    this.mixpanel.eventTrack('Opened order sample', null);
  }

}
