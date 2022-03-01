import styles from './index.module.scss';
import cart from '../../../assets/images/cart.png';
import { formatCurrency } from '../../../domain/utils';

type CartInfoProps = {
  cart_qty: number;
  cart_amount: number;
};

function CartInfo({ cart_qty, cart_amount }: CartInfoProps) {
  return (
    <div className={styles.cart__info}>
      <div className={styles.cart__logo}>
        <img src={cart} alt="Carrito de compra" />
        <span className={styles.cart__badge}>{cart_qty}</span>
      </div>
      <div className={styles.cart__amount}>
        <p>Total: {formatCurrency(cart_amount)}</p>
      </div>
    </div>
  );
}

export default CartInfo;
