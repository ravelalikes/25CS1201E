const CartCounter = () => {

  // Closure
  const createCart = () => {
    let count = 0;

    return () => {
      count++;
      return count;
    };
  };

  const addToCart = createCart();

  const handleAdd = () => {
    alert(`Items in cart: ${addToCart()}`);
  };

  return (
    <div className="product">
      <h3>Cart</h3>
      <button onClick={handleAdd}>Add Item to Cart</button>
    </div>
  );
};

export default CartCounter;
