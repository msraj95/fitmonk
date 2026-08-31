import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { Logo } from '../Logo/Logo';
import { ROUTES } from '../../constants/routes';
import { useCart } from '../../context/useCart';

export const Header = () => {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-6 md:flex">
            <Link to={ROUTES.HOME} className="text-sm font-medium hover:text-brand">
              Home
            </Link>

            <Link to={ROUTES.SHOP} className="text-sm font-medium hover:text-brand">
              Shop
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to={ROUTES.CART}
              aria-label="Shopping cart"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium hover:border-brand hover:text-brand"
            >
              Cart
              {itemCount > 0 && (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-xs font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
