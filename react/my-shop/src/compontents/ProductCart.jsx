import useCart from "./useCart";

export default function ProductCart({ product }) {
  const { addToCard } = useCart();
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => addToCard(product)}>Add To Basket</button>
    </div>
  );
}
