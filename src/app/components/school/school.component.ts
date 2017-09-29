import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  products: Observable<any[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    localStorage.setItem('kvikk', JSON.stringify({school: true}));
    this.products = this.productsService.getActiveProducts();
  }

}
