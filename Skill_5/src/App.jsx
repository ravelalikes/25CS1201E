import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <UserProvider>
      <Header />
      <Home />
      <Profile />
      <Dashboard />
      <Footer />
    </UserProvider>
  );
}
export default App;
