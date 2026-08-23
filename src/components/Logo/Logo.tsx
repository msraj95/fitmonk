import { LogoProps } from './type';

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <a
      href="/"
      className={`text-2xl font-bold tracking-tight ${className}`}
      aria-label="FitMonk home"
    >
      FitMonk
    </a>
  );
};
