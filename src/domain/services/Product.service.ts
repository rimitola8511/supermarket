import { productRepository } from '../../infrastructure/repository/product.repository';
import { Product } from '../models/Product';

export const productService = {
  getProducts: () => {
    return productRepository.getProducts();
  },

  increaseProduct: (product: Product) => {
    const newProduct = { ...product, qty: product.qty + 1 };
    return newProduct;
  },
};
