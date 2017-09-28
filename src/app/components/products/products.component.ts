import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<any[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getActiveProducts();
  }


}
