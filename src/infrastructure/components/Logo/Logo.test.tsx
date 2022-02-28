import { screen, render } from '@testing-library/react';
import Logo from '.';

const MockLogo = () => render(<Logo />);

describe('Componente <Logo />', () => {
  it('Se renderiza correctamente el compoente', () => {
    MockLogo();
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });

  it('Se texto del logo', () => {
    MockLogo();
    const text = screen.getByText('Mercado!');
    expect(text).toBeInTheDocument();
  });
});
