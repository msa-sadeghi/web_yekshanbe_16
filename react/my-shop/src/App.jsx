import { useMemo, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const numbers = Array.from({ length: 100000 }, (_, index) => index);
  
  const evenNumbers = useMemo(()=>{
    return numbers.filter((number) => number % 2 === 0);
  },  [numbers])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      <p>تعداد اعداد زوج: {evenNumbers.length}</p>
    </>
  );
}

export default App;
