import {Sku} from './sku';
export interface Product {
  _id: string;
  name: string;
  logisticName: string;
  caption: string;
  description: string;
  soldOut: boolean;
  price2: number;
  profit2: number;
  images: any[];
  skus: Sku[];
  url: string;
}
