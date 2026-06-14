import useCart from "./useCart";

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header>
      <h1>Shop</h1>
      <span>Count : {totalItems}</span>
    </header>
  );
}
