export type ProductCategory =
  | 'dry-fruits'
  | 'dates'
  | 'honey'
  | 'muesli'
  | 'talbina'
  | 'omani-barfi';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  unit: string;
  featured?: boolean;
  inStock: boolean;
}

export interface ProductCardProps {
  product: Product;
}
