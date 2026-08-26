import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import { PRODUCTS } from '../../data/products';

export const ProductDetails = () => {
  const { productId } = useParams();

  const product = PRODUCTS.find((item) => item.slug === productId);
  if (!product) {
    return (
      <Container>
        <div className="py-16">
          <h1 className="text-3xl font-bold">Product not found</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid gap-10 py-16">
        <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-500">{product.unit}</p>

          <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>

          <p className="mt-4 text-2xl font-bold text-brand">₹{product.price}</p>

          <p className="mt-6 text-gray-600">{product.description}</p>

          <button
            type="button"
            className="mt-8 rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Container>
  );
};
