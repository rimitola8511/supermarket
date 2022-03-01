import { useState } from 'react';
import { Product } from '../../../domain/models/Product';
import { useGlobalContext } from '../../context';
import { formatCurrency } from '../../../domain/utils';
import styles from './index.module.scss';
import ShoppingCartButton from '../ShoppingCartButton';
import { productService } from '../../../domain/services/Product.service';

type ProductProps = {
  product: Product;
};

function Item({ product }: ProductProps) {
  const [showShoppingButtons, setShowShoppingButtons] = useState(false);
  const [prod, setProd] = useState<Product>(product);
  const { increase, decrease } = useGlobalContext();

  const increaseCart = (product: Product) => {
    const updatedProduct = productService.increaseProduct(product);
    setProd(updatedProduct);
    increase(updatedProduct);
  };

  const decreaseCart = (product: Product) => {
    const updatedProduct = { ...product, qty: --product.qty };
    if (!updatedProduct.qty) setShowShoppingButtons(false);
    setProd(updatedProduct);
    decrease(updatedProduct);
  };

  return (
    <article className={styles.card}>
      <div className={styles.card__img}>
        <img src={prod.img} alt={prod.name} />
      </div>
      <div className={styles.card__footer}>
        <h3>{prod.name}</h3>
        <h4>{formatCurrency(prod.price)}</h4>

        {showShoppingButtons ? (
          <ShoppingCartButton
            product={prod}
            increase={() => increaseCart(prod)}
            decrease={() => decreaseCart(prod)}
          />
        ) : (
          <button
            onClick={() => setShowShoppingButtons(true)}
            disabled={!prod.price}
          >
            Comprar
          </button>
        )}
      </div>
    </article>
  );
}

export default Item;
