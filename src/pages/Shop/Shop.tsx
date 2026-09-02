import { useMemo, useState } from 'react';
import { Container } from '../../components/Container';
import { ProductCard } from '../../components/ProductCard';
import { PRODUCTS } from '../../data/products';
import { useDebounce } from '../../hooks/useDebaunce';
import { CATEGORIES } from '../../constants';

export const Shop = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');
  const debouncedQuery = useDebounce(query, 300);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchCat = category === 'all' || p.category === category;
      return matchSearch && matchCat;
    });
  }, [debouncedQuery, category]);

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-bold">Shop</h1>

        {/* Search + Filter  */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search honey, dates, almonds..."
            className="w-full sm:w-80 rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition ${category === c ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500">{filtered.length} products</p>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-500">
            No products found for "{debouncedQuery}" in {category}
          </p>
          <button
            onClick={() => {
              setQuery('');
              setCategory('all');
            }}
            className="mt-3 text-brand underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </Container>
  );
};
