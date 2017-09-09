import {Component, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from 'angulartics2';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {SystemRequestModalComponent} from '../system-request-modal/system-request-modal.component';

@Component({
  selector: 'app-digital-order-form',
  templateUrl: './digital-order-form.component.html',
  styleUrls: ['./digital-order-form.component.scss']
})
export class DigitalOrderFormComponent implements OnInit {

  products: any[];
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  openSendSystemRequest() {
    this.bsModalRef = this.modalService.show(SystemRequestModalComponent);
    this.mixpanel.eventTrack('Opened system request', null);
  }

}
