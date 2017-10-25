import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Observable<any[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getActiveProducts();
  }


}
