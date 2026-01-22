const ProductCard = ({ name, price, onAdd }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>₹{price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
