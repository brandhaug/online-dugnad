import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products = [];
  totalProfit = 0;

  constructor(private productsService: ProductsService, private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit() {
    this.productsService.getActiveProducts().subscribe(
      res => {
        for (let i = 0; i < res.products.length; i++) {
          for (let j = 0; j < res.products[i].skus.length; j++) {
            let imageIndex = 0;

            if (res.products[i].profit2 === 17000) {
              imageIndex = 0;
            } else if (res.products[i].skus[j].color === 'Hvit' || res.products[i].skus[j].color === 'Mørk grå') {
              imageIndex = 0;
            } else {
              imageIndex = 2;
            }

            let exists = false;
            let productIndex = 0;
            for (let k = 0; k < this.products.length; k++) {
              if (this.products[k].name === res.products[i].name && this.products[k].color === res.products[i].skus[j].color) {
                exists = true;
                productIndex = k;
                break;
              }
            }

            if (exists) {
              this.products[productIndex].sizes.push({
                _id: res.products[i].skus[j]._id,
                value: res.products[i].skus[j].size,
                quantity: 0
              });
            } else {
              this.products.push({
                name: res.products[i].name,
                image: res.products[i].images[imageIndex],
                color: res.products[i].skus[j].color,
                sizes: [{
                  _id: res.products[i].skus[j]._id,
                  value: res.products[i].skus[j].size,
                  quantity: 0
                }],
                profit: res.products[i].profit2,
                quantity: 0
              });
            }
          }
        }

      }, err => {
        this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      });
  }

  calculateProfits(event) {
    if (event >= 0) {
      for (let i = 0; i < this.products.length; i++) {
        this.products[i].quantity = 0;
        this.totalProfit = 0;
        for (let j = 0; j < this.products[i].sizes.length; j++) {
          this.products[i].quantity += this.products[i].sizes[j].quantity;
        }

        this.totalProfit += (this.products[i].quantity * this.products[i].profit / 100);
      }
    } else {
      this.flashMessagesService.show('Vennligst tast enn gyldig verdi', {cssClass: 'alert-danger', timeout: 6000});
    }
  }

}
