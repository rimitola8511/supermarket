import { screen, render } from '@testing-library/react';
import Item from '.';
import { Product } from '../../../domain/models/Product';
import { product } from './__Mock__';

type MockItemProps = {
  product: Product;
};

const MockItem = ({ product }: MockItemProps) =>
  render(<Item product={product} />);

describe('Component <Item/>', () => {
  it('Renderiza una card con el producto', () => {
    MockItem({ product });
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });

  it('Contiene el título del producto', () => {
    MockItem({ product });
    const title = screen.getByText('Vino Tinto Vehemente', { exact: false });
    expect(title).toBeInTheDocument();
  });

  it('Contiene una foto del producto', () => {
    MockItem({ product });
    const img = screen.getByAltText('Vino Tinto Vehemente', { exact: false });
    expect(img).toBeInTheDocument();
  });

  it('Muestra el precio del producto formateado', () => {
    MockItem({ product });
    const price = screen.getByText('$ 14.990,00');
    expect(price).toBeInTheDocument();
  });

  it('Se rendiriza un botón', () => {
    MockItem({ product });
    const button = screen.getByRole('button', { name: 'Comprar' });
    expect(button).toBeInTheDocument();
  });
});
