import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../interfaces/cart';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  @Input() cart: Cart;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  addQuantity(item) {
    this.cartService.addQuantity(item);
  }

  subtractQuantity(item) {
    this.cartService.subtractQuantity(item);
  }

}
