import { Link } from 'react-router-dom';

import { Container } from '../../components/Container';
import { ROUTES } from '../../constants/routes';

export const NotFound = () => {
  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold">404</h1>

        <p className="mt-4 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to={ROUTES.HOME}
          className="mt-8 inline-flex rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
};
