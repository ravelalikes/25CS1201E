import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Async/Await
  const loadProductsAsync = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch {
      alert("Failed to load products");
    }
    setLoading(false);
  };

  // Promise Chain
  const loadProductsPromise = () => {
    setLoading(true);

    fetchProducts()
      .then((data) => setProducts(data))
      .catch(() => alert("Failed to load products"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProductsAsync();
  }, []);

  return (
    <div>
      <h3>Products</h3>

      <button onClick={loadProductsAsync}>Reload (Async/Await)</button>
      <button onClick={loadProductsPromise}>Reload (Promise)</button>

      {loading && <p>Loading products...</p>}

      {!loading &&
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  );
};

// Fake API (Promise)
const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headphones", price: 3000 }
      ]);
    }, 1500);
  });
};

export default ProductList;
