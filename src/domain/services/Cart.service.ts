import * as uuid from 'uuid';
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';

const hasProduct = (cart: Cart, product: Product) =>
  cart.items.find((item) => item.id === product.id);

const createCart = (product: Product): Cart => {
  console.log('create');
  const total = product.price;
  return {
    id: uuid.v4(),
    items: [{ ...product, qty: 1 }],
    total,
  };
};

const increaseCart = (cart: Cart, product: Product): Cart => {
  cart.total += product.price;
  return {
    ...cart,
    items: [...cart.items, { ...product, qty: 1 }],
  };
};

const decreaseCart = (cart: Cart, product: Product): Cart => {
  let tempItems = cart.items
    .map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...cartItem, qty: cartItem.qty - 1 };
      }
      return cartItem;
    })
    .filter((cartItem) => cartItem.qty !== 0);

  return {
    ...cart,
    items: [...tempItems],
    total: getTotalAmountInCart(tempItems),
  };
};

const increseItemInCart = (cart: Cart, product: Product): Cart => {
  let tempItems = cart.items.map((cartItem) => {
    if (cartItem.id === product.id) {
      return { ...cartItem, qty: cartItem.qty + 1 };
    }
    return cartItem;
  });
  return {
    ...cart,
    items: [...tempItems],
    total: getTotalAmountInCart(tempItems),
  };
};

const getTotalAmountInCart = (products: Product[]): number =>
  products.reduce((total, item) => (total += item.qty * item.price), 0);

const getTotalItemsInCart = (cart: Cart): number =>
  cart.items.reduce((acc, item) => {
    return (acc += item.qty);
  }, 0);

const addProductToCart = (product: Product, cart: Cart): Cart => {
  return cart.items.length
    ? hasProduct(cart, product)
      ? increseItemInCart(cart, product)
      : increaseCart(cart, product)
    : createCart(product);

  //return cart ? increaseCart(cart, product) : createCart(product);
};

export const cartService = {
  addProductToCart,
  getTotalItemsInCart,
  decreaseCart,
};
