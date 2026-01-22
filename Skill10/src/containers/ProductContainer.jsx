import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import useCart from "../hooks/useCart";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = useCart(); // closure usage

  // ASYNC/AWAIT (CO2)
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch {
      alert("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {loading &&
        [1, 2, 3].map((i) => <ProductSkeleton key={i} />)}

      {!loading &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAdd={() => addToCart(product.name)}
          />
        ))}
    </>
  );
};

// PROMISE (3rd-party API simulation)
const fetchProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headphones", price: 3000 }
      ]);
    }, 2000);
  });

export default ProductContainer;
