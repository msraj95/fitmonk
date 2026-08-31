import { Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import { ROUTES } from '../../constants/routes';
import { useCart } from '../../context/useCart';

export const Cart = () => {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Container>
        <div className="py-16 text-center">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="mt-3 text-gray-600">
            Add a few healthy essentials and come back here.
          </p>
          <Link
            to={ROUTES.SHOP}
            className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Continue Shopping
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-5">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-28 w-full rounded-xl object-cover sm:w-28"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold">{product.name}</h2>
                      <p className="text-sm text-gray-500">{product.unit}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 rounded-lg border border-gray-200">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="h-10 w-10 text-xl text-gray-600"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="h-10 w-10 text-xl text-gray-600"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-lg font-bold text-brand">
                      ₹{product.price * quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 text-lg font-bold">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <Link
              to={ROUTES.CHECKOUT}
              className="mt-6 block rounded-lg bg-brand px-6 py-3 text-center font-semibold text-white hover:bg-brand-dark"
            >
              Proceed to Checkout
            </Link>

            <button
              type="button"
              onClick={clearCart}
              className="mt-4 w-full rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:border-red-300 hover:text-red-600"
            >
              Clear Cart
            </button>
          </aside>
        </div>
      </div>
    </Container>
  );
};
