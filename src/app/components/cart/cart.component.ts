import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../interfaces/cart';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger(
      'cartAnimation',
      [
        transition(
          ':enter', [
            style({transform: 'translateX(100%)'}),
            animate('300ms', style({transform: 'translateX(0)'}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'translateX(0)'}),
            animate('300ms', style({transform: 'translateX(100%)'}))
          ]
        )]
    )
  ]
})
export class CartComponent implements OnInit {

  cart: Cart;
  cartOpened = false;
  loading = false;
  club: any;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.club = localStorage.getItem('club');


    this.cart = this.cartService.getCart();

    this.cartService.cartUpdated.subscribe(itemAdded => {
      this.cart = this.cartService.getCart();

      if (itemAdded) {
        this.cartOpened = true;
      }
    });
  }
}
