import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <main>
      <h3>Products</h3>

      <ProductCard name="Laptop" price="50000" />
      <ProductCard name="Mobile" price="20000" />
      <ProductCard name="Headphones" price="3000" />
    </main>
  );
};

export default Products;
