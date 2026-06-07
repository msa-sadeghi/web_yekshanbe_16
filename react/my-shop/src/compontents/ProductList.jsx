import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://127.0.0.1:5000/products`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProducts(data.items);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`http://127.0.0.1:5000/products`);
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  });

  return (
    <div>
      {products.map((p) => (
        <div>
          <h1>{p.name}</h1>
        </div>
      ))}
    </div>
  );
}
