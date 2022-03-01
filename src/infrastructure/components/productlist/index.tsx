import styles from './index.module.scss';
import CartItem from '../product';
import { Product } from '../../../domain/models/Product';

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <main className={styles.product__container}>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </main>
  );
}

export default ProductList;
