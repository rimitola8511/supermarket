import { screen, render } from '@testing-library/react';
import CartInfo from '.';

type MockCartInfoProps = {
  cart_qty: number;
  cart_amount: number;
};

const MockCartInfo = ({ cart_qty, cart_amount }: MockCartInfoProps) =>
  render(<CartInfo cart_qty={cart_qty} cart_amount={cart_amount} />);

describe('Componente <CartInfo />', () => {
  it('Muestra una imagen de un carrito de compra en pantalla', () => {
    MockCartInfo({ cart_qty: 0, cart_amount: 0 });
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('Muestra el saldo del carrito en pantalla', () => {
    MockCartInfo({ cart_qty: 0, cart_amount: 1000 });
    const p = screen.getByText('Total: $ 1.000,00');
    expect(p).toBeInTheDocument();
  });

  it('Muestra la cantidad de productos en el carrito de compras', () => {
    MockCartInfo({ cart_qty: 5, cart_amount: 0 });
    const span = screen.getByText('5');
    expect(span).toBeInTheDocument();
  });
});
