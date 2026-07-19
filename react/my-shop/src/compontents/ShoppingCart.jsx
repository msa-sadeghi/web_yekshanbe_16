import { useReducer } from "react";
import cartReducer from "./cartReducer";
export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [
      { id: 1, name: "laptop asus", price: 1000, quantity: 1 },
      { id: 2, name: "iphone 18", price: 2000, quantity: 2 },
    ],
  });
  const totalPrice = state.items.reduce(
    (sum, x) => sum + x.price * x.quantity,
    0,
  );
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };
  const handleChange = (id, q) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity: q });
  };
  return (
    <div>
      <h2>ShoppingCart</h2>
      {state.items.map((p) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <span>{p.name}</span>
          <span>{p.price}</span>
          <input
            onChange={(e) => handleChange(p.id, e.target.value)}
            type="number"
            min="1"
            value={p.quantity}
          />
          <button onClick={() => handleRemove(p.id)}>remove</button>
        </div>
      ))}
      <div>total price: {totalPrice}</div>
    </div>
  );
}
