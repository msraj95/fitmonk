import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { ProductCardProps } from '../../types/productType';

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <Link to={`${ROUTES.PRODUCT}/${product.slug}`}>
        <div className="aspect-square bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <p className="text-sm text-gray-500">{product.unit}</p>

        <Link
          to={`${ROUTES.PRODUCT}/${product.slug}`}
          className="mt-1 block text-lg font-semibold hover:text-brand"
        >
          {product.name}
        </Link>

        <p className="mt-2 text-lg font-bold text-brand">₹{product.price}</p>
      </div>
    </article>
  );
};
