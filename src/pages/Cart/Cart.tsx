import { Container } from '../../components/Container';

export const Cart = () => {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-bold">Cart</h1>
        <p className="mt-2 text-gray-600">Your cart is currently empty.</p>
      </div>
    </Container>
  );
};
