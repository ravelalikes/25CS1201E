function ProductCard({ title, price }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>₹ {price}</p>
    </div>
  );
}

export default ProductCard;
