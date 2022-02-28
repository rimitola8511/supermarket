import { Product } from '../models/Product';

export type cartId = string;

export type Cart = {
  id: cartId;
  total: number;
  items: Product[];
};
