import {Product} from './product';
import {Sku} from './sku';
export interface Cart {
  items: [{
    product: Product,
    sku: Sku,
    quantity: number,
    subTotalAmount: number
  }];
  totalAmount: number;
  totalProfit: number;
  totalItems: number;
}
