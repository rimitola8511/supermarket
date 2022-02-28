import { screen, render } from '@testing-library/react';
import { ProductList } from '.';
import { Product } from '../../../domain/models/Product';
import { products } from './__Mocks__';

type MockProductListProps = {
  products: Product[];
};

const MockProductList = ({ products }: MockProductListProps) =>
  render(<ProductList products={products} />);

describe('Componente <ProductList />', () => {
  it('Se renderiza correctamente', () => {
    MockProductList({ products });
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('muestra tantos <Product/> como elemntos tenga el array que recibe por props', () => {
    MockProductList({ products });
    const productItems = screen.getAllByRole('article');
    expect(productItems.length).toBe(2);
  });
});
