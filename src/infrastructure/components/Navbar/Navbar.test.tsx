import { screen, render } from '@testing-library/react';
import Navbar from '.';

type MockNavbarProps = {
  qty: number;
  total: number;
};

const MockNavbar = ({ qty, total }: MockNavbarProps) =>
  render(<Navbar navCartData={{ qty, total }} />);

describe('Componente <Navbar />', () => {
  it('Se renderiza en pantalla', () => {
    MockNavbar({ qty: 0, total: 0 });
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('Contiene el componente <Logo />', () => {
    MockNavbar({ qty: 0, total: 0 });
    const text = screen.getByText('Mercado!');
    expect(text).toBeInTheDocument();
  });

  it('Contiene el componente <CartInfo />', () => {
    MockNavbar({ qty: 0, total: 0 });
    const img = screen.getByAltText('Carrito de compra');
    const p = screen.getByText((content, element) =>
      content.startsWith('Total')
    );
    expect(img).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
