import { Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import { ROUTES } from './../../constants/routes';
import { PRODUCTS } from '../../data/products';

export const Home = () => {
  const featuredProducts = PRODUCTS.filter((product) => product.featured);

  return (
    <>
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Container>
          <div className="grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                Natural goodness
              </p>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Healthy staples for a stronger, happier everyday.
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-gray-600">
                Discover premium dry fruits, dates, honey, muesli, talbina and
                more for mindful living.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to={ROUTES.SHOP}
                  className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  Shop Now
                </Link>
                <Link
                  to={ROUTES.SHOP}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-brand hover:text-brand"
                >
                  View Collection
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {featuredProducts.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden rounded-2xl bg-gray-50"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-36 w-full object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-700">
                        {product.name}
                      </p>
                      <p className="mt-1 text-sm font-bold text-brand">
                        ₹{product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Best picks
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Popular products
              </h2>
            </div>
            <Link
              to={ROUTES.SHOP}
              className="text-sm font-semibold text-brand hover:text-green-800"
            >
              Browse all
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`${ROUTES.PRODUCT}/${product.slug}`}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{product.unit}</p>
                  <h3 className="mt-2 font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg font-bold text-brand">
                    ₹{product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
