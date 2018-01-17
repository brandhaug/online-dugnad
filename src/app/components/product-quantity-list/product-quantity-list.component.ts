import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-quantity-list',
  templateUrl: './product-quantity-list.component.html',
  styleUrls: ['./product-quantity-list.component.scss']
})
export class ProductQuantityListComponent implements OnInit {

  @Input() reservations: any[];
  productOrderList: any[];

  constructor() { }

  ngOnInit() {
    const reservationsCopy = JSON.parse(JSON.stringify(this.reservations));

    this.productOrderList = [];

    for (let i = 0; i < reservationsCopy.length; i++) {
      for (let j = 0; j < reservationsCopy[i].lines.length; j++) {
        let exists = false;

        for (let k = 0; k < this.productOrderList.length; k++) {
          if (reservationsCopy[i].lines[j].sku._id === this.productOrderList[k].sku._id) {
            exists = true;
            this.productOrderList[k].quantity += reservationsCopy[i].lines[j].quantity;
            break;
          }
        }

        if (!exists) {
          this.productOrderList.push(reservationsCopy[i].lines[j]);
        }
      }
    }

    this.productOrderList.sort(function(a, b) {
      if (a.product.name < b.product.name) {
        return -1;
      }
      if (a.product.name > b.product.name) {
        return 1;
      }

      if (a.sku.color < b.sku.color) {
        return -1;
      }

      if (a.sku.color > b.sku.color) {
        return 1;
      }

      if (a.sku.size < b.sku.size) {
        return -1;
      }

      if (a.sku.sku > b.sku.size) {
        return 1;
      }

      return 0;
    });
  }
}
