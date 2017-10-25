import { Component, OnInit } from '@angular/core';
import {Cart} from '../../interfaces/cart';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart: Cart;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();

    this.cartService.cartUpdated.subscribe(res => {
      this.cart = this.cartService.getCart();
    });
  }

}
