import { Product } from '../../../domain/models/Product';
import styles from './index.module.scss';

type shoppingCartButtonProps = {
  product: Product;
  increase: () => void;
  decrease: () => void;
};

function ShoppingCartButton({
  product,
  increase,
  decrease,
}: shoppingCartButtonProps) {
  const disabledPlus = product.qty > product.stock;
  const disabledMinus = product.qty === 0;
  return (
    <div className={styles.shoppingCartButton}>
      <button onClick={decrease} disabled={disabledMinus}>
        -
      </button>
      <span>{product.qty}</span>
      <button onClick={increase} disabled={disabledPlus}>
        +
      </button>
    </div>
  );
}

export default ShoppingCartButton;
