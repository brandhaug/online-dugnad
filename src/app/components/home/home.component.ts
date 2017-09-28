import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ProductsService} from '../../services/products.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<any[]>;

  constructor(private productsService: ProductsService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.products = this.productsService.getActiveProducts();
  }

}
