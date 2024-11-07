import "./App.css";
import CartModal from "./components/CartModal";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import { useCart } from "./context/cart.context";

function App() {
  const { isCartOpen } = useCart();

  return (
    <>
      <NavBar />
      <ProductPage />
      {isCartOpen && <CartModal />}
    </>
  );
}

export default App;
