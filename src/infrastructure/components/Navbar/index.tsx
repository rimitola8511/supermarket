import Container from '../Container';
import Logo from '../Logo';
import CartInfo from '../CartInfo';
import styles from './index.module.scss';

type NavbarProps = {
  navCartData: {
    qty: number;
    total: number;
  };
};

function Navbar({ navCartData }: NavbarProps) {
  const { qty, total } = navCartData;
  return (
    <nav className={styles.nav} role="navigation">
      <Container>
        <div className={styles.nav__container}>
          <Logo />
          <CartInfo cart_qty={qty} cart_amount={total} />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
