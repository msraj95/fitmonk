import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import { ROUTES } from '../../constants/routes';
import { useCart } from '../../context/useCart';

export const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert('Order placed successfully!');
    clearCart();
  };

  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-bold">Checkout</h1>

        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-gray-300 p-8 text-center">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
            <Link
              to={ROUTES.SHOP}
              className="mt-4 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
            >
              Shop Products
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                  <input
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-brand"
                    placeholder="Your name"
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Phone
                  <input
                    required
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-brand"
                    placeholder="+91 98765 43210"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm font-medium text-gray-700">
                Address
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-brand"
                  placeholder="Street, city, state"
                />
              </label>

              <label className="mt-5 block text-sm font-medium text-gray-700">
                Payment Method
                <select
                  defaultValue="cod"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-brand"
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="upi">UPI</option>
                  <option value="card">Card</option>
                </select>
              </label>
            </div>

            <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-bold">Summary</h2>
              <div className="mt-5 space-y-3 text-sm text-gray-700">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between gap-4">
                    <span>
                      {product.name} × {quantity}
                    </span>
                    <span>₹{product.price * quantity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 text-lg font-bold">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
              >
                Place Order
              </button>
            </aside>
          </form>
        )}
      </div>
    </Container>
  );
};
