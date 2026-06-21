import useCart from "./useCart";

export default function Cart() {
  const { cart, totalPrice, removeFromCart } = useCart();
  return (
    <div>
      <h2>Basket</h2>
      {cart.map((item) => (
        <div>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>remove</button>
        </div>
      ))}
      <p>total: {totalPrice}</p>
    </div>
  );
}
