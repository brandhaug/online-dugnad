import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {FlashMessagesService} from 'angular2-flash-messages/module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];

  constructor(private productsService: ProductsService, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.productsService.getActiveProducts().subscribe(
      res => {
        this.products = res.products;
      }, err => {
        this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      });
  }

}
