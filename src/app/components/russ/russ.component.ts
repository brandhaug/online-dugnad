import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-russ',
  templateUrl: './russ.component.html',
  styleUrls: ['./russ.component.scss']
})
export class RussComponent implements OnInit {

  products: Observable<any[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    localStorage.setItem('kvikk', JSON.stringify({russ: true}));
    this.products = this.productsService.getActiveProducts();
  }
}
