import { Container } from '../../components/Container';

export const Home = () => {
  return (
    <>
      <section className="bg-gray-50">
        <Container>
          <div className="py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
              Natural goodness
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Premium dry fruits and natural foods for a healthier everyday.
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-gray-600">
              Discover carefully selected dry fruits, dates, honey, muesli,
              talbina and more.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
              >
                Shop Now
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-16">
            <h2 className="text-3xl font-bold">Shop by Category</h2>

            <p className="mt-2 text-gray-600">Explore our collection.</p>
          </div>
        </Container>
      </section>
    </>
  );
};
