import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<any[]>;

  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit() {
    const kvikk = JSON.parse(localStorage.getItem('kvikk'));

    if (kvikk !== null &&  kvikk.russ === true) {
      this.router.navigate(['/russ']);
    } else {
      this.router.navigate(['/']);
    }


    this.products = this.productsService.getActiveProducts();
  }

}
