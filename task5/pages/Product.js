import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Laptop', price: 55000 },
  { name: 'Headphones', price: 2500 },
  { name: 'Smartphone', price: 30000 },
];

function Products() {
  return (
    <div>
      <h2>Product Catalog</h2>
      {products.map((p, i) => <ProductCard key={i} product={p} />)}
    </div>
  );
}

export default Products;
