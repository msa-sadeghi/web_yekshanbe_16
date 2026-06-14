export default function ProductCart({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <button>Add To Basket</button>
    </div>
  );
}
