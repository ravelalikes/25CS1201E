const ProductCard = ({ name, price }) => {
  return (
    <div className="product-card">
      <h4>{name}</h4>
      <p>{`Price: ₹${price}`}</p>
    </div>
  );
};

export default ProductCard;
