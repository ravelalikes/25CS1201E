import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App=()=>{
  return (
    <div className="app">
      <Header />
      <Home />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
