import ProductList from './infrastructure/components/productlist';
import Container from './infrastructure/components/Container';
import Navbar from './infrastructure/components/Navbar';
import { useGlobalContext } from './infrastructure/context';
import { Product } from './domain/models/Product';
import { useState, useEffect } from 'react';
import { productService } from './domain/services/Product.service';
import Head from './infrastructure/components/Head';

function App() {
  const { qty, total } = useGlobalContext();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Head name="Merqueo" />
      <Navbar navCartData={{ qty, total }} />
      <Container>
        <ProductList products={products} />
      </Container>
    </>
  );
}

export default App;
