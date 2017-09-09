import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {FlashMessagesService} from 'angular2-flash-messages/module';
// import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ProductModalComponent} from '../product-modal/product-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Angulartics2Mixpanel} from 'angulartics2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[];
  // bsModalRef: BsModalRef;

  constructor(private productsService: ProductsService,
              private flashMessagesService: FlashMessagesService,
              // private modalService: BsModalService,
              private modalService: NgbModal,
              private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
    this.productsService.getActiveProducts().subscribe(
      res => {
        this.products = res.products;
      }, err => {
        this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      });
  }

  openProduct(product) {
    const modalRef = this.modalService.open(ProductModalComponent, {size: 'lg'});
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.cartEnabled = false;
    this.mixpanel.eventTrack('Opened product', product);
    modalRef.result.then(res => {
      if (res) {

      }
    }).catch(() => {
    });
  }

  // public openProduct(product) {
  //   this.bsModalRef = this.modalService.show(ProductModalComponent);
  //   this.bsModalRef.content.product = product;
  //   this.bsModalRef.content.cartEnabled = false;
  // }
}
