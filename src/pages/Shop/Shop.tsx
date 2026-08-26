import { Container } from '../../components/Container';
import { ProductCard } from '../../components/ProductCard';
import { PRODUCTS } from '../../data/products';

export const Shop = () => {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="mt-2 text-gray-600">Explore our products.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};
