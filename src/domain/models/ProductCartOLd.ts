export type productId = string;

export type ProductCart = {
  id: productId;
  name: string;
  price: number;
  img: string;
  qty: number;
  total: number;
};
