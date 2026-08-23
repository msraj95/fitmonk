import { Container } from '../Container';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-6 md:flex">
            <a href="/" className="text-sm font-medium hover:text-green-700">
              Home
            </a>

            <a
              href="/shop"
              className="text-sm font-medium hover:text-green-700"
            >
              Shop
            </a>

            <a
              href="/about"
              className="text-sm font-medium hover:text-green-700"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button type="button" aria-label="Search" className="text-sm">
              Search
            </button>

            <button
              type="button"
              aria-label="Shopping cart"
              className="text-sm"
            >
              Cart
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
