import { Injectable } from '@angular/core';
import {Subject} from "rxjs/index";

@Injectable()
export class CartService {

  cart: any = {
    items: [],
    totalAmount: 0,
    totalItems: 0,
    totalProfit: 0
  };

  cartUpdated: Subject<boolean>;

  constructor() {
    this.cartUpdated = new Subject();
  }

  getItems(): any[] {
    if (localStorage.getItem('cart') === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem('cart')).items;
  }


  addItem(item): void {
    this.cart.items = this.getItems();
    let exists = false;

    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].sku._id === item.sku._id) {
        this.cart.items[i].quantity += item.quantity;

        if (this.cart.items[i].quantity > 50) {
          this.cart.items[i].quantity = 50;
        }

        this.cart.items[i].subTotalAmount = this.cart.items[i].price * this.cart.items[i].quantity;
        this.cart.items[i].subTotalProfit = this.cart.items[i].profit * this.cart.items[i].quantity;
        exists = true;
      }
    }

    if (!exists) {
      item.subTotalAmount = item.price * item.quantity;
      item.subTotalProfit = item.profit * item.quantity;


      this.cart.items.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCart(true);
  }

  removeItem(item): void {
    this.cart.items = this.getItems();

    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].sku._id === item.sku._id) {
        this.cart.items.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        break;
      }
    }

    this.updateCart(false);
  }

  addQuantity(item): void {
    this.cart.items = this.getItems();

    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].sku._id === item.sku._id && this.cart.items[i].quantity <= 50) {
        this.cart.items[i].quantity++;
        this.cart.items[i].subTotalAmount = this.cart.items[i].price * this.cart.items[i].quantity;
        this.cart.items[i].subTotalProfit = this.cart.items[i].profit * this.cart.items[i].quantity;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        break;
      }
    }

    this.updateCart(false);
  }

  subtractQuantity(item): void {
    if (item.quantity === 1) {
      this.removeItem(item);
    } else {
      this.cart.items = this.getItems();
      for (let i = 0; i < this.cart.items.length; i++) {
        if (this.cart.items[i].sku._id === item.sku._id && this.cart.items[i].quantity > 1) {
          this.cart.items[i].quantity--;
          this.cart.items[i].subTotalAmount = this.cart.items[i].price * this.cart.items[i].quantity;
          this.cart.items[i].subTotalProfit = this.cart.items[i].profit * this.cart.items[i].quantity;
          localStorage.setItem('cart', JSON.stringify(this.cart));
          break;
        }
      }

      this.updateCart(false);
    }
  }

  getCart() {
    this.cart.items = this.getItems();
    this.cart.totalItems = 0;
    this.cart.totalAmount = 0;
    this.cart.totalProfit = 0;

    for (let i = 0; i < this.cart.items.length; i++) {
      this.cart.totalItems += this.cart.items[i].quantity;
      this.cart.totalAmount += this.cart.items[i].subTotalAmount;
      this.cart.totalProfit += this.cart.items[i].subTotalProfit;
    }

    return this.cart;
  }

  clearCart() {
    this.cart.items = [];
    this.cart.totalAmount = 0;
    this.cart.totalItems = 0;
    this.cart.totalProfit = 0;

    localStorage.setItem('cart', JSON.stringify(this.cart));
    return this.cart;
  }

  updateCart(itemAdded) {
    this.cartUpdated.next(itemAdded);
  }


}
