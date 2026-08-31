import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useCart } from '../../context/useCart';
import { ProductCardProps } from '../../types/productType';

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`${ROUTES.PRODUCT}/${product.slug}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-3 p-4">
        <p className="text-sm text-gray-500">{product.unit}</p>

        <Link
          to={`${ROUTES.PRODUCT}/${product.slug}`}
          className="block text-lg font-semibold text-gray-900 transition hover:text-brand"
        >
          {product.name}
        </Link>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-brand">₹{product.price}</p>
            {product.compareAtPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₹{product.compareAtPrice}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
};
