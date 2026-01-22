const useCart = () => {
  let count = 0; // memory preserved by closure

  return (productName) => {
    count++;
    alert(`${productName} added. Cart items: ${count}`);
  };
};

export default useCart;
