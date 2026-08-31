import { Link, useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import { ROUTES } from '../../constants/routes';
import { useCart } from '../../context/useCart';
import { PRODUCTS } from '../../data/products';

export const ProductDetails = () => {
  const { productId } = useParams();
  const { addItem } = useCart();

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
      <div className="grid gap-10 py-16 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            {product.unit}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <p className="text-2xl font-bold text-brand">₹{product.price}</p>
            {product.compareAtPrice && (
              <p className="text-lg text-gray-400 line-through">
                ₹{product.compareAtPrice}
              </p>
            )}
          </div>

          <p className="mt-6 text-base leading-7 text-gray-600">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => addItem(product, 1)}
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Add to Cart
            </button>

            <Link
              to={ROUTES.SHOP}
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-brand hover:text-brand"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
