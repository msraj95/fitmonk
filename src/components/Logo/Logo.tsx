import { Link } from 'react-router-dom';
import { LogoProps } from './type';
import { ROUTES } from '../../constants/routes';

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link
      to={ROUTES.HOME}
      className={`text-2xl font-bold tracking-tight ${className}`}
      aria-label="FitMonk home"
    >
      FitMonk
    </Link>
  );
};
