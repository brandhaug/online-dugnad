import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Angulartics2Mixpanel} from 'angulartics2';
import {OrderSampleComponent} from '../order-sample/order-sample.component';

@Component({
  selector: 'app-order-sample-button',
  templateUrl: './order-sample-button.component.html',
  styleUrls: ['./order-sample-button.component.css']
})
export class OrderSampleButtonComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  openOrderSample() {
    const modalRef = this.modalService.open(OrderSampleComponent);
    this.mixpanel.eventTrack('Opened order sample', null);
    modalRef.result.then(res => {
    }).catch(() => {
    });
  }

}
