import Cart from "./compontents/Cart";
import CartProvider from "./compontents/CartProvider";
import Header from "./compontents/Header";
import ProductList from "./compontents/ProductList";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Cart />
        <ProductList />
      </CartProvider>
    </div>
  );
}
export default App;
