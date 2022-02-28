export interface ProductDTO {
  id: string;
  attributes: {
    name: string;
    price: number;
    quantity: number;
    image_app_url: string;
  };
}
