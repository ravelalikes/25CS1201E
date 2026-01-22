import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header />

      {!isLoggedIn ? (
        <>
          <Home />
          <Login onLogin={() => setIsLoggedIn(true)} />
        </>
      ) : (
        <Dashboard />
      )}

      <Footer />
    </>
  );
}

export default App;
