import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  return (
    <main>
      <h3>Products</h3>

      {products.map(({ id, name, price }) => (
        <ProductCard key={id} name={name} price={price} />
      ))}
    </main>
  );
};

export default Products;
