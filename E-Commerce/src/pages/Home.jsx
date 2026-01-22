import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <main>
      <h2>Products</h2>

      <ProductCard title="Laptop" price="55000" />
      <ProductCard title="Mobile" price="25000" />
      <ProductCard title="Headphones" price="3000" />
    </main>
  );
}

export default Home;
