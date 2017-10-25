import {Product} from './product';
export interface Sku {
  _id: string;
  size: string;
  color: string;
  inventory: number;
  active: boolean;
  product: Product;
}
