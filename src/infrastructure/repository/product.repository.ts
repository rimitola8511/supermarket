import { http } from '../http/http';
import { ProductDTO } from '../dto/ProductDTO';
import { Product } from '../../domain/models/Product';

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>();
    return products.map((productDto): Product => {
      const { name, price, quantity, image_app_url } = productDto.attributes;
      return {
        id: productDto.id,
        name,
        price: Number(price),
        stock: quantity,
        img: image_app_url,
        qty: 0,
      };
    });
  },
};
