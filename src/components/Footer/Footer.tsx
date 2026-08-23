// const igHandle = import.meta.env.VITE_INSTAGRAM_HANDLE || 'heyfitmonk'

import { Container } from '../Container';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-lg font-bold">FitMonk</h2>
              <p className="mt-3 text-sm text-gray-600">
                Natural goodness for everyday living.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Shop</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>Dry Fruits</li>
                <li>Dates</li>
                <li>Honey</li>
                <li>Muesli</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Support</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>Shipping</li>
                <li>Returns</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} FitMonk. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
