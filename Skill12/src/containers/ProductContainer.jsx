import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { trackFetch } from "../utils/fetchTracker";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Async/Await
  const loadProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
      console.log("Fetch count:", trackFetch());
    } catch (error) {
      alert("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // Promise chain (alternative)
  /*
  const loadProducts = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .finally(() => setLoading(false));
  };
  */

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {loading &&
        [1, 2, 3, 4].map((i) => <ProductSkeleton key={i} />)}

      {!loading &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
    </>
  );
};

export default ProductContainer;
