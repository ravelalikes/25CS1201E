import "./App.css";
import ProductList from "./components/ProductList";
import CartCounter from "./components/CartCounter";

const App = () => {
  return (
    <div className="app">
      <h2>E-Commerce Store</h2>
      <CartCounter />
      <ProductList />
    </div>
  );
};

export default App;
