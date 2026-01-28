const ProductCard = ({ title, price, thumbnail }) => {
  return (
    <div className="card">
      <img src={thumbnail} width="100" alt={title} />
      <h4>{title}</h4>
      <p>₹{price}</p>
    </div>
  );
};

export default ProductCard;
