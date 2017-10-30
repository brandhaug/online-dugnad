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
    this.productOrderList = [];

    for (let i = 0; i < this.reservations.length; i++) {
      console.log(this.reservations[i]._id);
      for (let j = 0; j < this.reservations[i].lines.length; j++) {
        let exists = false;

        for (let k = 0; k < this.productOrderList.length; k++) {
          if (this.reservations[i].lines[j].sku._id === this.productOrderList[k].sku._id) {
            exists = true;
            this.productOrderList[k].quantity += this.reservations[i].lines[j].quantity;
            break;
          }
        }

        if (!exists) {
          this.productOrderList.push(this.reservations[i].lines[j]);
        }
      }
    }
  }

}
