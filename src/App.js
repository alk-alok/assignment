import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./MainPages/Home";
import Products from "./MainPages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
