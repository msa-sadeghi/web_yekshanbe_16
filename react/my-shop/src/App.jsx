import { Route, Routes } from "react-router-dom";
import About from "./compontents/About";
import Home from "./compontents/Home";
import Layout from "./compontents/Layout";
import Products from "./compontents/Products";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
