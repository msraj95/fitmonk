import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { Logo } from '../Logo/Logo';
import { ROUTES } from '../../constants/routes';

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-brand">
              Home
            </Link>

            <Link to="/shop" className="text-sm font-medium hover:text-brand">
              Shop
            </Link>

            <Link to="/about" className="text-sm font-medium hover:text-brand">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button type="button" aria-label="Search" className="text-sm">
              Search
            </button>

            <Link
              to={ROUTES.CART}
              aria-label="Shopping cart"
              className="text-sm"
            >
              Cart
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
